import React, { useRef, useState } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Col,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Container,
    Row,
    FormText,
    Form,
} from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./modalExample.css";

import googleIcon from "./google-icon.ico";

const ModalExample = () => {
    const [modalStatus, setModalStatus] = useState(false);
    const passwordRef = useRef(null);
    const toggle = () => setModalStatus(!modalStatus);
    const toggleHide = () => {
        console.log(
            "Button clicked",
            passwordRef.current.context,
            Object.keys(passwordRef.current)
        );
        // if (passwordRef.current.attributes["type"].value === "text")
        // 	passwordRef.current.attributes["type"].value = "password";
        // else passwordRef.current.attributes["type"].value = "text";
    };
    return (
        <div>
            <Button color="danger" onClick={toggle}>
                Login/Signup
            </Button>
            <Form>
                <FormGroup row>
                    <Col sm={6}>
                        <Label for="firstName" sm={6} size="sm">
                            First Name
                        </Label>
                        <Input type="text" name="firstName" id="firstName" />
                    </Col>
                    <Col sm={6}>
                        <Label for="lastName" sm={6} size="sm">
                            Last Name
                        </Label>
                        <Input type="text" name="lastName" id="lastName" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={12}>
                        <Label for="email" sm={12} size="sm">
                            Email
                        </Label>
                        <Input type="email" name="email" id="email" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={12}>
                        <Label for="phoneNumber" sm={12} size="sm">
                            Phone Number
                        </Label>
                        <Input type="text" name="phoneNumber" id="phoneNumber" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={12}>
                        <Label for="password" sm={12} size="sm">
                            Password
                        </Label>
                        <InputGroup>
                            <Input
                                ref={passwordRef}
                                type="password"
                                name="password"
                                id="password"
                            />
                            {/* <InputGroupAddon addonType="append"> */}
                            {/* <Button onClick={>Show</Button> */}
                            {/* <InputGroupText>Hide</InputGroupText> */}
                            {/* </InputGroupAddon> */}
                        </InputGroup>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={12}>
                        <Button color="primary" className="login-button">
                            Sign Up
                        </Button>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col sm={4} className="line-container">
                        <div className="line"></div>
                    </Col>
                    <Col sm={4}>
                        <FormText className="text-muted text-center">or sign up with</FormText>
                    </Col>
                    <Col sm={4} className="line-container">
                        <div className="line"></div>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={12}>
                        <Button color="white" className="google-auth">
                            <img src={googleIcon} alt="" />
                            <span className="icon-text">Google</span>
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        </div>
    );
};

export default ModalExample;
