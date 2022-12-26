import React from "react";
import { useGlobal } from "./../features/GlobalContext";
import MatrixButton from "./MatrixButton";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useTranslation } from "react-i18next";

export default function Matrix() {
	const {
		matrixNumberChangeClick,
		matrix,
		isOpen,
		setIsOpen,
		startGameClick,
	} = useGlobal();

	const { t } = useTranslation();

	return (
		<div className="flex justify-center items-center bg-gray-100 w-full h-full relative">
			<div
				className="absolute left-2 top-2 cursor-pointer select-none"
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen == true && <RxCross1 />}
				{isOpen == false && <RxHamburgerMenu />}
			</div>
			<div className="p-2 border-4 rounded-md bg-white">
				{!matrix.length && (
					<div>
						<button onClick={startGameClick}>
							{t("sidebar.startGame")}
						</button>
					</div>
				)}

				{!!matrix.length &&
					matrix.map((items, index) => {
						return (
							<div key={index}>
								{items.map((sumItem, subIndex) => (
									<MatrixButton
										onClick={() =>
											matrixNumberChangeClick(
												index,
												subIndex
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
		</div>
	);
}
