import { Client, GatewayIntentBits, GuildEmoji, TextChannel } from 'discord.js';
import * as dotenv from 'dotenv';

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error('BOT_TOKEN is not defined.');
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildEmojisAndStickers],
});

client.once("ready", () => {
  console.log(`Bot is online! Logged in as user: ${client.user?.tag}`);
});

client.on("emojiCreate", (emoji: GuildEmoji) => {
  const guild = emoji.guild;

  const announceChannel = guild.channels.cache.find(
    (channel): channel is TextChannel => channel.isTextBased() && channel.name === "log"
  );

  if (announceChannel) {
    announceChannel.send(`🎉 A new emote has been added to the server! 🎉`);
    announceChannel.send(`${emoji}`);
  } else {
    console.log(`Channel 'general' not found in guild: ${guild.name}`);
  }
});

client.login(BOT_TOKEN).catch((err: unknown) => {
  console.error("Error at login:", err);
});
