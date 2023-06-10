import { createGlobalStyle } from 'styled-components';

export const theme = {
	'@primary-color': '#b8b8d1',
	'@secondary-color': '#5b5f97',
};

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Roboto', sans-serif;
		src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
	}

	@font-face {
		font-family: 'DynaPuff', cursive;
		src: url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@700&display=swap');;
	}

	:root {
		--primary-color:  ${(props) => props.theme['@primary-color']};
		--secondary-color:  ${(props) => props.theme['@secondary-color']};
		--primary-background: #ecf0f3;
		--secondary-background: #fff;

		--text-900: #100e34;
		--text-700: #454c53;
		--text-100: #e6e9ed;
		--text-50: #f5f7fa;


		--black: #000;
		--white: #fff;

		--width-aside: 15rem;
		--max-width-default-layout: 75rem;

		--max-width-large: 1200px;
		--max-width-laptop: 992px;
		--max-width-table: 768px;
		--max-width-mobile: 600px;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
		list-style: none;
	}

	html,
	body {
		line-height: 1.5;
		text-rendering: optimizeSpeed;

		@media (max-width: 768px) {
			font-size: 62.5%;
		}
	}

	// scrollbar
	html *::-webkit-scrollbar {
		border-radius: 0;
		width: 8px;
	}

	html *::-webkit-scrollbar-thumb {
		border-radius: 4px;
		background-color: rgba(22, 24, 35, .06);
	}

	html *::-webkit-scrollbar-track {
		border-radius: 0;
		background-color: rgba(0, 0, 0, 0);
	}

	button, input {
		border: none;
		outline: none;
		background-color: transparent;
	}

	a {
		text-decoration: none;
		color: var(--text-900);
	}
`;

export default GlobalStyle;
