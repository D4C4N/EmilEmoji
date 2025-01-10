import { Client } from "discord.js";

/**
 * Gets the guild by the given guild ID.
 * @param client - The discord client/bot instance.
 * @param guildId - The guild Id to search for.
 * @returns The guild if found, otherwise returns null.
 */
export const getGuild = (client: Client<boolean>, guildId: string) => {
  const guild = client.guilds.cache.get(guildId);

  if (!guild) {
    console.log(`Guild not found for guild_id ${guildId}`);
    return null;
  }

  return guild;
};

/**
 * Checks if the given object contains a `guild_id` property of type string.
 * @param obj - The object to check.
 * @returns A boolean indicating whether the object contains a `guild_id` property of type string.
 */
export const objectContainsGuildId = (obj: any): obj is { guild_id: string } => {
  return typeof obj === "object" && "guild_id" in obj && typeof obj.guild_id === "string";
}