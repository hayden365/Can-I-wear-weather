import Header from "../components/Header/Header";
import styled from "styled-components";

type Props = {
	children: React.ReactNode;
};

const Main = styled.main`
	max-width: 1240px;
	margin: auto;
`;

export const GeneralLayout = ({ children }: Props) => {
	return (
		<>
			<Header />
			<Main>{children}</Main>
		</>
	);
};
