module.exports = {
    name: 'ps1',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle("`ID` `Server Magerpol` `ID`")
        .setImage("https://cdn.discordapp.com/attachments/853661065933881394/856474723188867112/Magerpol.gif")
        .addFields(
            {name: 'Rules', value: 'Server Magerpol mempunya 4 Fraksi yang dimana kamu bisa memilih salah 1 dari pilihan tersebut, kamu bisa berpindah Fraksi sesuai dengan yang di inginkan.'},
            {name: 'Halo <:blurplestar_magerpol:853602487365140481>', value: 'Say Hello jika sudah bergabung, agar kamu kenal dengan semua member disini.', inline: true},
            {name: 'Reaksi Emoji <:blurpleticket_magerpol:853602487743021067>', value: 'Reaksi emoji sangat perlu untuk Feedback.', inline: true},
            {name: 'Ramah <:blurplemembers_magerpol:853602485973418005>', value: 'Jangan sungkan untuk bertanya-tanya, karena kami ingin membuat Server Discord yang ramah.'},
            {name: 'Owner <:blurplerules_magerpol:853602487016751125>', value: '<@573453482707779584>', inline: true},
            {name: 'Owner 2 <:blurplerules_magerpol:853602487016751125>', value: '<@447411230098063362>', inline: true},
            )
        message.channel.send(newEmbed);
    }
}