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
        .setDescription('I Love the Empire!')
        .setImage('https://media.discordapp.net/attachments/898721337500131379/933556539099336754/IMG_5949.gif?ex=68240747&is=6822b5c7&hm=9f7d9f90e5e71e6eda6207de86a4cb6ef3fbd291588e4cdfaa4bbef7baea9f03&');
      message.channel.send({ embeds: [embed] });
    }


    if (lowerMessage.includes('isb')) {
      const { EmbedBuilder } = require('discord.js');

      const embed = new EmbedBuilder()
        .setDescription('# **Redacted**')
        .setImage('https://cdn.discordapp.com/attachments/881570218017701888/1368989045694140416/caption.gif?ex=68241d27&is=6822cba7&hm=15d74544753892ad3d86d78fb4f9539a12ca06ee7af107a7d8a84619cd940b2a&');
      message.channel.send({ embeds: [embed] });
    }

    if (
      lowerMessage.includes('rapid rescue') ||
      lowerMessage.includes('rapidrescue') ||
      lowerMessage.includes('rapidlyrescued') ||
      lowerMessage.includes('rapidly rescued') ||
      lowerMessage.includes('https://cdn.discordapp.com/attachments/881570218017701888/1369031131848114310/caption.gif?ex=68244459&is=6822f2d9&hm=2d5ec0d3493608c8b81658cb2ff3df673dd0cfa0cc54108c3a7c05a53197233d&')
    ) {
      const { EmbedBuilder } = require('discord.js');

      const embed = new EmbedBuilder()
        .setDescription(null)
        .setImage('https://cdn.discordapp.com/attachments/881570218017701888/1369031131848114310/caption.gif?ex=68244459&is=6822f2d9&hm=2d5ec0d3493608c8b81658cb2ff3df673dd0cfa0cc54108c3a7c05a53197233d&');
      message.channel.send({ embeds: [embed] });
    }

    if (
      lowerMessage.includes('The Incident') ||
      lowerMessage.includes('the incident') ||
      lowerMessage.includes('pissboy') ||
      lowerMessage.includes('piss boy') ||
      lowerMessage.includes('Piss boy') ||
      lowerMessage.includes('Pissboy')
    ) {
      const { EmbedBuilder } = require('discord.js');

      const embed = new EmbedBuilder()
        .setDescription('Pissboy?')
        .setImage('https://cdn.discordapp.com/attachments/478933448715927563/1370121217440354434/unknown.png?ex=68244711&is=6822f591&hm=2cfeb3153d4d66c014bdd6890891761488de6b628aeb69f1bccbab49b3d6258a&');
      message.channel.send({ embeds: [embed] });
    }
  });
};
