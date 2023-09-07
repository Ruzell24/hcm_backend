"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./controller/index"));
var _middleware = _interopRequireDefault(require("../../service/middleware"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

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
router.post('/login', _index["default"].userLogin);

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
router.post('/sign-up', _index["default"].userSignUp);

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

router.get('/', _middleware["default"], _index["default"].getUserDetails);
var _default = {
  router: router
};
exports["default"] = _default;