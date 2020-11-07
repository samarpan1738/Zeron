import React from 'react'
import Zeron from '../../img/zero-emission.svg'
import Google from '../../img/google.svg'
import { Divider } from "@chakra-ui/core";
import './landingpage.css'

export default function LandingPage() {
    return (
        <div id="landing-page">
            <div id="landing-page-card">
                <div id="landing-heading-container">
                    <div>
                        <img src={Zeron} alt="Zeron"/>
                        <span id="landing-heading">Zeron</span>
                    </div>
                    <div id="landing-motto">A step towards sustainable future.</div>
                </div>

                <div id="google-login-container">
                    <div id="google-text">Sign In with</div>
                    <a href="/auth/google" id="google-btn">
                        <img src={Google} alt=""/>
                        Google
                    </a>
                </div>
            </div>
        </div>
    )
}
