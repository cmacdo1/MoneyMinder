import express from 'express';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

const loginRouter = express.Router();

loginRouter.post('/login', async (req, res) => {
  // Find the User
  const user = await User.findOne({email: req.body.email});
  if(!user){
      return res.status(401).json({message: `<<Error>> login unsuccessful, user not found`});
  }
  // Compare Passwords
  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if(!isMatch){
      return res.status(401).json({message: `<<Error>> User: ${user.name} Invalid Password`});
  }
  // Login User
  try{
      // let token = await req.user.generateAuthToken();
      let token = await user.generateAuthToken();
      res.cookie('jwtoken', token, {
          expires: new Date(Date.now() + 25892000000),
          httpOnly: true
      });
      res.status(200).json({message: `User: ${user.name} login successful`});
      console.log(token);
  } catch(error){
      console.log(error);
      res.status(401).json({message: `User: ${user.name} Error: ${error} login unsuccessful`});
  }
});

export default loginRouter;