import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { AiOutlineSearch } from 'react-icons/ai';
import HeadlessTippy from '@tippyjs/react/headless';

import * as searchServices from '~/services/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import { useDebounce } from '~/hooks';
import ProductResult from './ProductResult';

const cx = classNames.bind(styles);

const Search = () => {
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [showResult, setShowResult] = useState(false);

	const inputRef = useRef();

	const debouncedValue = useDebounce(searchValue, 500);

	useEffect(() => {
		if (!debouncedValue.trim()) {
			setSearchResult([]);
			return;
		}

		const fetchApi = async () => {
			const result = await searchServices.search(debouncedValue);

			setSearchResult(result);
		};

		fetchApi();
	}, [debouncedValue]);

	const handleButtonClick = () => {
		inputRef.current.focus();
	};

	const handlerChange = (e) => {
		const searchValue = e.target.value;
		if (searchValue.startsWith(' ')) return;
		setSearchValue(searchValue);
	};

	return (
		<div>
			<HeadlessTippy
				visible={searchResult.length > 0 && showResult}
				interactive
				onClickOutside={() => setShowResult(false)}
				render={(attrs) => (
					<div
						className={cx('search-result')}
						tabIndex="-1"
						{...attrs}
					>
						<PopperWrapper className={cx('search-box')}>
							<h4 className={cx('search-title')}>
								Sản phẩm liên quan
							</h4>
							{searchResult?.map((result) => (
								<ProductResult
									key={result._id}
									product={result}
								/>
							))}
						</PopperWrapper>
					</div>
				)}
			>
				<div className={cx('search')}>
					<input
						ref={inputRef}
						value={searchValue}
						type="text"
						placeholder="Nhập tên sản phẩm muốn tìm ..."
						onChange={handlerChange}
						onFocus={() => setShowResult(true)}
					/>
					<button onClick={handleButtonClick}>
						<AiOutlineSearch />
					</button>
				</div>
			</HeadlessTippy>
		</div>
	);
};

export default Search;
