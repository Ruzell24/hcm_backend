import jwt from '@service/authenticator/jwt';

const middleware = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decodedUser = jwt.authenticateToken(token);

        if (!decodedUser) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        req.user = decodedUser; // Store decoded user data in req.user
        next();
    } catch (error) {
        console.error('Token verification error:', error);
        return res.status(401).json({ error: 'Unauthorized' });
    }
};

export default middleware;
