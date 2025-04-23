module.exports = (client) => {
  client.on('messageCreate', message => {
    if (message.author.bot) return;

    const lowerMessage = message.content.toLowerCase();

    if (lowerMessage.includes('crack')) {
      const { EmbedBuilder } = require('discord.js');

      const embed = new EmbedBuilder()
        .setDescription('Crack???')
        .setImage('https://cdn.discordapp.com/attachments/1364157310183673876/1364168376297197578/baldwin.png');

      message.channel.send({ embeds: [embed] });
    }
  });
};
