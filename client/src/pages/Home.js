import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';

import { productActions } from '../redux/actions';
import images from '../assets/images';
import EventItem from '../components/EventItem';

const events = [
	{
		background: images.event1,
	},
	{
		background: images.event2,
	},
];

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.productsSubmit);
	useEffect(() => {
		dispatch(productActions.getProductsSubmit.getProductsSubmitRequest());
	}, [dispatch]);
	return (
		<div>
			<Carousel autoplay>
				{events.map((event) => (
					<EventItem
						title={event.title}
						sub={event.sub}
						background={event.background}
					/>
				))}
			</Carousel>
		</div>
	);
};

export default Home;
