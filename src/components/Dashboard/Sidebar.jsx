import React from "react";
import "./sidebar.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

function Sidebar({ balance }) {
    return (
        <div className="sidebar">
            <div className="sidebar-option">
                <h3 className="balance-title">Balance</h3>
                <h2 className="balance-content">
                    {balance ? balance + " ZE" : "---"}
                </h2>
            </div>
            <div className="dropdown-menu">
                <ArrowDropDownIcon />
                <h3 className="balance-title">Leaderboards</h3>
            </div>
            <div className="spacer"></div>
            <button className="send-btn">Send Zeron</button>
        </div>
    );
}

export default Sidebar;
