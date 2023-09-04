import route from 'api/user/route';
import express from 'express'
import controller from './controller';
import middleware from 'service/middleware';


const router = express.Router();


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
 *               start_time:
 *                 type: string
 *                 format: date-time
 *                 description: The start date and time of the time entry (ISO 8601 format).
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


router.post('/time-in', middleware, controller.createTimeEntry);



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
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               end_time:
 *                 type: string
 *                 format: date-time
 *                 description: The new end date and time of the time entry (ISO 8601 format).
 *             required:
 *               - end_time
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


router.patch('/time-out/:id', middleware, controller.timeOut);




export default { router }