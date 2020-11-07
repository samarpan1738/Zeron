const User = require("../db/models/user");
const mongoose = require("mongoose");

async function findOneOrInsert(id, userdata) {
	try {
		const user = await User.findOne({ email: id });

		if (user) {
			return { isNew: false, ...user._doc };
		} else {
			const user = await User.create({
				name: userdata.given_name,
				picture: userdata.picture,
				email: userdata.email,
			});
            
			console.log("User created => ", user);
			return { ...user._doc, isNew: true };
		}
	} catch (err) {
		console.log(err);
		return err;
	}
}

async function getUserAccount(id){
    try{
        const user = await User.findOne({email : id});
        if(user){
            return user._doc.accountNo;
        }else
        return {err: "User not found."}
    }catch(err){

    }
}

module.exports = {
	// getUsers,
	// getUser,
	// toggleFollow,
	getUserAccount,
	findOneOrInsert,
};
