import db from "@repo/db/client"
const express = require("express");


const app = express();

app.post("/hdfcWebHook", (req, res) => {
    //TODO: Add zod validation here?
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    
    
    //update balance in db, add tkn
})