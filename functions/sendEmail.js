// require("dotenv").config();
// const nodemailer = require("nodemailer");
//
// exports.handler = async (event, context) => {
//     if (event.httpMethod !== "POST") {
//         return {
//             statusCode: 405,
//             body: "Method Not Allowed",
//         };
//     }
//
//     const {name, email, phone, message} = JSON.parse(event.body);
//
//     if (!name || !email || !message) {
//         return {
//             statusCode: 400,
//             body: "Missing required fields",
//         };
//     }
//
//     // Configure Nodemailer
//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             user: process.env.GMAIL_USER, // Your Gmail address
//             pass: process.env.GMAIL_PASS, // Your Gmail app password
//         },
//     });
//
//     const mailOptions = {
//         from: `"${name}" <${email}>`,
//         to: process.env.GMAIL_USER, // Your email
//         subject: "درخواست مشاوره از طریق سایت لوانت",
//         text: message,
//         html: `<p>نام و نام خانوادگی:</p><p>${name}</p>
//                <p>شماره تماس:</p><p>${phone}</p>
//                <p>ایمیل:</p><p>${email}</p>
//                <p>پیام کاربر:</p><p>&nbsp;</p><p>${message}</p>`,
//     };
//
//     try {
//         await transporter.sendMail(mailOptions);
//         return {
//             statusCode: 200,
//             body: "Email sent successfully",
//         };
//     } catch (error) {
//         console.error("Error sending email:", error);
//         return {
//             statusCode: 500,
//             body: `Failed to send email. Error: ${error.message}`,
//         };
//     }
// };
require("dotenv").config();
const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
    console.log("Function triggered");

    if (event.httpMethod !== "POST") {
        console.error("Invalid HTTP Method");
        return {
            statusCode: 405,
            body: "Method Not Allowed",
        };
    }

    try {
        // Parse and log the payload
        console.log("Parsing event body...");
        const {name, email, phone, message} = JSON.parse(event.body);
        console.log("Payload received:", {name, email, phone, message});

        // Validate required fields
        if (!name || !email || !message) {
            console.error("Validation failed: Missing required fields");
            return {
                statusCode: 400,
                body: "Missing required fields",
            };
        }

        // Log nodemailer configuration
        console.log("Setting up nodemailer transporter...");
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER, // Your Gmail address
                pass: process.env.GMAIL_PASS, // Gmail app password
            },
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.GMAIL_USER, // Your email address
            subject: " این پیام از ارتباط با ما سایت لوانت ارسال شده",
            text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`,
            html: `
                <p><strong>نام:</strong> ${name}</p>
                <p><strong>تلفن:</strong> ${phone}</p>
                <p><strong>ایمیل:</strong> ${email}</p>
                <p><strong>پیام:</strong> ${message}</p>
            `,
        };

        console.log("Sending email...");
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);

        return {
            statusCode: 200,
            body: "Email sent successfully!",
        };
    } catch (error) {
        console.error("Error occurred:", error);
        return {
            statusCode: 500,
            body: `Error: ${error.message}`,
        };
    }
};
