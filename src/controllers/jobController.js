const emailQueue = require("../queues/emailQueue");

const createEmailJob = async (req, res) => {
    try {
        const { email, subject, message } = req.body;

        const job = await emailQueue.add("sendEmail", {
            email,
            subject,
            message,
        });

        res.status(202).json({
            success: true,
            message: "Email job added to queue successfully",
            jobId: job.id,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to add email job",
            error: error.message,
        });
    }
};

module.exports = {
    createEmailJob,
};