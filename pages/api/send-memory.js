import TelegramBot from 'node-telegram-bot-api';

// Initialize the bot with your token
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, relationship, memory } = req.body;

    // Format the message
    const message = `
🕊 *זיכרון חדש מאתר ההנצחה*

👤 *שם:* ${name}
📧 *אימייל:* ${email}
🔗 *קשר לחיים:* ${relationship}

📝 *הזיכרון:*
${memory}

---
זוהי הודעה אוטומטית מאתר ההנצחה של חיים בכר ז"ל
`;

    // Send message to Telegram
    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {
      parse_mode: 'Markdown',
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Error sending message' });
  }
} 