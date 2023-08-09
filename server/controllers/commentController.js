const mongoose = require('mongoose');

const Comment = require('../models/comment');
const Product = require('../models/product');

// Create a new comment
const createComment = async (req, res, next) => {
	try {
		const { rate, content } = req.body;
		const productId = req.params.productId;
		console.log(req.params);
		const userId = req.user._id;
		const comment = new Comment({
			userId,
			rate,
			content,
			productId,
		});
		await comment.save();

		// After saving the comment, find all comments for the product and recalculate the average rating
		const comments = await Comment.find({ productId });
		let averageRating = 0;
		if (comments.length > 0) {
			averageRating =
				comments.reduce((acc, comment) => acc + comment.rate, 0) /
				comments.length;
		}

		// Then find the product and update its rating
		const productToUpdate = await Product.findById(productId);
		productToUpdate.rating = averageRating;
		await productToUpdate.save();

		return res
			.status(201)
			.json({ message: 'Comment created successfully', comment });
	} catch (error) {
		next(error);
	}
};

// Delete a comment by id
const deleteComment = async (req, res, next) => {
	try {
		const id = req.params.id;
		await Comment.findByIdAndRemove(id);
		res.status(201).json({
			message: 'Comment deleted successfully',
		});
	} catch (error) {
		next(error);
	}
};

// Get all comments
const getAllCommentOfProduct = async (req, res, next) => {
	try {
		const { productId } = req.params;
		const comments = await Comment.find({
			product: mongoose.Types.ObjectId(productId),
		}).populate('user', 'username');

		res.status(200).json({
			message: 'Comment fetched successfully',
			comments,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = {
	createComment,
	deleteComment,
	getAllCommentOfProduct,
};
