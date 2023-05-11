import { useState } from "react";
import Header from "./components/Header/Header";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import styled from "styled-components";

const Main = styled.main`
	max-width: 1240px;
	margin: auto;
`;

function App() {
	return (
		<>
			<Header />
			<Main>
				<RouterProvider router={routers} />;
			</Main>
		</>
	);
}

export default App;
