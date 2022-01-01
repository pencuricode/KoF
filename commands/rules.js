module.exports = {
    name: 'rules',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle("`ID` `Knights of Favonius` `ID`")
        .setImage("https://c.tenor.com/JwTTqT7X8UYAAAAC/hutao-hu-tao-gnehsin.gif")
        .addFields(
            {name: 'Rules', value: 'dilarang Sara,Rasis kita disini sama rata semua tidak ada yang special di Discord Server, saya harap pengertiannya.'},
            {name: 'Halo :wave:', value: 'Say Hello jika sudah bergabung, agar kamu kenal dengan semua member disini.', inline: true},
            {name: 'Reaksi Emoji :thumbsup:', value: 'Reaksi emoji sangat perlu untuk Feedback.', inline: true},
            {name: 'Ramah :smiling_face_with_3_hearts:', value: 'Jangan sungkan untuk bertanya-tanya, karena kami ingin membuat Server Discord yang ramah.'}
            )
        message.channel.send(newEmbed);
    }
}