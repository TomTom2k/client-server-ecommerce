import { createGlobalStyle } from 'styled-components';

export const theme = {
	'@primary-color': '#d5f2e3',
};

const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: 'Roboto', sans-serif;
		src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
	}

	:root {
		--primary-color:  ${(props) => props.theme['@primary-color']},
		--secondary-background: #73ba9b;

		--text-900: #100e34;
		--text-700: #e1dee6;


		--black: #000;
		--white: #fff;

		--width-aside: 25rem;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Roboto', sans-serif;
	}

	html,
	body {
		line-height: 1.5;
		text-rendering: optimizeSpeed;
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
`;

export default GlobalStyle;
