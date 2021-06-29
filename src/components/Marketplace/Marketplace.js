import React, { useState } from "react";
import Card from "../Card/Card";
import BannerOffer from "../Benefits/BannerOffer";
import { ReactComponent as LeftArrow } from "./arrow-left.svg";
import "./marketplace.css";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import StyledPage from "../global/styledComponents/StyledPage";
import StyledHeading from "../global/styledComponents/StyledHeading";
const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
    }
`;
// import Offers from "../Offers/Offers";
const data = [
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
    {
        title: "BHEL",
        formattedPrice: "₹4,100",
        imageUrl: "https://bit.ly/3p3nSDE",
        discountRate: "10",
    },
];
const StyledMarketplace = styled.div`
    font-family: "Raleway", sans-serif;
    background-color: var(--background-primary);+
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 40px ${(props) => (props.fluid ? "0px" : "40px")};
    align-items: center;
    height:100%;
    overflow-y:auto;
    padding-left: 36px;
    padding-top: 30px;
`;
function Marketplace() {
    const history = useHistory();
    return (
        <StyledPage>
            <StyledHeading style={{ "--ml": "20px" }}>
                <LeftArrow
                    className="left-arrow"
                    onClick={() => history.goBack()}
                />
                Marketplace
            </StyledHeading>
            <div className="cards-container">
                {data.map(
                    ({ title, formattedPrice, imageUrl, discountRate }) => (
                        <Card
                            title={title}
                            formattedPrice={formattedPrice}
                            imageUrl={imageUrl}
                            discountRate={discountRate}
                        />
                    )
                )}
            </div>
            {/* <BannerOffer /> */}
            {/* <Offer /> */}
            {/* Drawer */}
            {/* Drawer */}
            {/* Drawer */}
            {/* Drawer */}
        </StyledPage>
    );
}

export default Marketplace;
