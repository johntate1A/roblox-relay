export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'POST only' });
  }

  const data = req.body;

  const webhookUrl = 'https://discord.com/api/webhooks/1397913930982228089/A1OIaAi2IwG_fASgQOJO-a4nBf-122DKcEy8H40aX8yhNK24NmMBCxqBAJrpn-DBF7ti
';

  try {
    await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send to Discord' });
  }
}

