import express from 'express';
import controller from './controller/index';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: User-related operations
 * /api/user/login:
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
 * /api/user/sign-in:
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
 *               firstName:  # Corrected case for firstName
 *                 type: string
 *               lastName:   # Corrected case for lastName
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - username
 *               - email
 *               - password
 *               - lastName
 *               - firstName  # Corrected case for firstName
 *     responses:
 *       200:
 *         description: Successful login
 *       401:
 *         description: Unauthorized
 */
router.post('/sign-in', controller.userSignIn);


export default {
    router
};
