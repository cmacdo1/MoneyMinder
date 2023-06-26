import jwt from 'jsonwebtoken';

const authenticateUser = (req, res, next) => {
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).json({
            success: false,
            message: 'Unauthorized',
        });
    }

    try {
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        req.user = decodedToken;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({
            success: false,
            message: 'Invalid token',
        });
    }
};

export default authenticateUser;