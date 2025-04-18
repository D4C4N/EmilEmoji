import { Guild, EmbedBuilder } from "discord.js";
import { getAnnouncementChannel } from "../util/channelUtil";

/**
 * Creates a message in the announce channel, notifying users of the created sound with an embedded preview.
 * @param soundName - The name of the new sound.
 * @param soundId - The ID of the new sound.
 * @param guild - The guild where it was created.
 */
export const onSoundCreate = async (soundName: string, soundId: string, guild: Guild) => {
  const soundUrl = `https://cdn.discordapp.com/soundboard-sounds/${soundId}`;

  const announceChannel = getAnnouncementChannel(guild);
  if (!announceChannel) return;

  const embed = new EmbedBuilder()
    .setTitle("🎉 A new sound has been added! 🎉")
    .setDescription(`Say hello to **${soundName}**!\n\nCheck it out below:`)
    .setColor(0x7289da)
    .setFooter({ text: "Soundboard Update" })
    .setTimestamp();

  await announceChannel.send({ embeds: [embed] });

  await announceChannel.send({
    files: [
      {
        attachment: soundUrl,
        name: `${soundName}.ogg`,
      },
    ],
  });
};
