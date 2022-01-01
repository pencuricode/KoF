module.exports = {
    name: 'kai',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Magerpol Vote Information')
        .setImage("https://c.tenor.com/lUJr99V89rgAAAAd/hu-tao.gif")
        .addFields(
            { name: ':link: **Invite Bot:-**', value: 'https://discord.com/oauth2/authorize?client_id=904032472755499099&permissions=327558298918&scope=bot'},
        )
        .setFooter('Knights of Favonius')
        .setTimestamp()   
        message.channel.send(newEmbed);
    }
}