import React from 'react'
import MyDrawer from '../MyDrawer/MyDrawer'
import "./dashboard.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {Drawer,DrawerBody,DrawerOverlay,DrawerContent,DrawerFooter,DrawerHeader,Input,Button} from "@chakra-ui/core"

function Dashboard() {
    return (
        <div className="dashboard">
           <div className="sidebar">
               <div className="sidebar-option">
                   <h3 className="balance-title">Balance</h3>
                   <h2 className="balance-content">33,500</h2>
               </div>
               <div className="dropdown-menu">
                   <ArrowDropDownIcon/>
                   <h3 className="balance-title">Leaderboards</h3>

                   {/* <h2 className="balance-content">33,500</h2> */}
               </div>
               <button className="send-btn">Send Zeron</button>
           </div>
            <div className="main">
                <h1>Username</h1>
                <div className="balance-container">
                    <h3 className="balance-title">My Account Balance</h3>
                    <h2 className="balance-content">33,500</h2>
                </div>
                <div className="balance-container">
                    <h3 className="balance-title">My Account Number</h3>
                    <h4 className="balance-content">0x273C249b8bE25a88aDe9ec182655Af6ae263C58a</h4>
                </div>
                <div className="balance-container">
                    <h3 className="balance-title">My Signing Key</h3>
                    <input className="sign-key" disabled type="password" value="0x273C249b8bE25a88aDe9ec182655Af6ae263C58a"/>
                    {/* <h4 className="balance-content">0x273C249b8bE25a88aDe9ec182655Af6ae263C58a</h4> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
