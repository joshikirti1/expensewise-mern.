const express = require("express");
const router = express.Router();

const Expense = require("../models/Expense");


/* ADD EXPENSE */

router.post("/add", async (req,res)=>{

 try{

 const {title,amount,category,userId} = req.body;

 const expense = new Expense({
  title,
  amount,
  category,
  userId
 });

 const savedExpense = await expense.save();

 res.json(savedExpense);

 }catch(err){
  res.status(500).json(err);
 }

});


/* GET USER EXPENSES */

router.get("/:userId", async (req,res)=>{

 try{

 const expenses = await Expense.find({
  userId:req.params.userId
 });

 res.json(expenses);

 }catch(err){
  res.status(500).json(err);
 }

});


/* DELETE EXPENSE */

router.delete("/:id", async (req,res)=>{

 try{

 await Expense.findByIdAndDelete(req.params.id);

 res.json({
  message:"Expense deleted"
 });

 }catch(err){
  res.status(500).json(err);
 }

});

module.exports = router;