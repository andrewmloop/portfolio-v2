import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: "andrewmloop@gmail.com",
      from: "andrewmloop@gmail.com",
      subject: `[PORTFOLIO MESSAGE] ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>Portfolio Message</title>
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      
      <body>
        <div class="container" style="margin-left: 20px;margin-right: 20px;">
          <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
          <div style="font-size: 16px;">
            <p>Message:</p>
            <p>${req.body.message}</p>
            <br>
          </div>
        </div>
      </body>
      </html>`
    });
  } catch (error) {
    console.error("Error sending message: ", error);
    return res.status(error.statusCode || 500).json({error: error.message});
  }

  res.status(200).json({error: ""});
}