import { useState, useContext } from "react";
import "./App.css";
import {
    approve,
    getbalance,
    Transfer,
    TransferFrom,
    account1,
    account2,
    account3,
    account4,
    privateKey1,
    zeron,
    ContractAddress,
} from "./blockchain/interact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider  } from "@chakra-ui/react";
import Register from "./components/Register/Register";
import Marketplace from "./pages/Marketplace/Marketplace";
import LandingPage from "./components/LandingPage/LandingPage";
import Dashboard from "./pages/Dashboard/Dashboard";

export default function App() {
    const [balances, setBalances] = useState([0, 0, 0, 0]);
    const clickHandler = async (accNo, idx) => {
        const res = await getbalance(accNo);
        setBalances((curr) => {
            let temp = [...curr];
            temp[idx] = res;
            return temp;
        });
        console.log(res);
    };
    console.log(balances);
    return (
        <ChakraProvider >
            <Router>
                <Switch>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/market">
                        <Marketplace />
                    </Route>
                    <Route path="/dashboard" exact>
                        <Dashboard />
                    </Route>
                    <Route path="/" exact>
                        <LandingPage />
                    </Route>
                </Switch>
            </Router>
        </ChakraProvider >
    );
}
