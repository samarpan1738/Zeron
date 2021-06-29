import React from "react";
import OfferItem from "./OfferItem";
import Carousel from "../Carousel/Carousel";
import "./offers.css";

export default function Offers() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 1800,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	//* Add settings.infinite to false if the total Offers are less than 3
	
	return (
		<Carousel className="offers-container" settings={settings}>
			
			
			
		</Carousel>
	);
}
