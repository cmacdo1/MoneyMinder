import express from 'express';

const logoutRouter = express.Router();

logoutRouter.get('/logout', (req, res) => {
  // Clear the token cookie
  res.clearCookie('token');
  res.json({ message: 'Logout successful' });
});

export default logoutRouter;