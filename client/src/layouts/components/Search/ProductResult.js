import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const ProductResult = ({ product }) => {
	const [rating, setRating] = useState(4); // Initial value

	return (
		<Link to={`product/${product._id}`} className={cx('product-result')}>
			<img
				src={process.env.REACT_APP_BASE_URL + product.images[0]}
				alt=""
			/>
			<div className="info">
				<p className={cx('title')}>{product.title}</p>
				<Rating
					style={{ maxWidth: 50 }}
					readOnly
					value={rating}
					onChange={setRating}
				/>
				<p className={cx('price')}>{product.price.toLocaleString()}</p>
			</div>
		</Link>
	);
};

ProductResult.propTypes = {
	product: PropTypes.object.isRequired,
};

export default ProductResult;
