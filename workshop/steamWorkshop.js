const { EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');


async function getWorkshopDetails(publishedFileId) {
  const response = await fetch('https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'User-Agent': 'DiscordBot/1.0 (https://yourdomain.com)' 
    },
    body: new URLSearchParams({
      'itemcount': '1',
      'publishedfileids[0]': publishedFileId
    })
  });

  const contentType = response.headers.get('content-type');
  if (!contentType.includes('application/json')) {
    const text = await response.text();
    console.error('Steam returned HTML instead of JSON:', text.slice(0, 300));
    throw new Error('Steam API did not return valid JSON.');
  }

  const data = await response.json();
  return data.response.publishedfiledetails[0];
}

async function createWorkshopEmbed(workshopId) {
  const details = await getWorkshopDetails(workshopId);

  if (!details || details.result !== 1) {
    throw new Error('Workshop item not found. It may be private or deleted.');
  }

  const fileUrl = `https://steamcommunity.com/sharedfiles/filedetails/?id=${workshopId}`;
  const thumbnail = details.preview_url || null;
  const sizeMB = details.file_size ? (details.file_size / 1024 / 1024).toFixed(2) + ' MB' : 'Unknown';
  const creatorProfile = `https://steamcommunity.com/profiles/${details.creator}`;

  
  const description = `
**Description:**
${cleanUpDescription(details.description || 'No description available.').slice(0, 1024)}


**Additional Info:**
- **Size:** ${sizeMB}
- **Creator:** [View Profile](${creatorProfile})
- **Views:** ${details.views || 0}
`;

  const embed = new EmbedBuilder()
    .setColor(0x1b2838)
    .setTitle(details.title || 'Untitled')
    .setURL(fileUrl)
    .setDescription(description)
    .setThumbnail(thumbnail)
    .setFooter({ text: 'Steam Workshop', iconURL: 'https://store.cloudflare.steamstatic.com/public/shared/images/header/globalheader_logo.png' })
    .setTimestamp(new Date(details.time_updated * 1000));

  return embed;
}

module.exports = {
  createWorkshopEmbed
};

function cleanUpDescription(text) {
  if (!text) return 'No description available.';

  // Convert [url=https://link]Label[/url] to [Label](https://link)
  text = text.replace(/\[url=(https?:\/\/[^\]]+)\](.*?)\[\/url\]/gi, (_, url, label) => {
    return `[${label}](${url})`;
  });

  // Strip ALL BBCode-like tags including [b], [i], [h1], etc.
  text = text.replace(/\[\/?(?:b|i|u|quote|img|color|size|center|font|h[1-6])(?:=[^\]]*)?\]/gi, '');


  // Wrap raw URLs in < > to make them clickable in Discord
  text = text.replace(/(?<!\]\()(?<!href=")(https?:\/\/[^\s]+)/gi, '<$1>');

  return text;
}
