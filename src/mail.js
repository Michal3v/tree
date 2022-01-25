import getTreeLis from './index.js';
import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thebigtree15@gmail.com',
        pass: 'Tr123456'
    }
});

const mailOptions = {
    from: 'thebigtree15@gmail.com',
    to: 'michal.lev.home@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});