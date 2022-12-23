import React, { createContext, useContext, useState } from "react";
import { variables } from "./../Helpers/GlobalVariables";

const MainContext = createContext();

export const useGlobal = () => useContext(MainContext);

export default function GlobalProvider({ children }) {
	const [matrix, setMatrix] = useState([]);
	const { count, rows, columns, equality } = variables;

	function matrixNumberChangeClick(index, subIndex) {
		if (
			(index == 0 && subIndex == 0) ||
			(index == rows - 1 && subIndex == 0) ||
			(index == 0 && subIndex == columns - 1) ||
			(index == rows - 1 && subIndex == columns - 1)
		) {
			matrix[index][subIndex] -= 3;
		} else if (
			index == 0 ||
			index == rows - 1 ||
			subIndex == 0 ||
			subIndex == columns - 1
		)
			matrix[index][subIndex] -= 5;
		else {
			matrix[index][subIndex] -= 8;
		}

		//sol yukarı çapraz
		if (index > 0 && subIndex > 0) {
			matrix[index - 1][subIndex - 1] += 1;
		}

		//sağ aşağı çapraz
		if (index < rows - 1 && subIndex < columns - 1) {
			matrix[index + 1][subIndex + 1] += 1;
		}

		//sağ yukarı çapraz
		if (index > 0 && subIndex < columns - 1) {
			matrix[index - 1][subIndex + 1] += 1;
		}

		//sol asağı çapraz
		if (index < rows - 1 && subIndex > 0) {
			matrix[index + 1][subIndex - 1] += 1;
		}

		//asağı
		if (index < rows - 1) {
			matrix[index + 1][subIndex] += 1;
		}

		//yukarı
		if (index > 0) {
			matrix[index - 1][subIndex] += 1;
		}

		//sağ
		if (subIndex < matrix[0].length - 1) {
			matrix[index][subIndex + 1] += 1;
		}

		//sol
		if (subIndex > 0) {
			matrix[index][subIndex - 1] += 1;
		}

		setMatrix([...matrix]);

		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < columns; j++) {
				if (matrix[i][j] === equality) {
					count += 1;
					console.log(count);
				}
			}
		}

		if (count === rows * columns) {
			alert("Tebrikler Kazandınız");
		}
	}

	const data = {
		matrixNumberChangeClick,
		matrix,
		setMatrix,
	};

	return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}
