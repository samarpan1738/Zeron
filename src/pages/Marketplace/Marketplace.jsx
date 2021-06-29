import React from 'react'
import MarketplaceComponent from "../../components/Marketplace/Marketplace"
import Sidebar from '../../components/Sidebar/Sidebar'
import styled from "styled-components"
const StyledMarketplace=styled.div`
    display:flex;
    background-color:var(--background-primary);
    height:100vh;
    overflow-y:auto;
`
function Marketplace() {
    return (
        <StyledMarketplace>
            <Sidebar/>
            <MarketplaceComponent/>
        </StyledMarketplace>
    )
}

export default Marketplace
