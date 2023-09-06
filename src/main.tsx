import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const useQuery = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<QueryClientProvider client={useQuery}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
);
