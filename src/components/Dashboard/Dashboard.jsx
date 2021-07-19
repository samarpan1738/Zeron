import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MyDrawer from "../MyDrawer/MyDrawer";
import "./dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
import { getbalance } from "../../blockchain/interact";
import { setUserDetails } from "../../store/features/userDetails/userDetailsSlice";
import { useToast } from "@chakra-ui/react";
import { ReactComponent as LeftArrow } from "../../assets/arrow-left.svg";
import { ReactComponent as EditIcon } from "../../assets/editIcon.svg";
import { ReactComponent as RefreshIcon } from "../../assets/refreshIcon.svg";
import { ReactComponent as Loader } from "../../assets/loader.svg";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { ReactComponent as EyeIcon } from "../../assets/eye.svg";
import { ReactComponent as EyeOffIcon } from "../../assets/eye-off.svg";
import { ReactComponent as CopyIcon } from "../../assets/copy.svg";
import StyledPage from "../global/styledComponents/StyledPage";
import StyledHeading from "../global/styledComponents/StyledHeading";
import { useState } from "react";

function Dashboard() {
    const userDetails = useSelector((state) => state.userDetails);
    const history = useHistory();
    const dispatch = useDispatch();
    const toast = useToast();
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [isEyeOff, setIsEyeOff] = useState(false);
    console.log("userDetails : ", userDetails);

    const refreshAccountBalance = (e) => {
        setIsRefreshing(true);
        getbalance(userDetails.ethereumAccountNo)
            .then((bal) => {
                console.log("Balance: ", bal);
                dispatch(setUserDetails({ ethereumBalance: bal }));
                setIsRefreshing(false);
            })
            .catch((err) => {
                setIsRefreshing(false);
                console.log(err.message);
                toast({
                    title: "Error fetching balance",
                    position: "top-right",
                    description: err.message,
                    status: "error",
                    duration: 8000,
                    isClosable: true,
                });
            });
    };

    const toggleEdit = (e) => {
        setIsEditing((curr) => !curr);
    };

    const toggleEyeOff = (e) => {
        setIsEyeOff((curr) => !curr);
    };

    useEffect(() => {
        refreshAccountBalance();
        if (!userDetails.isAuthenticated) {
            fetch("/api/user/")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const { success, user, message } = data;
                    if (success) {
                        console.log("Setting userDetails");
                        dispatch(
                            setUserDetails({
                                name: user.name,
                                email: user._id,
                                pictureUrl: user.pictureUrl,
                                registerPending: user.registrationPending,
                                ethereumAccountNo: user.ethereumAccountNo,
                                ethereumPrivateKey: user.ethereumPrivateKey,
                            })
                        );
                    } else {
                        console.log(message);
                    }
                });
        }
    }, []);

    return (
        <StyledPage style={{ "--pl": "52px" }}>
            {/* <Sidebar balance={userDetails.ethereumBalance} /> */}
            {/* <Sidebar /> */}
            <div className="main">
                {/* <p>Dashboard</p> */}
                <StyledHeading>
                    <LeftArrow
                        className="left-arrow"
                        onClick={() => history.goBack()}
                    />
                    Dashboard
                </StyledHeading>

                <div className="user-details">
                    <div className="user-detail-item">
                        <p className="user-detail-title">My Name</p>
                        <p className="user-detail-content">
                            {userDetails.name}
                        </p>
                        <div className="icon-container">
                            <abbr title={isEditing ? "Done" : "Edit"}>
                                {isEditing ? (
                                    <CheckIcon
                                        className="edit-icon"
                                        onClick={toggleEdit}
                                    />
                                ) : (
                                    <EditIcon
                                        className="edit-icon"
                                        onClick={toggleEdit}
                                    />
                                )}
                            </abbr>
                        </div>
                    </div>
                    <div className="user-detail-item">
                        <p className="user-detail-title">My Account Number</p>
                        <p className="user-detail-content">
                            {userDetails.ethereumAccountNo}
                        </p>
                        <div className="icon-container">
                            <abbr title={isEyeOff ? "Show" : "Hide"}>
                                {isEyeOff ? (
                                    <EyeOffIcon
                                        className="edit-icon"
                                        onClick={toggleEyeOff}
                                    />
                                ) : (
                                    <EyeIcon
                                        className="edit-icon"
                                        onClick={toggleEyeOff}
                                    />
                                )}
                            </abbr>
                        </div>
                    </div>
                    <div className="user-detail-item">
                        <p className="user-detail-title">My Account Balance</p>
                        <p className="user-detail-content">
                            {userDetails.ethereumBalance} ZE
                        </p>
                        <div className="icon-container">
                            <abbr
                                title={isRefreshing ? "Refreshing" : "Refresh"}
                            >
                                {isRefreshing ? (
                                    <Loader className="edit-icon" />
                                ) : (
                                    <RefreshIcon
                                        className="edit-icon"
                                        onClick={refreshAccountBalance}
                                    />
                                )}
                            </abbr>
                        </div>
                    </div>
                    <div className="user-detail-item">
                        <p className="user-detail-title">My Signing Key</p>
                        <input
                            className="user-detail-content sign-key"
                            type={isEyeOff ? "password" : "text"}
                            disabled
                            value={userDetails.ethereumPrivateKey}
                        />
                        {/* <p className="user-detail-content">
                            {userDetails.ethereumPrivateKey}
                        </p> */}
                        <div className="icon-container">
                            <abbr title={isEyeOff ? "Show" : "Hide"}>
                                {isEyeOff ? (
                                    <EyeOffIcon
                                        className="edit-icon"
                                        onClick={toggleEyeOff}
                                    />
                                ) : (
                                    <EyeIcon
                                        className="edit-icon"
                                        onClick={toggleEyeOff}
                                    />
                                )}
                            </abbr>
                            <abbr title="Copy">
                                <CopyIcon
                                    className="edit-icon"
                                    onClick={toggleEyeOff}
                                />
                            </abbr>
                        </div>
                        {/* <h4 className="user-detail-content">0x273C249b8bE25a88aDe9ec182655Af6ae263C58a</h4> */}
                    </div>
                </div>
            
            </div>
        </StyledPage>
    );
}

export default Dashboard;
