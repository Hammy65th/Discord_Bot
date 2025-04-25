//267308620058853376 | Hammy

//399246587882373152 | Hero
//316234162182815755 | Alpaca
//236962814239965184 | Aug
//378256488751431680 | Miiller

module.exports = (client) => {
  const targetUserReactions ={ 
    '399246587882373152' : '<:yappingyap:1364314235357630564>',  // Hero
    '316234162182815755' : '🥰', // Alpaca
    '236962814239965184' : '<:Gjob:1364312133273387118>', // Aug
    '378256488751431680' : '<:hero:1364172567585230869>' // Miiller
  };

  client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    const reactionEmoji = targetUserReactions[message.author.id];

    if (reactionEmoji) {
      message.react(reactionEmoji)
        .then(() => console.log(`Reacted to message from ${message.author.tag}`))
        .catch((error) => console.error('Error reacting to message:', error));
    }
  });
};