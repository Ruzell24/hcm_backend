import express from 'express';
import controller from './controller/index';


const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: Authentication operations
 * /api/user/login:
 *   post:
 *     summary: Login to the system
 *     description: User login route
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 required: true // Set email as required
 *               password:
 *                 type: string
 *                 required: true // Set password as required
 *     responses:
 *       200:
 *         description: Successful login
 *       401:
 *         description: Unauthorized
 */
router.post('/login', controller.userLogin);


/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User-related operations
 * /api/user/sign-up:
 *   post:
 *     summary: Login to the system
 *     description: User login route
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               first_name:
 *                 type: string
 *               last_name:  
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *               - password
 *               - last_name
 *               - first_name  # Corrected case for firstName
 *     responses:
 *       200:
 *         description: Successful login
 *       401:
 *         description: Unauthorized
 */
router.post('/sign-up', controller.userSignUp);


export default {
    router
};
