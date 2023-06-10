import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';

import { productActions } from '../redux/actions';
import configs from '../configs';
import images from '../assets/images';
import icons from '../assets/icons';
import EventItem from '../components/EventItem';
import Product from '../components/Product';

const events = [
	{
		background: images.event1,
	},
	{
		background: images.event2,
	},
];

const WrapperStyled = styled.div`
	margin-top: 2rem;
	padding: 0 2rem;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const GridContainerStyled = styled.div`
	display: grid;
	max-width: var(--max-width-table);
	width: 100%;
	grid-template-columns: 1fr 1fr 0.6fr;
	grid-template-rows: 1fr 1fr;
	gap: 1rem;

	.item {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2rem;
		cursor: pointer;
		transition: all 0.5s ease-in-out;

		img {
			width: 100%;
			max-width: 5rem;
			margin-right: 1rem;
		}

		p {
			font-size: 1.25rem;
		}
		:hover {
			opacity: 0.8;
		}
	}

	.item:nth-child(1) {
		background-color: #e9bdbe;
	}
	.item:nth-child(2) {
		background-color: #fbefe3;
	}
	.item:nth-child(3) {
		background-color: #e1d7cd;
	}
	.item:nth-child(4) {
		background-color: #dfd8ab;
	}

	.item:nth-child(5) {
		background-color: #c0d3d8;
		grid-column: 3/4;
		grid-row: 1/3;

		flex-direction: column;
		margin-right: 0;
		img {
			margin-bottom: 1rem;
		}
	}
`;
const ProductsHotStyled = styled.div`
	display: grid;
	max-width: var(--max-width-default-layout);
	width: 100%;
	grid-template-columns: repeat(4, 1fr);
	gap: 1rem;

	@media (max-width: 992px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;
const TitleStyled = styled.h2`
	margin: 1rem 0;
	font-size: 2.25rem;
`;

const Home = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.productsSubmit);
	useEffect(() => {
		dispatch(productActions.getProductsSubmit.getProductsSubmitRequest());
	}, [dispatch]);
	return (
		<div>
			<Carousel autoplay>
				{events.map((event, index) => (
					<EventItem
						key={index}
						title={event.title}
						sub={event.sub}
						background={event.background}
					/>
				))}
			</Carousel>
			<WrapperStyled>
				<GridContainerStyled>
					<Link to={configs.routes.list} className="item">
						<img src={icons.myPham} alt="my-pham" />
						<p>Mỹ phẩm</p>
					</Link>
					<Link to={configs.routes.list} className="item">
						<img src={icons.duongDa} alt="duong-da" />
						<p>Chăm sóc da</p>
					</Link>
					<Link to={configs.routes.list} className="item">
						<img src={icons.duongToc} alt="duong-toc" />
						<p>Chăm sóc tóc</p>
					</Link>
					<Link to={configs.routes.list} className="item">
						<img src={icons.duongThe} alt="duong-the" />
						<p>Dưỡng thể</p>
					</Link>
					<Link to={configs.routes.list} className="item">
						<img src={icons.nuocHoa} alt="nuoc-hoaz" />
						<p>Nước hoa</p>
					</Link>
				</GridContainerStyled>
			</WrapperStyled>
			<WrapperStyled>
				<TitleStyled>Sản phẩm nổi bật</TitleStyled>
				<ProductsHotStyled>
					{products?.map((product, index) =>
						index < 12 ? (
							<Product key={index} product={product} />
						) : (
							''
						)
					)}
				</ProductsHotStyled>
			</WrapperStyled>
		</div>
	);
};

export default Home;
