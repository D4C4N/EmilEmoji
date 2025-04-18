import { Guild, MessagePayload, MessageCreateOptions, TextBasedChannel } from "discord.js";
import { getAnnouncementChannel } from "./channelUtil";

/**
 * Sends a formatted announcement to the guild's announcement channel.
 * Supports simple messages, embeds, attachments, stickers, etc.
 */
export const sendAnnouncement = async (
  guild: Guild | null,
  options: string | MessagePayload | MessageCreateOptions
) => {
  if (!guild) return;

  const channel = getAnnouncementChannel(guild);
  if (!channel) return;

  await channel.send(options);
};
