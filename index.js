const { Client, Events, SlashCommandBuilder, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const token = process.env.DISCORD_TOKEN
require('dotenv').config();
const imageResponder = require('./imageResponder');
const reactionHandler = require('./heroHandler')
const { createWorkshopEmbed } = require('./workshop/steamWorkshop');
const rollCommand = require('./roll');



const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.commands = new Map();
client.commands.set(rollCommand.data.name, rollCommand.execute);

client.once(Events.ClientReady, async c => {
  console.log(`Logged in as ${c.user.username}`);

  const king = new SlashCommandBuilder()
    .setName("king")
    .setDescription("Quote from Kingdom Of Heaven");

  const baldwin = new SlashCommandBuilder()
    .setName("baldwin")
    .setDescription("Quote from Kingdom Of Heaven");

  const jerusalem = new SlashCommandBuilder()
    .setName("jerusalem")
    .setDescription("Quote from Kingdom Of Heaven");

  const ping = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!");

  const workshop = new SlashCommandBuilder()
    .setName('workshop')
    .setDescription('Get info on a Steam Workshop item')
    .addStringOption(option => 
      option.setName('id')
        .setDescription('Steam Workshop item ID')
        .setRequired(true)
    );

  try {
    await c.application.commands.set([king, baldwin, jerusalem, ping, workshop,rollCommand.data]);
    console.log("Commands registered!");
  } catch (error) {
    console.error("Error registering commands:", error);
  }

  imageResponder(client);

  reactionHandler(client);
});

client.on(Events.InteractionCreate, async interaction => {
  
  const handler = client.commands.get(interaction.commandName);
  if (handler) return handler(interaction);

  
  if(interaction.commandName === "ping"){
     interaction.reply("Pong!")
  }
  if(interaction.commandName === "baldwin"){
    interaction.reply("Look at me. I am the leper king. I have lost more of my body than I can ever recover, but I have not lost my soul. Power is always best wielded by those who do not seek it. You have my admiration, Balian — and my kingdom, if you will have it.")
 }
 if(interaction.commandName === "jerusalem"){
  interaction.reply("I am Jerusalem. And I am at the end of my time. My body is gone, but my mind is still sharp. I see what others do not — ambition, pride, fear. I need someone who sees as I do, someone who does not crave power but would take it to protect the innocent.")
}
if(interaction.commandName === "king"){
  interaction.reply("You see no weakness in me, do you? You see a mask. You see a king. You see what I allow you to see. But underneath… I am rotting. And still, I must rule — wisely. Justly. Because the people of Jerusalem deserve more than a dying man.")
}
if (interaction.commandName === "workshop") {
  const id = interaction.options.getString("id");
  await interaction.deferReply();
  try {
    const embed = await createWorkshopEmbed(id);
    await interaction.editReply({embeds: [embed]});
  } catch (err) {
    console.error(err);
    await interaction.editReply("Could not fetch the workship item. Please check the ID.")
  }
}
 
});

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return;

  if (
    message.guild &&
    message.guild.id === '1330350140606779545'
  ) {
    const lowerContent = message.content.toLowerCase();

    // Define valid trigger phrases
    const gmTriggers = ['gm', 'good morning', 'morning', 'g m', 'Gm', 'good miku', 'Good Miku', 'salutetons'];

    // Check if message matches any trigger exactly
    if (gmTriggers.includes(lowerContent)) {
      message.reply("Good Miku");
    }
  }
});


// client.on(Events.MessageCreate, (message) => {

//   if (message.author.bot) return;

//   if (message.mentions.has(client.user)) {
//     message.reply({
//       content: `${message.author} :)`,
//       files: ['https://tenor.com/view/cat-stupid-slobber-the-bluetooth-device-is-ready-to-pair-gif-17323072743601828847']
//     });
//   }
// });



client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return;

  if (message.mentions.has(client.user)) {
    const embed = new EmbedBuilder()
      .setImage('https://tenor.com/view/cat-stupid-slobber-the-bluetooth-device-is-ready-to-pair-gif-17323072743601828847') // Replace with actual direct gif URL
      .setColor(0x00AE86);

    message.reply({
      content: `${message.author}`,
      embeds: [embed]
    });
  }
});

client.login(token);

