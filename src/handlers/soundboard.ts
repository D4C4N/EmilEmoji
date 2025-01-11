import { Guild } from "discord.js";
import { getAnnouncementChannel } from "../util/channelUtil";


/**
 * Creates a message in the announce channel, notifiying users of the created sound with an embedded file as preview.
 * @param soundName 
 * @param soundId 
 * @param guild 
 * @returns 
 */
export const onSoundCreate = async (soundName: string, soundId: string, guild: Guild) => {
  const soundUrl = `https://cdn.discordapp.com/soundboard-sounds/${soundId}`;

  const announceChannel = getAnnouncementChannel(guild);
  if (!announceChannel) {
    return;
  }

  announceChannel.send({
    content: `🎉 The new soundboard sound **${soundName}** has been added to the server!  🎉`,
    files: [
      {
        attachment: soundUrl,
        name: `${soundName}.ogg`,
      },
    ],
  });
};