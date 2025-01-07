import { Guild, TextChannel } from "discord.js";

/**
 * Searches for the announcement channel in the guild.
 * Returns the channel if found, otherwise returns null.
 * @param guild - The guild to search for the announcement channel in.
 * @returns 
 */
export const getAnnouncementChannel = (guild: Guild) => {
  const announceChannelName = process.env.ANNOUNCE_CHANNEL || "general";

  const channel = guild.channels.cache.find(
    (channel): channel is TextChannel => channel.isTextBased() && channel.name === announceChannelName
  );

  if (!channel) {
    console.log(`Channel '${announceChannelName}' not found in guild: ${guild.name}`);
    return null;
  }

  return channel;
};