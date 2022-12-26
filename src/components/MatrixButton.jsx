import React from "react";
import { useGlobal } from "../features/GlobalContext";

export default function MatrixButton({ children, onClick }) {
	const { color, settingsGame } = useGlobal();
	return (
		<button
			onClick={onClick}
			className={`bg-gray-200 w-12 h-12 m-1 rounded-sm hover:bg-gray-300 ${
				settingsGame.equality > children && color === "pink"
					? "bg-pink-200"
					: ""
			}

				${settingsGame.equality < children && color === "blue" ? "bg-blue-200" : ""}
			
			`}
		>
			{children}
		</button>
	);
}
