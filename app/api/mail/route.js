// const nodemailer = require("nodemailer");
import * as nodemailer from "nodemailer";

export  async function POST(req , res) {
  console.log("received req");
  console.log(process.env.GMAIL_EMAIL_ADDRESS)
  // console.log(req.body)
  console.log({mail:{
    name:"ayush"
  }})
  
  if (req.method === "POST") {
    console.log(req.body.mail)
    // console.log(req);
    const message = {
      from: req.body.email,
      to: process.env.GMAIL_EMAIL_ADDRESS,
      subject: req.body.subject,
      text: req.body.message,
      html: `<p>${req.body.message}</p>`,
    };
    // console.log();

    let transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_EMAIL_ADDRESS,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

      transporter.sendMail(message, (err, info) => {
        if (err) {
          res.status(404).json({
            error: `Connection refused at ${err.address}`,
          });
        } else {
          res.status(250).json({

            success: `Message delivered to ${info.accepted}`,
          });
          return new Response ("Sent sucessfully")
        }
      });
  }
}
