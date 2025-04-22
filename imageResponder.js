module.exports = (client) => {
  client.on ('messageCreate', message => {

    if (message.author.bot) return;

    const lowerMessage = message.content.toLowerCase();

    if (lowerMessage.includes('crack')) {
      message.channel.send({
        content: "Crack???",
        files: ['https://cdn.discordapp.com/attachments/1364157310183673876/1364168376297197578/baldwin.png?ex=6808b04d&is=68075ecd&hm=2f4e376773f151377cee919dfd1116a8da8d3b8776ca0b6d764ffedb9488a987&'],
      });
    }
  })
}

