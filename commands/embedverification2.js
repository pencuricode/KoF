module.exports = {
    name: 'embedverification2',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle("`ID` `Bahasa Indonesia` `ID`")
        .setImage("https://cdn.discordapp.com/attachments/809748093779050538/855157443155722280/announcements-1-1_gif.gif")
        .addFields(
            {name: 'Aturan', value: 'Discord ini memiliki ketentuan dan aturan yang sama seperti *https://discordapp.com/guidelines* & *https://discordapp.com/ToS*. Server Magerpol mempunya 4 Fraksi yang dimana kamu bisa memilih salah 1 dari pilihan tersebut, kamu bisa berpindah Fraksi sesuai dengan yang di inginkan.'},
            {name: 'Halo <:blurplestar_magerpol:853602487365140481>', value: 'Say Hello jika sudah bergabung, agar kamu kenal dengan semua member disini.', inline: true},
            {name: 'Reaksi Emoji <:blurpleticket_magerpol:853602487743021067>', value: 'Reaksi emoji sangat perlu untuk Feedback.', inline: true},
            {name: 'Bantuan <:blurplesettings_magerpol:853602487193305119>', value: 'Jika kamu butuh bantuan bisa kirim pesan ke Moderator'},
            {name: 'Ramah <:blurplemembers_magerpol:853602485973418005>', value: 'Jangan sungkan untuk bertanya-tanya, karena kami ingin membuat Server Discord yang ramah.', inline: true},
            {name: 'Setuju <:blurplerules_magerpol:853602487016751125>', value: 'Verifikasi di bawah ini...', inline: true},
            )
        message.channel.send(newEmbed);
    }
}