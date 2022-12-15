const nodemailer = require("nodemailer");

const sendMailer = async (name, email, contactMessage) => {
  const config = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "gruporeactfinal@gmail.com",
      pass: "dvrfazlzucyfjtev",
    },
  };

  const message = {
    from: "gruporeactfinal@gmail.com",
    to: "gruporeactfinal@gmail.com",
    subject: "Consulta de contacto.",
    html: `<h2>Mensaje de consulta de ${name} para responder a ${email} dentro de las próximas 48hs hábiles</h2>
    <br><br><br>        
    <p>${contactMessage}</p>
    <br><br><br>
    <h4>Fin del mensaje de contacto.</h4>
    `,
  };

  try {
    const transport = nodemailer.createTransport(config);
    const info = transport.sendMail(message);
    console.log(info);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = sendMailer;
