const postmark = require(`postmark`);

export const isEmptyObject = (obj: any): boolean => {
  if (!obj) return null;
  return Object.entries(obj).length === 0 && obj.constructor === Object;
};

module.exports = async (req, res) => {
  const isProduction: boolean = process.env.NODE_ENV === `production`;

  const isPOST: boolean = req.method === `POST`;
  if (!isPOST) return res.status(400).send(`Not a POST req`);

  const hasBody = !isEmptyObject(req?.body);
  if (!hasBody) return res.status(400).send(`No body sent`);

  const { firstname, lastname, email, company, message, _gotcha = `` } = req?.body;

  const hasHoneypotValue = _gotcha !== ``;
  if (hasHoneypotValue) return res.status(400).send(`Ya darn bots`);

  if (isProduction) {
    // Send an email:
    const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_CLIENT);

    // Send email to myself
    await client.sendEmail({
      From: process.env.POSTMARK_FROM,
      To: process.env.POSTMARK_TO,
      Subject: `New message from contact form`,
      HtmlBody: /* HTML */ `
        <h1>New contact submission</h1>
        <p>New contact submission from from ${firstname} ${lastname} at ${company}.</p>
        <p>Contact email is <a href="mailto:${email}">${email}</a>.</p>
        <p>With the following message: ${message}</p>
      `,
      TextBody: `New contact submission from ${firstname} ${lastname} at ${company}. Contact email is ${email}. With the following message: ${message}`,
      MessageStream: `outbound`,
    });

    // Send email to submitter
    await client.sendEmail({
      From: process.env.POSTMARK_FROM,
      To: email,
      Subject: `We've got your message at WhatJackHasMade`,
      HtmlBody: /* HTML */ `
        <h1>Thanks for getting in touch</h1>
        <p>
          Hey ${firstname}, I'm usually quite fast at replying to my emails but depending on the day it can take up to
          48 hours for me to send an email over.
        </p>
        <p>As soon as I get a couple of spare minutes I will reply to you! :)</p>
      `,
      TextBody: `Thanks for getting in touch! Hey ${firstname}, I'm usually quite fast at replying to my emails but depending on the day it can take up to 48 hours for me to send an email over.`,
      MessageStream: `outbound`,
    });
  }

  return res.status(200).send(`Message sent successfully`);
};
