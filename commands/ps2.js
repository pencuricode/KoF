module.exports = {
    name: 'ps2',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle("Server Ampas Broadcast")
        .setImage("https://cdn.discordapp.com/attachments/809748093779050538/855157443155722280/announcements-1-1_gif.gif")
        .setThumbnail("https://cdn.discordapp.com/icons/853178623367446538/a_409e1d13728a77dbbaa3b38128da37c9.png?size=128")
        .addFields(
            {name: 'Tentang Server', value: 'Server khusus gamer, tapi bisa juga buat nonky-nongky yakan, Channelnya gabanyak tpi lengkap. Nama blom tetap msih bisa berubah, server juga baru setengah jadi.'},
            {name: 'Owner <:blurplestar_magerpol:853602487365140481>', value: '<@815868524529713173>', inline: true},
            {name: 'Note <:blurpleticket_magerpol:853602487743021067>', value: 'Open Moderator', inline: true},
            )
        message.channel.send(newEmbed);
    }
}