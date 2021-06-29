import React, { useEffect } from "react";
import {
    Stack,
    FormControl,
    FormLabel,
    Input,
    Button,
    Avatar,
    useToast,
} from "@chakra-ui/react";
import "./register.css";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "./arrow-left.svg";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../store/features/userDetails/userDetailsSlice";
import { useState } from "react";

const Container = styled.div`
    font-family: "Raleway", sans-serif;
    background-color: var(--background-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 40px ${(props) => (props.fluid ? "0px" : "160px")};
    height: 100%;
`;
const Form = styled(Stack)`
    font-family: "Raleway", sans-serif;
    width: 35vw;
    // padding: 1em 2em;
    max-width: 600px;
    background-color: rgb(250, 250, 250);
    padding: 40px 50px 50px;
    border-radius: 10px;
    background-color: var(--background-secondary);
    color: white;
`;
const StyledButton = styled(Button)`
    width: 100%;
    border: none;
    margin-top: 20px;
    cursor: pointer;
`;
const StyledInput = styled(Input)`
    background-color: var(--background-3) !important;
    color: white;
    border: none !important;
    font-weight: normal;
    letter-spacing: 1px;
`;
const StyledFormControl = styled(FormControl)`
    margin-bottom: 30px !important;
`;

export default function Register(props) {
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.userDetails);
    let history = useHistory();
    let toast = useToast();
    
    useEffect(()=>{
        if(!userDetails.registerPending)
            history.push("/dashboard")
    },[userDetails.registerPending])
    
    const handleRegister = (e) => {
        fetch("/api/user/register", {
            method: "PATCH",
            body: JSON.stringify({
                name: userDetails.name,
                email: userDetails.email,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.message);
                if (data.success) {
                    dispatch(
                        setUserDetails({
                            registerPending: data.user.registrationPending,
                            isAuthenticated: true,
                        })
                    );
                    if (data.redirect) {
                        history.push(data.url);
                    }
                } else {
                    toast({
                        title: "Error creating account",
                        position: "top-right",
                        description: data.message,
                        status: "error",
                        duration: 8000,
                        isClosable: true,
                    });
                }
            });
    };
    console.log("userDetails.registerPending : ", userDetails.registerPending);
    
    const handleChange = (e) => {
        dispatch(
            setUserDetails({
                [e.target.name]: e.target.value,
            })
        );
    };

    useEffect(() => {
        if (!userDetails.isAuthenticated) {
            fetch("/api/user/")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const { success, user, message } = data;
                    /*
                        {
                            success:true,
                            user:{
                                "name":"Samarpan",
                                "pictureUrl":"https://lh3.googleusercontent.com/a/AATXAJy9jy0UZWyUlVeE2J1hCxETgG_hjVckZBUtcP79=s96-c",
                                "email":"samarpan2017cs003@abesit.edu.in",
                                "isNew":true
                            }
                        }
                        {
                            success:false,
                            user:null,
                            message:"No user available"
                        }
                    */
                    if (success) {
                        console.log("Setting userDetails");
                        dispatch(
                            setUserDetails({
                                name: user.name,
                                email: user._id,
                                pictureUrl: user.pictureUrl,
                                registerPending: user.registrationPending,
                                ethereumAccountNo: user.ethereumAccountNo,
                            })
                        );
                    } else {
                        console.log(message);
                    }
                });
        }
    }, []);
    // useEffect(() => {
    //     setForm({name:userDetails.name,email:userDetails.email})
    // }, [userDetails])
    return (
        <Container>
            <Form>
                <p className="container-heading">
                    <LeftArrow
                        className="left-arrow"
                        onClick={() => history.goBack()}
                    />
                    Register
                </p>
                <Avatar
                    name={userDetails.name ? userDetails.name : ""}
                    src={userDetails.pictureUrl ? userDetails.pictureUrl : ""}
                    id="user-avatar-img"
                />
                <StyledFormControl isRequired className="register-field">
                    <FormLabel htmlFor="name" marginBottom="10px">
                        Name
                    </FormLabel>
                    <StyledInput
                        type="text"
                        id="name"
                        value={userDetails.name}
                        name="name"
                        onChange={handleChange}
                    />
                </StyledFormControl>
                <StyledFormControl isRequired className="register-field">
                    <FormLabel htmlFor="email" marginBottom="10px">
                        Email address
                    </FormLabel>
                    <StyledInput
                        variant="filled"
                        name="email"
                        type="email"
                        id="email"
                        isDisabled={true}
                        _disabled={{
                            color: "#8f8f8f",
                            cursor: "not-allowed",
                        }}
                        aria-describedby="email-helper-text"
                        value={userDetails.email}
                    />
                </StyledFormControl>
                {/* /api/user/register */}
                <StyledButton
                    colorScheme="teal"
                    size="md"
                    onClick={handleRegister}
                >
                    Register
                </StyledButton>
            </Form>
        </Container>
    );
}
