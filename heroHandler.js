//267308620058853376 | Hammy

//423624830479499264 | Niceguy
//399246587882373152 | Hero
//316234162182815755 | Alpaca
//236962814239965184 | Aug
//378256488751431680 | Miiller
//662400113708236800 | Jack

module.exports = (client) => {
  const targetUserReactions ={ 
    '399246587882373152' : '<:yappingyap:1364314235357630564>',  // Hero
    '316234162182815755' : '🥰', // Alpaca
    '236962814239965184' : '<:boobs:1371851534769328159>', // Aug
    '378256488751431680' : '<:hero:1364172567585230869>', // Miiller
    '423624830479499264' : '<:fur:1371843296963592223>', // Niceguy
    '662400113708236800' : '<:ISB_reaction:1371846466913566771>', // Jack
    '317275024849633281' : '<:Gjob:1364312133273387118>', // Luna
    '548604174976417808' : '<:gay:1371852414239506472>', // Free
  };

  client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    const reactionEmoji = targetUserReactions[message.author.id];

    if (reactionEmoji) {
      message.react(reactionEmoji)
        .then(() => {
          const guildName = message.guild ? message.guild.name : 'DM or unknown';
          console.log(`Reacted to ${message.author.tag} in server: ${guildName}`);
        })
        .catch((error) => console.error('Error reacting to message:', error));
    }
  });
};