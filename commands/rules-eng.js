module.exports = {
    name: 'rules-eng',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle("`EN` `English Language` `EN`")
        .setImage("https://cdn.discordapp.com/attachments/809748093779050538/855157443155722280/announcements-1-1_gif.gif")
        .addFields(
            {name: 'Rules', value: 'This Discord has the same terms and rules as *https://discordapp.com/guidelines* & *https://discordapp.com/ToS*. The Knights of Favonius server.'},
            {name: 'Hello', value: 'Say Hello if you have joined, so that you get to know all the members here.', inline: true},
            {name: 'Reaction', value: 'Reaction Emoticons are very necessary for Feedback.', inline: true},
            {name: 'Help', value: 'If you need help can send a message to the Moderator.'},
            {name: 'Friendly', value: 'Feel free to ask questions, because we want to create a friendly Discord Server.', inline: true},
            )
        message.channel.send(newEmbed);
    }
}