import nodemailer from "nodemailer";

const nodemailerConfig = async (req, res) => {
  const { city, email, phoneNumber, brand, model, engine, fuel, price } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
    },
  });
  const fs = require("fs");
  try {
    await transporter.sendMail({
      from: email,
      to: "autolakskupaut@gmail.com",
      subject: `PROPOZYCJA SPRZEDAŻY AUTA`,
      html: `<p>Formularz kontaktowy przez stronę SkupAut AutoLak</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Numer Telefonu: </strong> ${phoneNumber}</p>
        <p><strong>Miejscowość: </strong> ${city}</p>
        <p><strong>Marka: </strong> ${brand}</p>
        <p><strong>Model: </strong> ${model}</p>
        <p><strong>Pojemność silnika: </strong> ${engine}</p>
        <p><strong>Typ paliwa: </strong> ${fuel}</p>
        <p><strong>Proponowana cena: </strong> ${price} PLN</p><br>
      `,
      // attachments: [
      //   {
      //     filename: "zdjęcie.jpg",
      //     path: photoPath,
      //   },
      // ],
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};

export default nodemailerConfig;
