//register.js
import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { check, validationResult } from 'express-validator';

const registerRouter = express.Router();

registerRouter.post('/register', async (req, res) => {
  const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    // Create User
    const {name, email, password, confirmPassword} = req.body;
    try{
        User.create({
            name: name,
            password: password,
            email: email,
            confirmPassword: confirmPassword
        }).then(user => res.json(user));
    } catch(error){
        console.log(error);
        const errors = validationResult(req);
        const errorDetails = [
            {
                "location": "Authorization",
                "msg": `${name} ${errors}`,
                "param": name
            }
        ];
        res.json({errors: errorDetails});
    }
});

export default registerRouter;