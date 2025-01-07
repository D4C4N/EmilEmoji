import { Client, Events, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
import { onCreateEmoji, onDeleteEmoji, onUpdateEmoji } from './handlers/emojis';

// Load environment variables from .env file
dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error('BOT_TOKEN is not defined.');
}

// Initialize a new Discord client with necessary intents
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildExpressions],
});

// Event triggered when the bot successfully logs in
client.once(Events.ClientReady, () => {
  console.log(`Bot is online! Logged in as user: ${client.user?.tag}`);
});

// Register emoji event handlers
client.on(Events.GuildEmojiCreate, onCreateEmoji);
client.on(Events.GuildEmojiDelete, onDeleteEmoji);
client.on(Events.GuildEmojiUpdate, onUpdateEmoji);

// Log the bot in using the provided token
client.login(BOT_TOKEN).catch((err: unknown) => {
  console.error("Error at login:", err);
});