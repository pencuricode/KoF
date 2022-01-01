module.exports = {
    name: 'help',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('🚨 Information Knights of Favonius 🚨')
        .setDescription('Anda bisa menggunakan Command di bawah ini untuk mengetahui informasi selanjutnya!\nPrefix KoF:- `,` \n༺═─────────────═༻.')
        .addFields(
            { name: '📒 Rules Eng', value: '`,rules-eng`',  inline: true },
            { name: '📒 Rules Discord', value: '`,rules`',  inline: true },
            { name: '🔗 Bot Kaixin', value: '`,kai`', inline: true}
        )
        .setTimestamp()
        .setImage("https://c.tenor.com/JwTTqT7X8UYAAAAC/hutao-hu-tao-gnehsin.gif")
        .setFooter('Knights of Favonius');

        message.channel.send(newEmbed);
    }
}

