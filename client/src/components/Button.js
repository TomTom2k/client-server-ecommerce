import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyled = styled.button`
	margin: 0 0.5rem;
	font-size: 1rem;
	cursor: pointer;
	transition: all 0.2s linear;
	user-select: none;

	svg {
		font-size: 1.25rem;
		margin-right: 0.5rem;
	}
	span {
		font-size: 1.125rem;
	}

	:hover {
	}
`;
const GhostButtonStyled = styled(ButtonStyled)`
	:hover {
		span,
		svg {
			color: var(--secondary-color);
		}
	}
`;
const PrimaryStyled = styled(ButtonStyled)`
	background-color: var(--secondary-color);
	border-radius: 1rem;
	padding: 0.5rem 1.5rem;

	span,
	svg {
		color: var(--white);
	}

	:hover {
		box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.136);
	}
`;

const Button = ({ icon, label, type, href }) => {
	let TypeButton;
	switch (type) {
		case 'ghost': {
			TypeButton = GhostButtonStyled;
			break;
		}
		case 'primary': {
			TypeButton = PrimaryStyled;
			break;
		}
		default: {
			TypeButton = GhostButtonStyled;
			break;
		}
	}

	const CustomButton = ({ href, ...props }) => {
		if (href) {
			const LinkButton = styled(TypeButton).attrs((props) => ({
				as: Link, // Sử dụng Link thay thế thẻ a nếu có prop "to"
			}))`
				/* CSS styles cho button khi được sử dụng như link */
			`;
			return <LinkButton to={href} {...props} />;
		} else {
			return <TypeButton {...props} />;
		}
	};
	return (
		<CustomButton href={href}>
			{icon}
			<span>{label}</span>
		</CustomButton>
	);
};

export default Button;
