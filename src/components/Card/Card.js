import React from "react";
import { Box, Image, Badge } from "@chakra-ui/core";
import "./card.css";
function Card() {
	const property = {
		imageUrl: "https://bit.ly/2Z4KKcF",
		imageAlt: "Rear view of modern home with pool",
		beds: 3,
		baths: 2,
		title: "Tata Power",
		formattedPrice: "₹1,900.00",
		reviewCount: 34,
		rating: 4,
	};

	return (
		<Box
			maxW="sm"
			borderWidth="1px"
			rounded="lg"
			overflow="hidden"
			className="card"
		>
			<Image
				src={property.imageUrl}
				alt={property.imageAlt}
				className="card-img"
			/>

			<Box p="6">
				<Box d="flex" alignItems="baseline">
					<Badge rounded="full" px="2" variantColor="teal">
						7%
					</Badge>
				</Box>

				<Box
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					isTruncated
				>
					{property.title}
				</Box>

				<Box>{property.formattedPrice}</Box>
			</Box>
		</Box>
	);
}

export default Card;
