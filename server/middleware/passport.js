const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const GooglePlusTokenStrategy = require('passport-google-plus-token');
const { ExtractJwt } = require('passport-jwt');

const { JWT_SECRET, AUTH } = require('../configs');
const User = require('../models/user');

// passport JWT
passport.use(
	new JwtStrategy(
		{
			jwtFromRequest:
				ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
			secretOrKey: JWT_SECRET,
		},
		async (payload, done) => {
			try {
				const email = payload.sub;
				const user = await User.findOne({ email });

				if (!user) return done(null, false);

				done(null, user);
			} catch (error) {
				done(error, false);
			}
		}
	)
);

// passport google
passport.use(
	new GooglePlusTokenStrategy(
		{
			clientID: AUTH.GOOGLE.CLIENT_ID,
			clientSecret: AUTH.GOOGLE.CLIENT_SECRET,
			passReqToCallback: true,
		},
		async (req, accessToken, refreshToken, profile, done) => {
			try {
				// check whether this current user exists in our database
				const user = await User.findOne({
					authGoogleID: profile.id,
					authType: 'google',
				});

				if (user) return done(null, user);

				// if new user
				const newUserInstance = new User({
					authType: 'google',
					authGoogleID: profile.id,
					email: profile.emails[0].value,
					firstName: profile.name.familyName,
					lastName: profile.name.givenName,
				});

				await newUserInstance.save();
				done(null, newUserInstance);
			} catch (error) {
				done(error, false);
			}
		}
	)
);

// passport local
passport.use(
	new LocalStrategy(
		{
			usernameField: 'email',
		},
		async (email, password, done) => {
			try {
				const user = await User.findOne({ email });

				if (!user) return done(null, false);

				const isCorrectPassword = await user.isValidPassword(password);

				if (!isCorrectPassword) return done(null, false);

				done(null, user);
			} catch (error) {
				done(error, false);
			}
		}
	)
);
