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
} from "@chakra-ui/react";
import "./card.css";

function Card({ title, formattedPrice, imageUrl, discountRate }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const property = {
        imageUrl: imageUrl,
        imageAlt: "Rear view of modern home with pool",
        title: title,
        discountRate: discountRate,
        formattedPrice: formattedPrice,
    };

    return (
        <div className="card">
            <img
                src={property.imageUrl}
                alt={property.imageAlt}
                className="card-img"
            />

            <div className="card-body">
                <p>{property.title}</p>
                <button className="card-btn">Buy</button>
                <button className="card-btn" onClick={onOpen}>
                    More
                </button>

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{property.title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <ul type="none">
                                <li>Seller : <span>{property.title}</span></li>
                                <li>Description : <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, voluptates?</span></li>
                                <li>Seller Ethereum Id : <span>0x26d01dE26574CD43BEa92Cc03B1BcdbF0F2c6890</span></li>
                                <li>Amount : <span>20 ZE</span></li>
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
