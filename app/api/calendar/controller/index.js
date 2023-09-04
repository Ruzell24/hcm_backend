import TimeEntry from '../model/index';


const createTimeEntry = async (req, res) => {
    try {
        const { user_id, start_time } = req.body;

        const timeEntry = await TimeEntry.create({
            user_id: user_id,
            start_time: start_time,
            end_time: start_time,
            duration: 0,
        });

        return res.status(201).json({ timeEntry });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

const timeOut = async (req, res) => {
    try {
        const { id } = req.params;
        const { end_time } = req.body;

        const timeEntry = await TimeEntry.findByPk(id);

        if (!timeEntry) {
            return res.status(404).json({ error: 'Time entry not found' });
        }

        // Calculate the duration in seconds
        const startTime = new Date(timeEntry.start_time);
        const endTime = new Date(end_time);
        const duration = Math.floor((new Date(endTime) - new Date(startTime)) / 1000 / 60);

        // Update the time entry
        await timeEntry.update({
            end_time: endTime,
            duration: duration,
        });

        return res.status(200).json({ timeEntry });
    } catch (error) {
        console.error('Error updating time entry:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getAllUserTimeEntries = async (req, res) => {
    const { id } = req.params; // Assuming you pass the user_id as a parameter
    console.log(id)
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



