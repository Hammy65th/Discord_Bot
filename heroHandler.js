//399246587882373152 | Hero
//267308620058853376 | Hammy

module.exports = (client) => {
  const targetUserId = '399246587882373152';

  const reactionEmojii = '<:hero:1364172567585230869>'

  client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.author.id === targetUserId) {
      message.react(reactionEmojii)
      .then(() => console.log(`Reacted to message from ${message.author.tag}`))
      .catch((error) => console.error('Error reacting to message:', error))
    }
  });
};;