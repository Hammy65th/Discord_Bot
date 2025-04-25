const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Rolls a d100'),
  async execute (interaction) {
    const roll = Math.floor(Math.random() * 100) +1;
    await interaction.reply(`You have rolled **${roll}**`);
  },
};