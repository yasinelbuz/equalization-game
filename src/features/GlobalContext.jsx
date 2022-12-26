import React, { createContext, useContext, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export default function GlobalProvider({ children }) {
	const [matrix, setMatrix] = useState([]);
	const [isOpen, setIsOpen] = useState(true);
	const [equalityCount, setEqualityCount] = useState(0);
	const [color, setColor] = useState("gray");
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [settingsGame, setSettingsGame] = useState({
		rows: 10,
		columns: 10,
		equality: 20,
	});

	let matrixSumNumber =
		settingsGame.rows * settingsGame.columns * settingsGame.equality;
	let equalityHalf = Math.floor(settingsGame.equality / 2);

	function createRondomNumber() {
		return Math.floor(Math.random() * settingsGame.equality) + equalityHalf;
	}

	function startGame() {
		//:REFACTOR
		let data = [[], [], [], [], [], [], [], [], [], []];
		//:REFACTOR

		for (let i = 0; i < settingsGame.rows; i++) {
			for (let j = 0; j < settingsGame.columns; j++) {
				//rastgele sayı oluşturyor
				let randomNumber = createRondomNumber();

				if (matrixSumNumber <= randomNumber) {
					data[i][j] = matrixSumNumber;
					matrixSumNumber = 0;
				} else {
					data[i][j] = randomNumber;
					matrixSumNumber -= randomNumber;
					if (
						i == settingsGame.rows - 1 &&
						j == settingsGame.columns - 1
					) {
						data[Math.ceil(i / 2)][Math.ceil(j / 2)] +=
							matrixSumNumber;
					}
				}

				if (data[i][j] === settingsGame.equality) {
					setEqualityCount((prev) => prev + 1);
				}
			}
		}

		return data;
	}

	function PlayerWin() {
		setEqualityCount(0);
		for (let i = 0; i < settingsGame.rows; i++) {
			for (let j = 0; j < settingsGame.columns; j++) {
				if (matrix[i][j] === settingsGame.equality) {
					setEqualityCount(equalityCount + 1);
				}
			}
		}

		if (equalityCount === settingsGame.rows * settingsGame.columns) {
			return "Tebrikler, tüm sayıları eşitlediniz";
		}
	}

	function matrixNumberChangeClick(index, subIndex) {
		if (
			(index == 0 && subIndex == 0) ||
			(index == settingsGame.rows - 1 && subIndex == 0) ||
			(index == 0 && subIndex == settingsGame.columns - 1) ||
			(index == settingsGame.rows - 1 &&
				subIndex == settingsGame.columns - 1)
		) {
			matrix[index][subIndex] -= 3;
		} else if (
			index == 0 ||
			index == settingsGame.rows - 1 ||
			subIndex == 0 ||
			subIndex == settingsGame.columns - 1
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
		if (
			index < settingsGame.rows - 1 &&
			subIndex < settingsGame.columns - 1
		) {
			matrix[index + 1][subIndex + 1] += 1;
		}

		//sağ yukarı çapraz
		if (index > 0 && subIndex < settingsGame.columns - 1) {
			matrix[index - 1][subIndex + 1] += 1;
		}

		//sol asağı çapraz
		if (index < settingsGame.rows - 1 && subIndex > 0) {
			matrix[index + 1][subIndex - 1] += 1;
		}

		//asağı
		if (index < settingsGame.rows - 1) {
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
		PlayerWin();
	}

	function startGameClick() {
		setEqualityCount(0);
		setMatrix(startGame());
	}

	//Modal Komponeti
	function toggleModal() {
		setModalIsOpen(!modalIsOpen);
	}

	const data = {
		matrixNumberChangeClick,
		matrix,
		setMatrix,
		startGameClick,
		isOpen,
		setIsOpen,
		settingsGame,
		setSettingsGame,
		equalityCount,
		color,
		setColor,
		toggleModal,
		setModalIsOpen,
		modalIsOpen,
	};

	return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}

const MainContext = createContext();
export const useGlobal = () => useContext(MainContext);
