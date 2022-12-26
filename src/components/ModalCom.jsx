import React from "react";
import { useGlobal } from "../features/GlobalContext";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";
import { useTranslation } from "react-i18next";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		width: "50%",
	},
};

export default function ModalCom() {
	const { toggleModal, modalIsOpen } = useGlobal();
	const { t } = useTranslation();

	return (
		<Modal
			isOpen={modalIsOpen}
			onRequestClose={toggleModal}
			style={customStyles}
		>
			<div>
				<button
					onClick={toggleModal}
					className="absolute right-4 top-4 bg-gray-200 p-2"
				>
					<GrClose />
				</button>
				<div className="w-[90%]">
					<p className="leading-7">
						<b>{t("modal.title")}</b>
						<p>
							{t("modal.part1")} {t("modal.part2")}
						</p>
						<br />
						<p>{t("modal.part3")}</p>
						<p>{t("modal.part4")}</p>
					</p>
				</div>
			</div>
		</Modal>
	);
}
