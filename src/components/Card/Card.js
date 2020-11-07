import React, { useState } from "react";
import { Box, Image, Badge, Button } from "@chakra-ui/core";
import "./card.css";
import Adani from "../../img/adani.png";
function Card({ title, formattedPrice, imageUrl, discountRate }) {
	const property = {
		imageUrl: imageUrl,
		imageAlt: "Rear view of modern home with pool",
		title: title,
		discountRate: discountRate,
		formattedPrice: formattedPrice,
	};

	return (
		<Box
			maxW="xs"
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

			<Box p="6" d="flex">
				<Box className="inner-box">
					<Box
						mt="0"
						mb="2"
						fontWeight="semibold"
						as="h4"
						lineHeight="tight"
						isTruncated
					>
						{property.title}
					</Box>

					<Box d="flex" alignItems="baseline" mt="5">
						<Badge rounded="full" px="2" variantColor="teal">
							{property.discountRate}%
						</Badge>
					</Box>
				</Box>
				<Box className="inner-box">
					<Box
						mt="7"
						mb="0"
						fontWeight="semibold"
						as="h4"
						lineHeight="tight"
						isTruncated
						d="flex"
						alignItems="baseline"
						justifyContent="end"
					>
						<Button variantColor="teal">Pay Now</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default Card;
