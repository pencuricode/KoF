module.exports = {
    name: 'help',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('šØ Information Knights of Favonius šØ')
        .setDescription('Anda bisa menggunakan Command di bawah ini untuk mengetahui informasi selanjutnya!\nPrefix KoF:- `,` \ną¼ŗāāāāāāāāāāāāāāāą¼».')
        .addFields(
            { name: 'š Rules Eng', value: '`,rules-eng`',  inline: true },
            { name: 'š Rules Discord', value: '`,rules`',  inline: true },
            { name: 'š Bot Kaixin', value: '`,kai`', inline: true}
        )
        .setTimestamp()
        .setImage("https://c.tenor.com/JwTTqT7X8UYAAAAC/hutao-hu-tao-gnehsin.gif")
        .setFooter('Knights of Favonius');

        message.channel.send(newEmbed);
    }
}

