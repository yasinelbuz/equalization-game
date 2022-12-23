import { useEffect } from "react";
import { useState } from "react";
import MatrixButton from "./components/MatrixButton";
import { useGlobal } from "./features/GlobalContext";
import startGame from "./Helpers/StartGame";

function App() {
	const { matrixNumberChangeClick, matrix, setMatrix } = useGlobal();

	useEffect(() => {
		let data = startGame();
		setMatrix(data);
	}, []);

	return (
		<div>
			{matrix.map((items, index) => {
				return (
					<div key={index}>
						{items.map((sumItem, subIndex) => (
							<MatrixButton
								onClick={() =>
									matrixNumberChangeClick(
										index,
										subIndex,
										items
									)
								}
								key={subIndex}
							>
								{sumItem}
							</MatrixButton>
						))}
					</div>
				);
			})}
		</div>
	);
}

export default App;
