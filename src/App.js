import { useState } from "react";
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
import { ThemeProvider } from "@chakra-ui/core";
import Register from "./components/Register/Register";
import Marketplace from "./components/Marketplace/Marketplace";
import Get from "./components/Methods/Get";

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
		<ThemeProvider>
			<Router>
				<Switch>
					<Route path="/register">
						<Get url="/api/user/user">
							{(state) => <Register data={state} />}
						</Get>
					</Route>
					<Route path="/market">
						<Marketplace />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
}
