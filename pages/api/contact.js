import nodemailer from "nodemailer";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const name = String(req.body?.name || "").trim();
  const email = String(req.body?.email || "").trim();
  const message = String(req.body?.message || "").trim();

  if (
    !name ||
    name.length > 100 ||
    !EMAIL_PATTERN.test(email) ||
    email.length > 254 ||
    !message ||
    message.length > 5000
  ) {
    return res.status(400).json({ error: "Invalid contact form data" });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error("Contact email environment variables are not configured");
    return res.status(500).json({ error: "Email service is unavailable" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `Kareem Portfolio <${gmailUser}>`,
      to: "kbkareem31@gmail.com",
      replyTo: email,
      subject: `Portfolio message from ${name.replace(/[\r\n]/g, " ")}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Unable to send contact email", error);
    return res.status(500).json({ error: "Unable to send email" });
  }
}
