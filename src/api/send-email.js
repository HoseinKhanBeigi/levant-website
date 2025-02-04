export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // ✅ Import Nodemailer dynamically for Gatsby functions
  const nodemailer = require("nodemailer");

  // ✅ Load environment variables
  const { EMAIL_USER, EMAIL_PASS } = process.env;
  const { name, email, message } = req.body;

  // ✅ Validate input data
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // ✅ Configure Gmail SMTP
  const transporter = nodemailer.createTransport({
    host: "mail.levants.io",
    port: 587, // Use 465 for SSL, 587 for TLS
    secure: false, // False for TLS (587), true for SSL (465)
    auth: {
      user: "web@levants.io", // Your Gmail email
      pass: EMAIL_PASS, // Use App Password, NOT your real Gmail password
    },
  });

  try {
    // ✅ Send email
    await transporter.sendMail({
      from: "web@levants.io",
      to: "support@levants.io", // Replace with recipient's email
      subject: `New Contact from ${name}`,
      text: `From: ${name} (${email})\n\nMessage: ${message}`,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return res.status(500).json({ error: "Error sending email" });
  }
}
