import Header from "../components/Header/Header";

type Props = {
	children: React.ReactNode;
};

export const GeneralLayout = ({ children }: Props) => {
	return (
		<div className="general-layout">
			<Header />
			<div className="general-layout__body flexColCenter">{children}</div>
		</div>
	);
};
