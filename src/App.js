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
function App() {
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
		<div className="App">
			<h1>Hello Friend!😀</h1>
			<button onClick={() => clickHandler(account1, 0)}>
				Account 1 Balance
			</button>
			<button onClick={() => clickHandler(account2, 1)}>
				Account 2 Balance
			</button>
			<button onClick={() => clickHandler(account3, 2)}>
				Account 3 Balance
			</button>
			<button onClick={() => clickHandler(account4, 3)}>
				Account 4 Balance
			</button>
			<button
				onClick={() =>
					Transfer(account4, 100, account1, privateKey1, ContractAddress)
				}
			>
				Transfer From 4 to 1
			</button>
			<div className="balances">
				<h3>{balances[0]}</h3>
				<h3>{balances[1]}</h3>
				<h3>{balances[2]}</h3>
				<h3>{balances[3]}</h3>
			</div>
		</div>
	);
}

export default App;
