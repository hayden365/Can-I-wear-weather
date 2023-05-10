import React from "react";
import { styled } from "styled-components";

type Props = {};

const HeaderStyle = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		margin: 2rem 0;
	}
`;

const NavStyle = styled.nav`
	display: flex;
	gap: 2rem;
	justify-content: center;
`;

const Header = (props: Props) => {
	return (
		<HeaderStyle>
			<img src="./green_logo.png" alt="logo" width={100} />
			<NavStyle>
				<a href="/">Tree</a>
				<a href="/">Grass</a>
				<a href="/">Flower</a>
				<a href="/">Contact</a>
			</NavStyle>
		</HeaderStyle>
	);
};

export default Header;
