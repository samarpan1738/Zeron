import React from "react";
import BannerOfferItem from "./BannerOfferItem";
import "./banner.css"
export default function BannerOffer() {
	return (
		<div id="banner-offers-container">
			<BannerOfferItem
				title={"Check before you reck."}
				body={"Check your tires. Keeping tires pumped correctly can reduce emissions. “Low tire pressure will hurt your fuel economy,” Mr. West said."}
				color={"green"}
			/>
			<BannerOfferItem
				title={"AC for you, heater for environment."}
				body={"Air conditioning and intensive city driving can make emissions creep up. Cut down on these as often as possible."}
				color={"orange"}
			/>
			<BannerOfferItem
				title={"Size does matter."}
				body={"Carpool — this way, you’re splitting emissions between the number of people in the car."}
				color={"blue"}
			/>
		</div>
	);
}
