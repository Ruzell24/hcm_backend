"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _route = _interopRequireDefault(require("../user/route"));
var _express = _interopRequireDefault(require("express"));
var _controller = _interopRequireDefault(require("./controller"));
var _middleware = _interopRequireDefault(require("../../service/middleware"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();

/**
 * @swagger
 * tags:
 *   - name: Calendar
 *     description: Calendar-related operations
 * /api/calendar/time-in:
 *   post:
 *     summary: Create a new time entry
 *     description: Create a new time entry for tracking work hours in the calendar.
 *     tags:
 *       - Calendar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *                 description: The ID of the user associated with the time entry.
 *               title:
 *                 type: string
 *                 description: Title of what ur doing on that time
 *             required:
 *               - user_id
 *               - start_time
 *     responses:
 *       201:
 *         description: Time entry created successfully
 *       401:
 *         description: Unauthorized
 *     security:
 *       - bearerAuth: []  # Specify that this route requires the Bearer token
 */

router.post('/time-in', _middleware["default"], _controller["default"].createTimeEntry);

/**
 * @swagger
 * tags:
 *   - name: Calendar
 *     description: Calendar-related operations
 * /api/calendar/time-out/{id}:
 *   patch:
 *     summary: Update a time entry's end time and duration
 *     description: Update the end time and duration of a specific time entry.
 *     tags:
 *       - Calendar
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the time entry to update.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Time entry updated successfully
 *       400:
 *         description: Bad request, invalid input data
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Time entry not found
 *       500:
 *         description: Internal Server Error
 *     security:
 *       - bearerAuth: []  # Specify that this route requires the Bearer token
 */

router.patch('/time-out/:id', _middleware["default"], _controller["default"].timeOut);

/**
 * @swagger
 * /api/calendar/user/{id}:
 *   get:
 *     summary: Get all time entries for a specific user
 *     description: Retrieve all time entries associated with a specific user.
 *     tags:
 *       - Calendar
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user for whom to retrieve time entries.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful retrieval of user time entries
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 *     security:
 *       - bearerAuth: []  # Specify that this route requires the Bearer token
 */
router.get('/user/:id', _middleware["default"], _controller["default"].getAllUserTimeEntries);

/**
 * @swagger
 * /api/calendar/ongoing/{id}:
 *   get:
 *     summary: Get ongoing time entries for a user
 *     description: Retrieve a list of ongoing time entries for a specific user.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the user for whom to retrieve ongoing time entries.
 *         schema:
 *           type: integer
 *     tags:
 *       - Calendar
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of ongoing time entries for the specified user.
 *       500:
 *         description: Internal server error.
 */

router.get('/ongoing/:id', _middleware["default"], _controller["default"].getTimeEntriesOngoing);
var _default = {
  router: router
};
exports["default"] = _default;