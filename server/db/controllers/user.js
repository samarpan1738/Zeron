const User = require("../models/user");
const mongoose = require("mongoose");

async function addUser(id, userdata) {
	try {
		const user = await User.create({
			name: userdata.name,
			picture: userdata.picture,
			_id: userdata.email,
			accountNo: userdata.accountNo,
		});

		return { ...user._doc, isNew: true };
	} catch (err) {
		console.log(err);
		return { err: { msg: "Error in adding the User" } };
	}
}

async function findUser(id) {
	try {
		const user = await User.findById(id);
		if (user) return { ...user._doc, isNew: false };
		else return { err: { msg: "User not find.", code: 400 } };
	} catch (err) {
		return { err: { msg: "Error in finding User.", code: 500 } };
	}
}

async function findUserAndUpdate(id, data) {
	try {
		const user = await User.findByIdAndUpdate(id, data, {
			new: true,
		});

		if (user.errors) return { err: "User does not exist." };
		else return { ...user._doc };
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
