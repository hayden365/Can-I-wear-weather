import React from "react";

type Props = {};

const Hero = (props: Props) => {
	return (
		<section className="hero-wrapper">
			<div className="paddings innerWidth flexCenter hero-container">
				<div className="hero-left"></div>

				<div className="flexCenter hero-right">
					<div className="image-container"></div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
