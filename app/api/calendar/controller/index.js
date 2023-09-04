import TimeEntry from '../model/index';
import moment from 'moment'


const createTimeEntry = async (req, res) => {
    try {
        const { user_id, title } = req.body;
        const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');

        const timeEntry = await TimeEntry.create({
            user_id: user_id,
            start_time: currentTime,
            end_time: currentTime,
            title: title,
            duration: 0,
            is_ongoing: 1
        });

        return res.status(201).json({ timeEntry });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error });
    }
};

const timeOut = async (req, res) => {
    try {
        const { id } = req.params;

        const timeEntry = await TimeEntry.findByPk(id);

        if (!timeEntry) {
            return res.status(404).json({ error: 'Time entry not found' });
        }

        const endTime = moment().format('YYYY-MM-DD HH:mm:ss');
        const startTime = new Date(timeEntry.start_time);
        const duration = Math.floor((new Date(endTime) - new Date(startTime)) / 1000 / 60);


        await timeEntry.update({
            end_time: endTime,
            duration: duration,
            is_ongoing: 0
        });

        return res.status(200).json({ timeEntry });
    } catch (error) {
        console.error('Error updating time entry:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllUserTimeEntries = async (req, res) => {
    const { id } = req.params;
    try {
        const timeEntries = await TimeEntry.findAll({
            where: { user_id: id },
        });

        return res.status(200).json({ timeEntries });
    } catch (error) {
        console.error('Error fetching user time entries:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


export default {
    createTimeEntry,
    timeOut,
    getAllUserTimeEntries
}



