import bcrypt from 'bcryptjs';

const encrypt_password = async (plainTextPassword) => {
    const saltRounds = 10;

    try {
        const hashPassword = await bcrypt.hash(plainTextPassword, saltRounds);
        return hashPassword;
    } catch (error) {
        // Handle error, e.g., log it or throw a custom error
        throw new Error('Password encryption failed');
    }
}

const decrypt_password = async (plainTextPassword, hashPassword) => {
    try {
        const isPasswordMatch = await bcrypt.compare(plainTextPassword, hashPassword);
        return isPasswordMatch;
    } catch (error) {
        // Handle error, e.g., log it or throw a custom error
        throw new Error('Password decryption failed');
    }
}

export default {
    encrypt_password,
    decrypt_password
}
