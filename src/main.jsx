import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import GlobalProvider from "./features/GlobalContext";

ReactDOM.createRoot(document.getElementById("root")).render(
	<GlobalProvider>
		<App />
	</GlobalProvider>
);
