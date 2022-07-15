// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getToken, JWT } from 'next-auth/jwt';
import { getSession } from "next-auth/react";
import { google } from "googleapis";

const secret = process.env.SECRET;
const clientId = process.env.GOOGLE_ID;
const clientSecret = process.env.GOOGLE_SECRET;

const simple = async (token: JWT, pageToken = '') => {
  const auth = new google.auth.OAuth2({
    clientId,
    clientSecret,
  });
  auth.setCredentials({
    access_token: token.access_token,
    refresh_token: token.refresh_token,
  });

  const gmail = google.gmail({ version: 'v1', auth: auth });
  const la = await gmail.users.labels.list({ userId: 'me', });

  const labels = la.data.labels;
  if (labels.length) {
    console.log('Labels:');
    labels.forEach((label) => {
      console.log(`- ${label.name}`);
    });
  } else {
    console.log('No labels found.');
  }
};

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).end();
  }
  const token: JWT | null = await getToken({ req, secret, encryption: true });
  const data = await simple(token);
  res.status(200).json(data);
};