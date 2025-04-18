import { GuildEmoji, EmbedBuilder } from "discord.js";
import { sendAnnouncement } from "../util/announceUtil";

/**
 * Handles the event when a new emoji is created in a server.
 * @param emoji - The emoji that was created.
 */
export const onCreateEmoji = (emoji: GuildEmoji) => {
  const emojiUrl = `${process.env.CDN_BASE_URL}emojis/${emoji.id}.${emoji.animated ? "gif" : "png"}`;

  const embed = new EmbedBuilder()
    .setTitle("🎉 A new emoji has been added! 🎉")
    .setDescription(`Say hello to **${emoji.name}**!`)
    .setImage(emojiUrl)
    .setColor(0x00ffcc)
    .setFooter({ text: "Emoji Update" })
    .setTimestamp();

  sendAnnouncement(emoji.guild, { embeds: [embed] });
};

/**
 * Handles the event when an emoji is deleted from a server.
 * @param emoji - The emoji that was deleted.
 */
export const onDeleteEmoji = (emoji: GuildEmoji) => {
  // Handle deletion of emoji
};

/**
 * Handles the event when an emoji is updated in a server.
 * @param oldEmoji - the emoji before the update
 * @param newEmoji - the updated emoji
 */
export const onUpdateEmoji = (oldEmoji: GuildEmoji, newEmoji: GuildEmoji) => {
  // Handle update of emoji
};