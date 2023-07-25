require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const router = require('./routes');

const app = express();
const port = 5000;

// middleware
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(cors());

//connect database
const URI =
	'mongodb+srv://admin:VSVWoXOdlMNABlYS@mydatabase.rofm6es.mongodb.net/?retryWrites=true&w=majority';
mongoose
	.connect(URI, {
		dbName: 'ecommerce',
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((res) => console.log('> Connected...'))
	.catch((err) => console.log(`> Error while connecting to mongoDB`));

// swagger
const options = {
	definition: {
		openapi: '3.1.0',
		info: {
			title: 'e-Commerce api ',
			version: '0.1.0',
			description: 'API for e-Commerce website',
		},
		servers: [
			{
				url: 'http://localhost:5000',
			},
		],
	},
	apis: ['./helpers/swagger/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// route
app.use('/', router);

// catch 404 errors and forward them to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 400;
	next(err);
});

app.use((err, req, res, next) => {
	const error = app.get('env') === 'development' ? err : {};
	const status = error.status || 500;

	// response to client
	return res.status(status).json({
		err: {
			message: err?.message,
		},
	});
});

app.listen(port, () =>
	console.log('> Server is up and running on port : ' + port)
);
