import { Sticker, EmbedBuilder } from "discord.js";
import { getAnnouncementChannel } from "../util/channelUtil";
import { sendAnnouncement } from "../util/announceUtil";

/**
 * Handles the event when a new sticker is created in a server.
 * @param sticker - The sticker that was created.
 */
export const onCreateSticker = (sticker: Sticker) => {
  if (!sticker.guild) {
    console.log("No guild found.");
    return;
  }

  const embed = new EmbedBuilder()
    .setTitle("🎉 A new sticker has been added! 🎉")
    .setDescription(`Say hello to **${sticker.name}**!`)
    .setImage(sticker.url)
    .setColor(0x0099ff)
    .setFooter({ text: "Sticker Update" })
    .setTimestamp();

  sendAnnouncement(sticker.guild, { embeds: [embed] });
};

/**
 * Handles the event when a sticker is deleted from a server.
 * @param sticker - The sticker that was deleted.
 */
export const onDeleteSticker = (sticker: Sticker) => {
  const announceChannel = getAnnouncementChannel(sticker.guild);

  // Handle deletion of sticker
};

/**
 * Handles the event when a sticker is updated in a server.
 * @param oldSticker - The sticker before the update.
 * @param newSticker - The updated sticker.
 */
export const onUpdateSticker = (oldSticker: Sticker, newSticker: Sticker) => {
  const announceChannel = getAnnouncementChannel(newSticker.guild);

  // Handle update of sticker
};
