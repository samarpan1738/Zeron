import React from "react";
import DashboardComponent from "../../components/Dashboard/Dashboard";
import Sidebar from "../../components/Sidebar/Sidebar";
import styled from "styled-components";
const StyledDashboard = styled.div`
    display: flex;
    height:100%;
`;
function Dashboard() {
    return (
        <StyledDashboard>
            <Sidebar />
            <DashboardComponent />
        </StyledDashboard>
    );
}

export default Dashboard;
