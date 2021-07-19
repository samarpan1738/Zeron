import React, { useState } from "react";
import Card from "../Card/Card";
import BannerOffer from "../Benefits/BannerOffer";
import { ReactComponent as LeftArrow } from "./arrow-left.svg";
import "./marketplace.css";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import StyledPage from "../global/styledComponents/StyledPage";
import StyledHeading from "../global/styledComponents/StyledHeading";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../store/features/userDetails/userDetailsSlice";
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
        price: "30 ZE",
        ethereumAccountNo:"0x273C249b8bE25a88aDe9ec182655Af6ae263C58a"
    },
    {
        title: "Tata Electric",
        formattedPrice: "₹2,200",
        imageUrl: "https://bit.ly/3eMKweZ",
        discountRate: "8",
        price: "10 ZE",
        ethereumAccountNo:"0xF7C17c02428CcC44a35725DfDe473cCA2c4393ff"
    },
    {
        title: "Torrent",
        formattedPrice: "₹9,600",
        imageUrl: "https://bit.ly/2JLwpLn",
        discountRate: "9",
        price: "40 ZE",
        ethereumAccountNo:"0xf158F22ec9ef60A64F83Cf2BD59F6b5554E9caC4"
    },
    {
        title: "BHEL",
        formattedPrice: "₹4,100",
        imageUrl: "https://bit.ly/3p3nSDE",
        discountRate: "10",
        price: "120 ZE",
        ethereumAccountNo:"0x63580a35A6B6Da5c13c1Bf9c62C51FbCe64c806F"
    },
    {
        title: "BHEL",
        formattedPrice: "₹4,100",
        imageUrl: "https://bit.ly/3p3nSDE",
        discountRate: "10",
        price: "90 ZE",
        ethereumAccountNo:""
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
    const userDetails = useSelector(state=>state.userDetails)
    const dispatch=useDispatch()
    if(userDetails.isAuthenticated == false)
    {
        fetch("/api/user/")
            .then((res) => res.json())
            .then((data) => {
                const { success, user, message } = data;
                if (success) {
                    dispatch(
                        setUserDetails({
                            name: user.name,
                            email: user._id,
                            pictureUrl: user.pictureUrl,
                            registerPending: user.registrationPending,
                            ethereumAccountNo: user.ethereumAccountNo,
                            ethereumPrivateKey: user.ethereumPrivateKey,
                            isAuthenticated: true,
                        })
                    );
                } else {
                    console.log(message);
                }
            });
    }
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
                    ({
                        title,
                        formattedPrice,
                        imageUrl,
                        discountRate,
                        price,
                        ethereumAccountNo
                    }) => (
                        <Card
                            title={title}
                            formattedPrice={formattedPrice}
                            imageUrl={imageUrl}
                            discountRate={discountRate}
                            price={price}
                            ethereumAccountNo={ethereumAccountNo}
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
