const User = require("../models/user");
const mongoose = require("mongoose");
const { createEthereumAccount } = require("../../blockchain/login");

async function addUser(userdata) {
    try {
        console.log("userdata : ", userdata);
        const { address: ethereumAccountNo, privateKey: ethereumPrivateKey } =
            createEthereumAccount();
        const { name, pictureUrl, _id, registrationPending } = userdata;
        const user = await User.create({
            name,
            pictureUrl,
            _id,
            ethereumAccountNo,
            registrationPending,
            ethereumPrivateKey
        });

        return user._doc;
    } catch (err) {
        console.log(err);
        throw new Error({ err: { msg: "Error in adding the User" } });
    }
}

async function findUser(id) {
    try {
        const user = await User.findById(id);
        if (user) return { ...user._doc, isNew: false };
        else return { err: { msg: "User not found.", code: 404 } };
    } catch (err) {
        return { err: { msg: "Error in finding User.", code: 500 } };
    }
}

async function findUserAndUpdate(id, data) {
    try {
        const user = await User.findByIdAndUpdate(id, data, {
            new: true,
        });
        console.log(user);
        if (user.errors) return { err: "User does not exist." };
        else return user._doc;
    } catch (err) {
        return { err: "Error in updating the User." };
    }
}

async function findUserAccount(id) {
    try {
        const user = await User.findById(id);
        if (user) {
            return { data: user._doc.accountNo };
        } else return { err: "User not found." };
    } catch (err) {
        return { err: "Error in finding User." };
    }
}

module.exports = {
    findUser,
    findUserAccount,
    addUser,
    findUserAndUpdate,
};
