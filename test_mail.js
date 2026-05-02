const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "appsters.io",
    port: 465,
    secure: true,
    auth: {
        user: 'support@appsters.io',
        pass: "N;v-Om+OIZJ8?tdD"
    }
});

const mailOptions = {
    from: '"Appsters" <support@appsters.io>',
    to: 'aleehaiderbalti@gmail.com',
    subject: `Test`,
    html: `Test`
};

transporter.sendMail(mailOptions).then(console.log).catch(console.error);
