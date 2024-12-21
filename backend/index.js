const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});


// POST endpoint to handle the form submission
app.post('/v1/portfolio/form/submit', async (req, res) => {
    const { userName, userEmail, Message } = req.body;

    // Create a Nodemailer transporter using Gmail (you can use other services)
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use 'smtp.gmail.com' for Gmail
        auth: {
            user: 'isha22949@gmail.com', // Your Gmail address
            pass: 'xrub bbqw zozx mnym',    // Use an app-specific password (not your Gmail password)
        },
    });

    // Email content and settings
    const mailOptions = {
        from: userEmail,  // Sender's email (from the form)
        to: 'akanshgoel619@gmail.com',  // Your email address
        subject: 'New Message from Contact Form',
        text: `You have received a new message from ${userName} (${userEmail}):\n\n${Message}`,
    };

    try {
        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).send({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send({ error: 'Failed to send email' });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
