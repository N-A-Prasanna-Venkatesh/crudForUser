const express = require("express");
const router = express.Router();
const {createNewUser, getUserbyDisplayName, getAllUsers, updateDisplayNamebyId, changePassword, deleteUser} = require("./user")


//CREATE
router.post('/',async (req,res)=>{
    try{
        const result = await createNewUser(req,res);
        if(result) return res.json(result);
    }catch(err){
        return res.send(err);
    }
    
    
})
//READ
router.get('/',async (req,res)=>{
    try{
        const result = await getUserbyDisplayName(req,res);
        if(result) return res.json(result);
    }catch(err){
        return res.send(err)
    }
})
router.get('/all',async (req,res)=>{
    try{
        const result = await getAllUsers(req,res);
        if(result) return res.json(result);
    }catch(err){
        return res.send(err)
    }
})
//UPDATE
router.put('/',async (req,res)=>{
    try{
        const result = await updateDisplayNamebyId(req,res);
        if(result) return res.json(result);
    }catch(err){
        return res.json({error:err.message});
    }
})
//UPDATE
router.patch('/',async (req,res)=>{
    try{
        const result = changePassword(req,res);
        if(result) return res.json(result);
    }catch(err){
        return res.json({error:err});
    }
})
//DELETE
router.delete('/',async (req,res)=>{
    try{
        const result = deleteUser(req,res);
        if(result) return res.json(result);
    }catch(err){
        return res.json({message: err});
    }
})

module.exports = router;
