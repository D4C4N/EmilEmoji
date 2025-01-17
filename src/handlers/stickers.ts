import { Sticker, Guild } from "discord.js";
import { getAnnouncementChannel } from "../util/channelUtil";

/**
 * Handles the event when a new sticker is created in a server.
 * @param guild - The guild where the sticker was created.
 * @param sticker - The sticker that was created.
 */
export const onCreateSticker = (guild: Guild, sticker: Sticker) => {
  const announceChannel = getAnnouncementChannel(guild);

  if (announceChannel) {
    announceChannel.send({
      content: `🎉 A new sticker has been added to the server! 🎉`,
      stickers: [sticker.id],
    });
  }
};

/**
 * Handles the event when a sticker is deleted from a server.
 * @param guild - The guild where the sticker was deleted.
 * @param sticker - The sticker that was deleted.
 */
export const onDeleteSticker = (guild: Guild, sticker: Sticker) => {
  const announceChannel = getAnnouncementChannel(guild);

  // Handle deletion of sticker
};

/**
 * Handles the event when a sticker is updated in a server.
 * @param guild - The guild where the sticker was updated.
 * @param oldSticker - The sticker before the update.
 * @param newSticker - The updated sticker.
 */
export const onUpdateSticker = (guild: Guild, oldSticker: Sticker, newSticker: Sticker) => {
  const announceChannel = getAnnouncementChannel(guild);

  // Handle update of sticker
};
