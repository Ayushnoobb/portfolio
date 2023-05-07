const nodemailer = require("nodemailer");

export async function POST(req, res) {
  console.log(req.body)
  if (req.method == "POST") {
    console.log("received req");
    console.log(req);

    const message = {
      from: req.body.email,
      to: process.env.GMAIL_EMAIL_ADDRESS,
      subject: req.body.subject,
      text: req.body.message,
      html: `<p>${req.body.message}</p>`,
    };
    console.log(req.body.email);

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_EMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    if (req.method === "POST") {
      transporter.sendMail(message, (err, info) => {
        if (err) {
          res.status(404).json({
            error: `Connection refused at ${err.address}`,
          });
        } else {
          res.status(250).json({
            success: `Message delivered to ${info.accepted}`,
          });
        }
      });
    }
  }
}
