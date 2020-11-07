import React, { useState } from "react";
import { Flex } from "@chakra-ui/core";
import torrent from "../../img/torrent-power.jpg";
import MyDrawer from "../MyDrawer/MyDrawer";
import Card from "../Card/Card";
import BannerOffer from "../Benefits/BannerOffer";
import "./marketplace.css";
// import Offers from "../Offers/Offers";
function Marketplace() {
	const [data, setData] = useState([
		{
			title: "Adani",
			formattedPrice: "₹1,000",
			imageUrl: "https://bit.ly/3k6QYOI",
			discountRate: "7",
		},
		{
			title: "Tata Electric",
			formattedPrice: "₹2,200",
			imageUrl: "https://bit.ly/3eMKweZ",
			discountRate: "8",
		},
		{
			title: "Torrent",
			formattedPrice: "₹9,600",
			imageUrl: "https://bit.ly/2JLwpLn",
			discountRate: "9",
		},
		{
			title: "BHEL",
			formattedPrice: "₹4,100",
			imageUrl: "https://bit.ly/3p3nSDE",
			discountRate: "10",
		},
	]);
	return (
		<div className="marketplace-container">
			<h1 className="market-heading">MarketPlace</h1>
			<MyDrawer />
			<Flex align="center" justify="center" wrap="wrap">
				{data.map(({ title, formattedPrice, imageUrl, discountRate }) => (
					<Card
						title={title}
						formattedPrice={formattedPrice}
						imageUrl={imageUrl}
						discountRate={discountRate}
					/>
				))}
			</Flex>
			<BannerOffer />
			{/* <Offer /> */}
			{/* Drawer */}
			{/* Drawer */}
			{/* Drawer */}
			{/* Drawer */}
		</div>
	);
}

export default Marketplace;
