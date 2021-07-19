import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    useToast,
} from "@chakra-ui/react";
import "./card.css";
import { useSelector } from "react-redux";

function Card({ title, imageUrl, price, ethereumAccountNo }) {
    const userDetails = useSelector((state) => state.userDetails);
    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const buyOffer = (e) => {
        fetch("/api/transaction/send", {
            method: "POST",
            body: JSON.stringify({
                from: userDetails.ethereumAccountNo,
                to: ethereumAccountNo,
                privateKey: userDetails.ethereumPrivateKey,
                amount: price.split(" ")[0],
                vendor: title
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("Transaction response : ", data);
                if (data.success == false) {
                    toast({
                        title: "Transaction failed !",
                        position: "top-right",
                        description: data.message,
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                    });
                } else {
                    toast({
                        title: "Transaction successful",
                        position: "top-right",
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                    });
                }
            });
    };
    console.log(`${title} | ethereumAccountNo : ${ethereumAccountNo}`);
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-img" />

            <div className="card-body">
                <div className="card-attributes">
                    <p>{title}</p>
                    <p>Price : {price}</p>
                </div>

                <button className="card-btn" onClick={buyOffer}>
                    Buy
                </button>
                {/* <button className="card-btn" onClick={onOpen}>
                    More
                </button> */}

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <ul type="none">
                                <li>
                                    Seller : <span>{title}</span>
                                </li>
                                <li>
                                    Description :{" "}
                                    <span>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quam, voluptates?
                                    </span>
                                </li>
                                <li>
                                    Seller Ethereum Id :{" "}
                                    <span>
                                        0x26d01dE26574CD43BEa92Cc03B1BcdbF0F2c6890
                                    </span>
                                </li>
                                <li>
                                    Amount : <span>20 ZE</span>
                                </li>
                            </ul>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme="red" mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant="green">Buy</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    );
}

export default Card;
