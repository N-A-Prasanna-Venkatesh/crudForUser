//Functions go here...
const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId;
const user = require('./user.model');

module.exports.createNewUser = async (req,res)=>{
    const newUser = new user({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        displayName:req.body.displayName,
        email:req.body.email,
        mobileNumber:req.body.mobileNumber,
        password:req.body.password,
    });

    //WRONG INPUTS
    if(!req.body.firstName ||/\d/.test(req.body.firstName))
    throw({error:"wrong firstName"});
    
    if(!req.body.lastName || /\d/.test(req.body.lastName))
    throw({error:"wrong lastName"});
    
    if(!req.body.displayName ||req.body.displayName.length>16)
    throw({error:"displayName must be less than 16 characters and should not be empty"});
    
    if(!req.body.mobileNumber || /[a-zA-Z]/.test(req.body.mobileNumber) ||req.body.mobileNumber.length!=10)
    throw({error:"wrong mobileNumber"});
    
    if(!req.body.email || !/@gmail.com/.test(req.body.email))
    throw({error:"wrong email"});

    if(req.body.password.length > 128 || req.body.password.length < 8)
    throw({error:"password must be less than 128 characters and more than 8 characters"});

    const savedUser = await newUser.save();
    return savedUser;
}

module.exports.getUserbyDisplayName = async (req,res)=>{
    if(req.body.displayName.length>16)      
            throw({error:"displayName must be less than 16 characters"});

    const getUser = await user.find({displayName:req.body.displayName});
    return getUser;
}

module.exports.getAllUsers = async (req,res)=>{
    const getUser = await user.find();
    return getUser;
}

module.exports.updateDisplayNamebyId = async (req,res) =>{
    if(req.body.displayName.length>16)
            throw({error:"displayName must be less than 16 characters"});
    const updateUser = await user.updateOne({_id:ObjectId(req.body._id)},{$set :{displayName:req.body.displayName}});
    return updateUser;
}

module.exports.changePassword = async (req,res) =>{
    if(req.body.displayName.length>16)
            throw({error:"displayName must be less than 16 characters"});

        if(req.body.password.length > 128 || req.body.password.length < 8)
            throw({error:"password must be more than 8 characters and less than 128 characters"});

        const updateUser = await user.updateOne({displayName:req.body.displayName},{$set :{password:req.body.password}});
        return updateUser;

}

module.exports.deleteUser = async (req,res) => {
    if(req.body.displayName.length>16)
            throw({error:"displayName must be less than 16 characters"});

        const removedUser = await user.remove({displayName:req.body.displayName});
        return removedUser;
}








