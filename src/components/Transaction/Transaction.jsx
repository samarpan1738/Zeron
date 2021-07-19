import React, { useEffect } from "react";
import StyledHeading from "../global/styledComponents/StyledHeading";
import StyledPage from "../global/styledComponents/StyledPage";
import { ReactComponent as LeftArrow } from "../../assets/arrow-left.svg";
import { Link, useHistory } from "react-router-dom";
import "./transaction.css";
import { useDispatch, useSelector } from "react-redux";
import { setTransactions } from "../../store/features/transactions/transactionsSlice";

function Transaction() {
    const dispatch = useDispatch();
    const transactions = useSelector((state) => state.transactions);
    console.log("transactions : ", transactions);
    const userDetails = useSelector((state) => state.userDetails);
    const history = useHistory();
    useEffect(() => {
        fetch("/api/transaction")
            .then((res) => res.json())
            .then((data) => {
                console.log("getAllTransactions : ", data);
                dispatch(setTransactions(data.transactions));
            });
    }, []);
    return (
        <StyledPage>
            <StyledHeading style={{ "--ml": "20px" }}>
                <LeftArrow
                    className="left-arrow"
                    onClick={() => history.goBack()}
                />
                Transactions
            </StyledHeading>
            <div className="transactions-list">
                {transactions.length === 0 && (
                    <div className="no-transactions">No transactions</div>
                )}
                {transactions.length > 0 &&
                    transactions.map(
                        ({ from, to, amount, status, _id, vendor }) => {
                            return (
                                <div className="transactions-item" key={_id}>
                                    <p className="transaction-type">
                                        {from ===
                                        userDetails.ethereumAccountNumber
                                            ? "Received"
                                            : "Sent"}
                                    </p>
                                    <p className="transactions-detail-item">
                                        Vendor :{" "}
                                        <span className="transactions-item-content">
                                            {vendor}
                                        </span>
                                    </p>
                                    <p className="transactions-detail-item">
                                        From :{" "}
                                        <span className="transactions-item-content">
                                            {from}
                                        </span>
                                    </p>

                                    <p className="transactions-detail-item">
                                        To :{" "}
                                        <span className="transactions-item-content">
                                            {to}
                                        </span>
                                    </p>
                                    <p className="transactions-detail-item">
                                        Amount :{" "}
                                        <span className="transactions-item-content">
                                            {amount} ZE
                                        </span>
                                    </p>
                                    <p className="transactions-detail-item">
                                        Status :{" "}
                                        <span
                                            className={`transactions-item-content ${status}`}
                                        >
                                            {status}
                                        </span>
                                    </p>
                                </div>
                            );
                        }
                    )}
            </div>
        </StyledPage>
    );
}

export default Transaction;
