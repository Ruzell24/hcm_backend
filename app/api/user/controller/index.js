import UserModel from '../model/index';
import utils from '@service/utils/security';


const userLogin = (req, res) => {
    res.send('User login')

}

const userSignIn = async (req, res) => {
    const body = req.body;
    const password = await utils.encrypt_password(body.password)
    console.log(body)
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