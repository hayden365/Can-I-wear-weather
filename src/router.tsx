import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import { GeneralLayout } from "./layout/GeneralLayout";

const routerData = [
	{
		id: 0,
		path: "/",
		label: "Home",
		element: <Home />,
	},
];

export const routers = createBrowserRouter(
	routerData.map(router => {
		return {
			path: router.path,
			element: <GeneralLayout>{router.element}</GeneralLayout>,
		};
	}),
);
