module.exports = {
    name: 'link',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Link')
        .addFields(
            { name: 'Discord', value: '[Link 1](https://discord.com/invite/RyZsavrFEw) or [Link 2](https://discord.gg/magerpol)'},
            { name: 'BOT', value: '[Magerpol](https://discord.com/api/oauth2/authorize?client_id=853507179478384651&permissions=8&scope=bot)'},
        )
        .setTimestamp()   
        message.channel.send(newEmbed);
    }
}