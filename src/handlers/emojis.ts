import { GuildEmoji } from "discord.js";
import { getAnnouncementChannel } from "../util/channelUtil";

/**
 * Handles the event when a new emoji is created in a server.
 * @param emoji - The emoji that was created.
 */
export const onCreateEmoji = (emoji: GuildEmoji) => {
  const announceChannel = getAnnouncementChannel(emoji.guild);

  if (announceChannel) {
    announceChannel.send(`🎉 A new emote has been added to the server! 🎉`);
    announceChannel.send(`${emoji}`);
  }
};

/**
 * Handles the event when an emoji is deleted from a server.
 * @param emoji - The emoji that was deleted.
 */
export const onDeleteEmoji = (emoji: GuildEmoji) => {
  const announceChannel = getAnnouncementChannel(emoji.guild);

  // Handle deletion of emoji
};

/**
 * Handles the event when an emoji is updated in a server.
 * @param oldEmoji - the emoji before the update
 * @param newEmoji - the updated emoji
 */
export const onUpdateEmoji = (oldEmoji: GuildEmoji, newEmoji: GuildEmoji) => {
  const announceChannel = getAnnouncementChannel(newEmoji.guild);

  // Handle update of emoji
};