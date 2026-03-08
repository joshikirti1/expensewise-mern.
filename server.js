const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const expenseRoutes = require("./routes/expenseRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(
"mongodb+srv://expenseadmin:Expense123@expense-cluster.mo4e322.mongodb.net/expenseDB?retryWrites=true&w=majority"
)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));


/* ROUTES */

app.use("/api/expenses",expenseRoutes);

app.use("/api/auth",authRoutes);


app.listen(5000,()=>{
 console.log("Server running on port 5000");
});