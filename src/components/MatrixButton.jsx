import React from "react";

export default function MatrixButton({ children, onClick }) {
	return (
		<button
			onClick={onClick}
			className="bg-gray-200 w-12 h-12 m-1 rounded-sm hover:bg-gray-300"
		>
			{children}
		</button>
	);
}
