import React from "react";
import { Flex } from "@chakra-ui/core";

import MyDrawer from "../MyDrawer/MyDrawer";
import Card from "../Card/Card";
function Marketplace() {
	return (
		<div>
			<h1>MarketPlace</h1>
			<MyDrawer />
			<Flex align="center" justify="center" wrap="wrap">
				<Card />
				<Card />
				<Card />
				<Card />
			</Flex>
			{/* Drawer */}
			{/* Drawer */}
			{/* Drawer */}
			{/* Drawer */}
		</div>
	);
}

export default Marketplace;
