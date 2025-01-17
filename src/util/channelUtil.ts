import { Guild, TextChannel } from "discord.js";

/**
 * Searches for the announcement channel in the guild.
 * Returns the channel if found, otherwise returns null.
 * @param guild - The guild to search for the announcement channel in.
 * @returns The TextChannel if found, otherwise null.
 */
export const getAnnouncementChannel = (guild: Guild | null): TextChannel | null => {
  if (!guild) {
    console.log("Guild is null. Cannot search for announcement channel.");
    return null;
  }

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
