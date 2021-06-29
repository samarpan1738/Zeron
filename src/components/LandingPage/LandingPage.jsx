import React, { useEffect } from "react";
import Zeron from "../../img/zero-emission.svg";
import Google from "../../img/google.svg";
import "./landingpage.css";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../store/features/userDetails/userDetailsSlice";

const StyledLandingPage = styled.div`
    height: 100vh;
    width: 100%;
    display: grid;
    place-content: center;
    background-color: var(--background-primary);
`;
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 500px;
    width: max-content;
    background-color: white;
    padding: 20px 60px;
    border-radius: 10px;
    // border: 1px solid var(--accent-secondary);
    background-color: rgb(243 238 238);
    background-color: var(--background-secondary);
    color: white;
`;
const Branding = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    & > div {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
    }
    & img {
        height: 80px;
        margin: 0px 12px;
    }
`;
const GoogleLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    & > header {
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 20px;
    }
`;
const GoogleAuthBtn = styled.a`
    text-decoration: none;
    padding: 0.5em 1.25em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 24px;
    border-radius: 8px;
    width: 100%;
    height: 60px;
    // border: 1px solid darkgray;
    color: white;
    background-color: var(--background-3);
    &:hover {
        background-color: var(--background-4);
        // color: #373434;
    }
    & img {
        height: 32px;
        margin: 0px 8px;
    }
    & span {
        display: flex;
        justify-content: center;
        width: 100%;
        font-size: 16px;
        font-weight: 600;
    }
`;

export default function LandingPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userDetails = useSelector((state) => state.userDetails);

    useEffect(() => {
        if (userDetails.registrationPending == true) history.push("/register");
        else history.push("/dashboard");
    }, [userDetails.registerPending]);

    useEffect(() => {
        // Get data here
        fetch("/api/user/")
            .then((res) => res.json())
            .then((data) => {
                console.log("[LANDING PAGE] data : ", data);
                const { success, user, message } = data;
                if (success) {
                    console.log("Setting userDetails");
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
    }, []);

    return (
        <StyledLandingPage>
            <Card>
                <Branding>
                    <div>
                        <img src={Zeron} alt="Zeron" />
                        <span id="landing-heading">Zeron</span>
                    </div>
                    <div id="landing-motto">
                        A step towards sustainable future.
                    </div>
                </Branding>

                <GoogleLoginContainer>
                    <header>
                        <div className="line-seperator"></div>
                        <div id="google-text">To continue</div>
                        <div className="line-seperator"></div>
                    </header>
                    <GoogleAuthBtn href="/auth/google">
                        <img src={Google} alt="Google Logo" />
                        <span>Sign in with Google</span>
                    </GoogleAuthBtn>
                </GoogleLoginContainer>
            </Card>
        </StyledLandingPage>
    );
}
