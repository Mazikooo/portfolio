// pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, textarea } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // Ganti dengan email Anda
        pass: process.env.EMAIL_PASS, // Ganti dengan password email Anda atau password aplikasi
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Ganti dengan email tujuan Anda
      subject: `Contact form submission from ${email}`,
      text: textarea,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error sending message' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
