const nodemailer = require('nodemailer');

module.exports.sendEmail = function (oldPrice, currentPrice) {

  const transporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports
    host: 'smtp.gmail.com',
    auth: {
      user: 'your_email@gmail.com',
      pass: 'your_password',
    },
    secure: true,
  });

  const mailData = {
    from: 'your_email@gmail.com', 
    to: 'receiver@gmail.com', 
    subject: 'Price Alert',
    html: `Price has changed from ${oldPrice} to ${currentPrice}.`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};
