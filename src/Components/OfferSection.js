import React from "react";
import { OfferCard } from "./OfferCard";

export function OfferSection({ login }) {
	return (
		<section className="footer-cards-gradient">
			<div className="row">
				<div className="col-10 col-md-3 d-flex justify-content-center mb-5 mx-auto">
					<OfferCard login={login} />
				</div>
				<div className="col-10 col-md-3 d-flex justify-content-center mb-5 mx-auto">
					<OfferCard login={login} specialoffer={true} />
				</div>
			</div>
		</section>
	);
}
