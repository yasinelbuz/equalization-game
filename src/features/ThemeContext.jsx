import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";

export default function ThemeProvider({ children }) {
	const data = {};

	return (
		<ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
	);
}

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);
