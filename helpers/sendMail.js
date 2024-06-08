import nodemailer from 'nodemailer';
import fs from 'fs';
import 'dotenv/config';

const { USER_EMAIL, USER_PASSWORD } = process.env;


let emailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: USER_EMAIL,
    pass: USER_PASSWORD,
  },
});

export const sendEmailFunction = async (monto, descripcion, roommate) => {
  const correos = JSON.parse(
    fs.readFileSync("./data/roommates.json")
  ).roommates.map((r) => r.email);

  let emailOptions = {
    from: USER_EMAIL,
    to: [USER_EMAIL].concat(correos),
    subject: `Nuevo gasto registrado`,
    html: `<h6>${roommate} ha registrado un gasto de $${monto} por: ${descripcion}</h6>`,
  };

  try {
    const result = emailTransporter.sendMail(emailOptions);
    return result;
  } catch (e) {
    throw e;
  };
};