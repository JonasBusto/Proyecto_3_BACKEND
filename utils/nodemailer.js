const nodemailer = require("nodemailer");

const sendMailer = async () => {
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
    subjet: "Consulta de contacto.",
    text: "Mensaje de la consulta de contacto",
  };

  try {
    const transport = nodemailer.createTransport(config);
    const info = await transport.sendMail(message);
    console.log(info)
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = sendMailer;
