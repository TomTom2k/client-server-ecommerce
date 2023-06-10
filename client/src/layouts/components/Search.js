import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeadlessTippy from '@tippyjs/react/headless';

import { AiOutlineSearch } from 'react-icons/ai';

import Wrapper from '../../components/Popper/Wrapper';
import ProductItem from '../../components/ProductItem';
import { apiProduct } from '../../api';
import { useDebounce } from '../../hooks';

const PopperStyled = styled.div`
	width: min(100vw, 30rem);
	max-height: 30rem;
	overflow: auto;
	padding: 1rem;
	padding-left: 1.5rem;
	border-radius: 1rem;

	background-color: var(--secondary-background);
	box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.36);
`;
const SearchWrapperStyled = styled.div`
	border: 1px solid var(--primary-color);
	border-radius: 1rem;
	overflow: hidden;
	background-color: var(--secondary-background);

	display: flex;
	justify-content: space-between;
	align-items: stretch;

	input {
		padding: 0.2rem 1rem;
	}

	svg {
		width: 4rem;
		height: 2rem;
		background-color: var(--primary-color);
		color: var(--white);
		transition: all 0.2s linear;

		:hover {
			filter: brightness(0.8);
		}
	}
`;
const TitlePopoverStyled = styled.h3`
	margin-bottom: 0.5rem;
`;

const Search = () => {
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [showResult, setShowResult] = useState(true);

	const debounceValue = useDebounce(searchValue, 500);

	useEffect(() => {
		if (!debounceValue.trim()) {
			setSearchResult([]);
			return;
		}
		const fetchApi = async () => {
			const result = await apiProduct.getProductsSubmit(debounceValue);
			setSearchResult(result.data);
		};

		fetchApi();
	}, [debounceValue]);

	const handlerChange = (e) => {
		const searchValue = e.target.value;
		if (searchValue.startsWith(' ')) return;
		setSearchValue(searchValue);
	};
	const handlerHideResult = () => {
		setShowResult(false);
	};
	const handlerShowResult = () => {
		setShowResult(true);
	};

	return (
		<div>
			<HeadlessTippy
				visible={searchResult.length > 0 && showResult}
				interactive
				render={(attrs) => (
					<div tabIndex="-1" {...attrs}>
						<Wrapper PopperStyled={PopperStyled}>
							<TitlePopoverStyled>
								Sản phẩm liên quan
							</TitlePopoverStyled>
							{searchResult.map((result) => (
								<ProductItem
									key={result._id}
									title={result.title}
									image={result.images[0]}
									price={result.price}
								/>
							))}
						</Wrapper>
					</div>
				)}
				onClickOutside={handlerHideResult}
			>
				<SearchWrapperStyled>
					<input
						type="text"
						onChange={handlerChange}
						onFocus={handlerShowResult}
					/>
					<AiOutlineSearch onClick={handlerShowResult} />
				</SearchWrapperStyled>
			</HeadlessTippy>
		</div>
	);
};

export default Search;
