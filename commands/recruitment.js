module.exports = {
    name: 'recruitment',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Open Recruitment')
        .setImage('https://cdn.discordapp.com/attachments/813109287420821515/853154795803246662/ezgif.com-gif-maker_1.gif')
        .addFields(
            {name: 'Staff Setiap Fraksi', value: 'Memeriksa serta memastikan terhadap seluruh member agar mengikuti aturan dan ketentuan di Server ini.'},
            {name: 'Staff Emoji', value: 'Mendata, mengecek, memonitor & mengupload emoji yang ada di Server ini.'},
            {name: 'Berminat?', value: 'Anda bisa menghubungi <@&852747727909683271>'},
            )
        .setTimestamp()
        .setFooter('discord.gg/magerpol');
        message.channel.send(newEmbed);
    }
}