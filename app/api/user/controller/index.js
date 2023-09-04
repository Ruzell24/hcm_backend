import UserModel from '../model/index';
import utils from '@service/utils/security';
import jwt from '@service/authenticator/jwt';



const userLogin = async (req, res) => {
    const body = req.body;

    try {
        const user = await UserModel.findOne({ where: { email: body.email } });

        if (!user) {

            return res.status(404).json({ error: 'User not found' });
        }
        const passwordMatches = await utils.decrypt_password(body.password, user.password);

        if (!passwordMatches) {
            return res.status(401).json({ error: 'Authentication failed' });
        }

        const token = jwt.generateToken(user);

        res.status(200).json({
            user: {
                username: user.username,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                token: token
            }
        });
    } catch (error) {
        console.error("Error during login:", error.message);
        res.status(500).json({ error: 'Login failed', message: error.message });
    }
}


const userSignIn = async (req, res) => {
    const body = req.body;
    const password = await utils.encrypt_password(body.password)
    try {
        // Attempt to create a new user
        const user = await UserModel.create({
            username: body.username,
            first_name: body.first_name,
            last_name: body.last_name,
            email: body.email,
            password: password,
        });

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        console.error("Error creating user:", error.message);
        res.status(400).json({ error: 'User creation failed', message: error.message });
    }
};

export default {
    userLogin,
    userSignIn
}