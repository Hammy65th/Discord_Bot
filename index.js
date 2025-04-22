const { Client, Events, SlashCommandBuilder, GatewayIntentBits } = require('discord.js');
const token = process.env.DISCORD_TOKEN
require('dotenv').config();
const imageResponder = require('./imageResponder');
const reactionHandler = require('./heroHandler')

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

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

  try {
    await c.application.commands.set([king, baldwin, jerusalem, ping]);
    console.log("Commands registered!");
  } catch (error) {
    console.error("Error registering commands:", error);
  }

  imageResponder(client);

  reactionHandler(client);
});

client.on(Events.InteractionCreate, interaction => {
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

 
});

client.on(Events.MessageCreate, (message) => {
  if (message.author.bot) return;

  if (
    message.guild &&
    message.guild.id === '1330350140606779545' && 
    message.content.toLowerCase() === "gm") {
    message.reply("Good Miku")
  }
})

client.on(Events.MessageCreate, (message) => {

  if (message.author.bot) return;

  if (message.mentions.has(client.user)) {
    message.reply({
      content: `${message.author} :)`,
      files: ['https://cdn.discordapp.com/attachments/1359147462941474888/1364207553159888946/efb55c899090fca66e7d810b5d1f47b6.png?ex=6808d4ca&is=6807834a&hm=c1244dcd897a360e7e280eedda7a152a1fdc2c105bbf02a4a34c563f24d8ccc7&']
    });
  }
});

client.login(token);

