import jwt from 'jsonwebtoken';
import config from '@api/config';

const generateToken = (userDetails) => {
    try {
        const token = jwt.sign(
            { userId: userDetails.id, email: userDetails.email },
            config.SECRET_KEY, // Replace with a secure secret key
            { expiresIn: '1h' } // Set the token expiration time as needed
        );

        return token;
    } catch (error) {
        throw new Error('generateToken failed');
    }
}

const authenticateToken = (token) => {
    try {
        const decodedToken = jwt.verify(token, config.SECRET_KEY);
        return decodedToken;
    } catch (error) {
        throw new Error('Token verification failed or has expired');
    }
};


export default {
    generateToken,
    authenticateToken
}