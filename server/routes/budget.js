// budgetRouter.js
import express from 'express';
import User from '../models/User.js';
import authenticateUser from '../middleware/authenticate.js';

const budgetRouter = express.Router();

budgetRouter.put('/budget', authenticateUser, async (req, res) => {
  try {
    const { income, rent, insurance, electric, internet, gas, groceries, loans } = req.body.budget;
    const userId = req.user._id;

    const update = {
      'budget.0.income': income,
      'budget.0.rent': rent,
      'budget.0.insurance': insurance,
      'budget.0.electric': electric,
      'budget.0.internet': internet,
      'budget.0.gas': gas,
      'budget.0.groceries': groceries,
      'budget.0.loans': loans
    };

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: update },
      { new: true }
    );

    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message
    });
  }
});

export default budgetRouter;