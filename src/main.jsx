import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import GlobalProvider from "./features/GlobalContext";
import ThemeProvider from "./features/ThemeContext";
import "./Language/i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
	<ThemeProvider>
		<GlobalProvider>
			<App />
		</GlobalProvider>
	</ThemeProvider>
);
