module.exports = {
    name: 'embedverification',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle("`EN` `English Language` `EN`")
        .setImage("https://cdn.discordapp.com/attachments/809748093779050538/855157443155722280/announcements-1-1_gif.gif")
        .addFields(
            {name: 'Rules', value: 'This Discord has the same terms and rules as *https://discordapp.com/guidelines* & *https://discordapp.com/ToS*. The Magerpol server has 4 Factions where you can choose one of these options, you can switch Factions according to what you want.'},
            {name: 'Hello <:blurplestar_magerpol:853602487365140481>', value: 'Say Hello if you have joined, so that you get to know all the members here.', inline: true},
            {name: 'Reaction <:blurpleticket_magerpol:853602487743021067>', value: 'Reaction Emoticons are very necessary for Feedback.', inline: true},
            {name: 'Help <:blurplesettings_magerpol:853602487193305119>', value: 'If you need help can send a message to the Moderator.'},
            {name: 'Friendly <:blurplemembers_magerpol:853602485973418005>', value: 'Feel free to ask questions, because we want to create a friendly Discord Server.', inline: true},
            {name: 'Agree <:blurplerules_magerpol:853602487016751125>', value: 'You verify below...', inline: true},
            )
        message.channel.send(newEmbed);
    }
}