import { Sticker } from "discord.js";
import { getAnnouncementChannel } from "../util/channelUtil";

/**
 * Handles the event when a new sticker is created in a server.
 * @param sticker - The sticker that was created.
 */
export const onCreateSticker = (sticker: Sticker) => {
  const announceChannel = getAnnouncementChannel(sticker.guild);

  if (announceChannel) {
    announceChannel.send({
      content: `🎉 A new sticker has been added to the server! 🎉`,
      stickers: [sticker.id],
    });
  }
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
