//399246587882373152 | Hero
//267308620058853376 | Hammy
//316234162182815755 | Alpaca
//236962814239965184 | Aug

module.exports = (client) => {
  const targetUserReactions ={ 
    '399246587882373152' : '<:yappingyap:1364314235357630564>',  
    '316234162182815755' : '🥰',
    '236962814239965184' : '<:Gjob:1364312133273387118>',
    '378256488751431680' : '<:hero:1364172567585230869>'
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