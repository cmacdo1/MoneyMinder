// User.js
import mongoose from "mongoose";
// import { loadType } from "mongoose-currency";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
// import { check, validationResult } from 'express-validator';

const Schema = mongoose.Schema;
// loadType(mongoose);

const BudgetSchema = new Schema({
    income: {
        type: Number,
    },
    rent: {
        type: Number,
    },
    insurance: {
        type: Number,
    },
    electric: {
        type: Number,
    },
    internet: {
        type: Number,
    },
    gas: {
        type: Number,
    },
    groceries: {
        type: Number,
    },
    loans: {
        type: Number,
    },
});

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'You must provide a name'],
        unique: true,
        trim: true,
        maxlength: [20, 'The name cannot be more than 20 characters'],
        minlength: [2, 'The name cannot be less than 2 characters'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (value) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value),
            message: (props) => `${props.value} is not a valid email address`,
        },
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true,
        validate: { // This is for comparing the password and confirm password
            validator: function(el){
                return el === this.password;
            },
            message: 'Passwords are not the same!'
        }
    },
    budget: [BudgetSchema],
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    date: {
        type: Date,
        default: Date.now // This will automatically add the date
    }
});

// This function will run before the user is saved to the database
UserSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        // const salt = await bcrypt.genSalt(10);
        // this.password = await bcrypt.hash(this.password, salt);
        this.password = await bcrypt.hash(this.password, 10); 
        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
        this.confirmPassword = undefined // This is so that it does not store in the database
    }
    next();
  });

// This function generates the token
UserSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id: this._id}, process.env.TOKEN_SECRET_KEY);
        return token;
    } catch(error) {
        console.log(error);
    }
}

// This function will compare the password
UserSchema.methods.verifyPassword = async function(password){
    const user = this;
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('User.js', user, isMatch);
    if(!isMatch){
        throw new Error('verify function from user schema');
    }
    return user;
}

// This function finds the user in the database
UserSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email});
    if(!user){
        throw new Error('Unable to login, email');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        throw new Error('Unable to login, password');
    }
    return user;
}

const User = mongoose.model('User', UserSchema);

export default User;