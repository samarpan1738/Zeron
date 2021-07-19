import React from 'react'
import styled from "styled-components"
import Sidebar from '../../components/Sidebar/Sidebar'
import TransactionsComponent from "../../components/Transaction/Transaction"

const StyledTransactionsPage=styled.div`
    display:flex;
    background-color:var(--background-primary);
    height:100vh;
    overflow-y:auto;
`
function Transaction() {
    return (
        <StyledTransactionsPage>
            <Sidebar/>
            <TransactionsComponent/>
        </StyledTransactionsPage>
    )
}

export default Transaction
