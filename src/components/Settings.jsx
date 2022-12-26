import React from "react";
import { useGlobal } from "../features/GlobalContext";
import { useTranslation } from "react-i18next";

const lngs = {
	en: { nativeName: "English" },
	tr: { nativeName: "Turkish" },
};

export default function Settings() {
	const {
		startGameClick,
		settingsGame,
		setSettingsGame,
		color,
		setColor,
		toggleModal,
	} = useGlobal();

	const { t, i18n } = useTranslation();
	return (
		<div className="flex flex-col mt-4 gap-2 border-b w-[400px] relative dark:bg-slate-800">
			<div className="flex flex-col px-6">
				<label className="mb-4">
					<span className="mr-2">{t("sidebar.rows")}</span>
					<input
						type="number"
						min="3"
						max="10"
						value={settingsGame.rows}
						onChange={(e) =>
							setSettingsGame({
								...settingsGame,
								rows: e.target.value,
							})
						}
						className="border rounded-sm px-2 py-1 w-full"
					/>
				</label>
				<label className="mb-4">
					<span className="mr-2">{t("sidebar.columns")}</span>
					<input
						type="number"
						min="3"
						max="10"
						value={settingsGame.columns}
						onChange={(e) =>
							setSettingsGame({
								...settingsGame,
								columns: e.target.value,
							})
						}
						className="border rounded-sm px-2 py-1 w-full"
					/>
				</label>
				<label className="mb-4">
					<span className="mr-2">{t("sidebar.equality")}</span>
					<input
						type="number"
						min="10"
						max="200"
						value={settingsGame.equality}
						onChange={(e) =>
							setSettingsGame({
								...settingsGame,
								equality: e.target.value,
							})
						}
						className="border rounded-sm px-2 py-1 w-full"
					/>
				</label>
				<button
					className="bg-black text-white border-0 p-2 rounded-md select-none"
					onClick={startGameClick}
				>
					{t("sidebar.startGame")}
				</button>

				<div className="flex mt-6">
					<label className="flex items-center mr-2">
						{t("sidebar.default")}
						<input
							type="radio"
							name="color"
							value="gray"
							checked={color === "gray"}
							onChange={(e) => setColor(e.target.value)}
							className="appearance-none w-[20px] h-[20px] bg-gray-200 cursor-pointer ml-2 checked:border-gray-600 checked:border-2"
						/>
					</label>
					<label className="flex items-center">
						{t("sidebar.up")}
						<input
							type="radio"
							name="color"
							value="blue"
							checked={color === "blue"}
							onChange={(e) => setColor(e.target.value)}
							className="appearance-none w-[20px] h-[20px] bg-blue-200 cursor-pointer ml-2 checked:border-blue-600 checked:border-2"
						/>
					</label>
					<label className="flex items-center ml-2">
						{t("sidebar.down")}
						<input
							type="radio"
							name="color"
							value="pink"
							checked={color === "pink"}
							onChange={(e) => setColor(e.target.value)}
							className="appearance-none w-[20px] h-[20px] bg-pink-200 cursor-pointer ml-2 checked:border-pink-600 checked:border-2"
						/>
					</label>
				</div>
				<div className="flex flex-col mt-4 border-t pt-4">
					<a
						className="mb-1 text-blue-500 font-bold cursor-pointer"
						onClick={toggleModal}
					>
						How to Play
					</a>
					<a
						href="https://github.com/yasinelbuz/equalization-game"
						target="_blank"
						className="text-blue-500 font-bold cursor-pointer"
					>
						Source Code
					</a>
				</div>
				<div className="absolute bottom-0 left-0 w-full">
					{Object.keys(lngs).map((lng) => (
						<button
							key={lng}
							style={{
								fontWeight:
									i18n.resolvedLanguage === lng
										? "bold"
										: "normal",
							}}
							type="submit"
							onClick={() => i18n.changeLanguage(lng)}
							className="border w-1/2 py-2"
						>
							{lngs[lng].nativeName}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
