import express from 'express';
import controller from './controller/index';
import middleware from 'service/middleware';


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


/**
 * @swagger
 * /api/user:
 *   get:
 *     summary: Get user details
 *     description: Retrieves user details using a Bearer token from the request header.
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         description: Unauthorized - Invalid or missing token
 *       400:
 *         description: Bad request - Token verification failed or other errors
 */

router.get('/', middleware, controller.getUserDetails)

export default {
    router
};
