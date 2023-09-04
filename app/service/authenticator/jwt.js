import jwt from 'jsonwebtoken';
import config from 'config';

const generateToken = (userDetails) => {
    try {
        const token = jwt.sign(
            { userDetails },
            config.SECRET_KEY,
            { expiresIn: '1h' }
        );

        return token;
    } catch (error) {
        throw new Error('generateToken failed');
    }
}

const authenticateToken = (token) => {
    try {
        const user = jwt.verify(token, config.SECRET_KEY);
        return user;
    } catch (error) {
        throw new Error('Token verification failed or has expired');
    }
};


export default {
    generateToken,
    authenticateToken
}