import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { routers } from "./router";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={routers} />
			</QueryClientProvider>
		</>
	);
}

export default App;
