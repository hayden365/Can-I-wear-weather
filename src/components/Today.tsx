import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 100px);
	justify-content: center;
	margin: 3rem 0;
	gap: 5rem;
`;

const LeftWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const LeftComponent = styled.div`
	display: flex;
`;

const ImageWrapper = styled.div`
	width: 100px;
	height: 100px;
`;

const RightWrapper = styled.div`
	display: grid;
	grid-template-columns: 100px 100px;
`;

const RightComponent = styled.div``;

export default function Today() {
	return (
		<Wrapper>
			<LeftWrapper>
				<LeftComponent>
					<div>현재 온도 </div>
					<div>
						<span>&nbsp;26</span>&deg;
					</div>
				</LeftComponent>
				<LeftComponent>
					<div>체감 온도 </div>
					<div>
						<span>&nbsp;23</span>&deg;
					</div>
				</LeftComponent>
			</LeftWrapper>
			<ImageWrapper>
				<img src="icons/sun.svg" alt="today's weather" />
			</ImageWrapper>
			<RightWrapper>
				<RightComponent>
					<div>최고 온도</div>
					<div>
						<span> 28</span>&deg;
					</div>
				</RightComponent>
				<RightComponent>
					<div>습도</div>
					<div>
						<span> 28</span>&deg;
					</div>
				</RightComponent>
				<RightComponent>
					<div>최저 온도</div>
					<div>
						<span>23</span>&deg;
					</div>
				</RightComponent>
				<RightComponent>
					<div>바람</div>
					<div>
						<span>23</span>&deg;
					</div>
				</RightComponent>
			</RightWrapper>
		</Wrapper>
	);
}
