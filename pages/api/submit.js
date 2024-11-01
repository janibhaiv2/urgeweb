import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Frontend se form data receive karein
    const { name, email, phone, option1, option2, option3 } = req.body;

    // Nodemailer ke through email send karne ke liye configuration
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Gmail use kar rahe hain, lekin agar aapka alag provider hai toh woh bhi configure kar sakte hain
      auth: {
        user: process.env.EMAIL_USER, // Apna email address jo environment variables mein save kiya gaya hai
        pass: process.env.EMAIL_PASS, // Email ka password
      },
    });

    // Email content setup
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Yahan aapka email hoga, jahan par query ka notification chahiye
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission:\n
      Name: ${name}\n
      Email: ${email}\n
      Phone: ${phone}\n
      Option 1: ${option1}\n
      Option 2: ${option2}\n
      Option 3: ${option3}`,
    };

    try {
      // Email ko send karein
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");

      // Success response
      res.status(200).json({ message: 'Form submitted successfully and email sent!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    // Agar method POST nahi hai to yeh response send karein
    res.status(405).json({ message: 'Method not allowed' });
  }
}
