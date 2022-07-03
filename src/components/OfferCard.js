import React from "react";
import { useTranslation } from "react-i18next";
import { CheckIcon } from "../utils/CheckIcon";
import ModalComponent from "./ModalComponent";
import { useState } from "react";

export function OfferCard({ specialoffer, login }) {
	const { t } = useTranslation();
	const [modalShow, setModalShow] = useState(false);
	const [tabFocus, setTabFocus] = useState("");
	const onHide = () => setModalShow(false);

	return (
		<div className="bg-white border cardborders w-100 my-5 d-flex flex-column justify-content-evenly">
			<div className="text-center pt-3">
				{specialoffer ? (
					<h3>{t("homepage.offerCard.yearSubscribe")}</h3>
				) : (
					<h3>{t("homepage.offerCard.monthSubscribe")}</h3>
				)}
				{specialoffer ? <h4>{t("homepage.offerCard.saveMoney")}</h4> : null}
			</div>

			{specialoffer ? (
				<ul className="px-2 px-md-5 list-unstyled pt-3">
					<li className="py-1">
						<CheckIcon color="#947932" />
						{t("homepage.offerCard.dailyOption")}
					</li>
					<li className="py-1">
						<CheckIcon color="#947932" />
						{t("homepage.offerCard.suggestedStrike")}
					</li>
					<li className="py-1">
						<CheckIcon color="#947932" />
						{t("homepage.offerCard.optionStrategies")}
					</li>
					<li className="py-1">
						<CheckIcon color="#947932" />
						{t("homepage.offerCard.betterOption")}
					</li>
					<li className="py-1">
						<CheckIcon color="#947932" />
						{t("homepage.offerCard.indicators")}
					</li>
				</ul>
			) : (
				<ul className="px-2 px-md-5 list-unstyled">
					<li className="py-1">
						<CheckIcon color="#364261" />
						{t("homepage.offerCard.dailyOption")}
					</li>
					<li className="py-1">
						<CheckIcon color="#364261" />
						{t("homepage.offerCard.suggestedStrike")}
					</li>
					<li className="py-1">
						<CheckIcon color="#364261" />
						{t("homepage.offerCard.optionStrategies")}
					</li>
					<li className="py-1">
						<CheckIcon color="#364261" />
						{t("homepage.offerCard.betterOption")}
					</li>
					<li className="py-1">
						<CheckIcon color="#364261" />
						{t("homepage.offerCard.indicators")}
					</li>
				</ul>
			)}
			{specialoffer ? (
				<div className="d-flex justify-content-center py-3">
					<button
						type="submit"
						className="offerButton2"
						onClick={() => {
							setTabFocus("signup");
							setModalShow(true);
						}}
					>
						{t("homepage.offerCard.subscribe")}
					</button>
				</div>
			) : (
				<div className="d-flex justify-content-center py-3">
					<button
						type="submit"
						className="offerButton1"
						onClick={() => {
							setTabFocus("signup");
							setModalShow(true);
						}}
					>
						{t("homepage.offerCard.subscribe")}
					</button>
				</div>
			)}
			<ModalComponent
				renderKey={tabFocus}
				show={modalShow}
				onHide={onHide}
				login={login}
			/>
		</div>
	);
}
