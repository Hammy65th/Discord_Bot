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

    if (lowerMessage.includes('gmod')) {
      const { EmbedBuilder } = require('discord.js');

      const embed = new EmbedBuilder()
        .setDescription('')
        .setImage('https://media.discordapp.net/attachments/980122472605155378/1226928660280377364/caption.gif?ex=680c5e1b&is=680b0c9b&hm=c3b5eeef61562de7c96a550c3aa09fee6d1c794d65f376936ec42b2882c0702b&');
      message.channel.send({ embeds: [embed] });
    }
  });
};
