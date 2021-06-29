import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as MarketplaceIcon } from "../../assets/marketplace.svg";
import { ReactComponent as DashboardIcon } from "../../assets/dashboard.svg";
import { ReactComponent as TransactionsIcon } from "../../assets/transactionsIcon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/settingsIcon.svg";
import "./sidebar.css";
import useWindowSize from "../../hooks/useWindowSize";
const Container = styled.div`
    font-family: "Raleway", sans-serif;
    background-color: var(--background-primary);
    height: 100%;
    display: flex;
    flex-direction: column;
    // width: 100%;
    padding: 40px 10px;
    padding-right: 50px;
    align-items: flex-end;
    // flex-basis: 340px;
    flex-basis: 500px;
    flex-shrink: 2;
    background-color: var(--background-secondary);
    color: white;
`;
const NavList = styled.ul`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const NavLink = styled(Link)`
    display: flex;
    margin-bottom: 36px;
    color: rgb(160, 157, 157);
    font-size: 16px;
    &:hover {
        color: var(--accent-primary);
    }
`;

function Sidebar() {
    const windowSize = useWindowSize();
    const mobile = windowSize.width < 1000;
    return (
        <Container fluid>
            <NavList type="none">
                <NavLink to="/dashboard">
                    <DashboardIcon className="nav-icon" />
                    {!mobile && <p>Dashboard</p>}
                </NavLink>
                <NavLink to="/market">
                    <MarketplaceIcon className="nav-icon" />
                    {!mobile && <p>Marketplace</p>}
                </NavLink>
                <NavLink to="/market">
                    <TransactionsIcon className="nav-icon" />
                    {!mobile && <p>Transactions</p>}
                </NavLink>
                <NavLink to="/settings">
                    <SettingsIcon className="nav-icon" />
                    {!mobile && <p>Settings</p>}
                </NavLink>
            </NavList>
        </Container>
    );
}

export default Sidebar;
