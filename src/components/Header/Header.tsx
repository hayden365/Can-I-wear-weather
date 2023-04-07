import React from "react";
import "./Header.css";

type Props = {};

const Header = (props: Props) => {
	return (
		<section className="h-wrapper">
			<div className="flexCenter paddings innerWidth">
				<img src="./green_logo.png" alt="logo" width={100} />

				<div className="h-menu">
					<a href="">Tree</a>
					<a href="">Grass</a>
					<a href="">Flower</a>
					<button>
						<a href="">Contact</a>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Header;
