import { Client, GatewayIntentBits, GuildEmoji, TextChannel } from 'discord.js';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;
const ANNOUNCE_CHANNEL = process.env.ANNOUNCE_CHANNEL;

if (!BOT_TOKEN) {
  throw new Error('BOT_TOKEN is not defined.');
}

// Initialize a new Discord client with necessary intents
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildEmojisAndStickers],
});

// Event triggered when the bot successfully logs in
client.once("ready", () => {
  console.log(`Bot is online! Logged in as user: ${client.user?.tag}`);
});

// Event triggered when a new emoji is created in a server
client.on("emojiCreate", (emoji: GuildEmoji) => {
  const guild = emoji.guild;

  // Use the announce channel name from the environment variable or default to "general"
  const announceChannelName = ANNOUNCE_CHANNEL || "general";

  const announceChannel = guild.channels.cache.find(
    (channel): channel is TextChannel => channel.isTextBased() && channel.name === announceChannelName
  );

  if (announceChannel) {
    announceChannel.send(`🎉 A new emote has been added to the server! 🎉`);
    announceChannel.send(`${emoji}`);
  } else {
    console.log(`Channel '${announceChannelName}' not found in guild: ${guild.name}`);
  }
});

// Log the bot in using the provided token
client.login(BOT_TOKEN).catch((err: unknown) => {
  console.error("Error at login:", err);
});
