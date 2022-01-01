module.exports = {
    name: 'partnership',
    description: "Embed!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setTitle('Open Partnership')
        .setImage('')
        .addFields(
            {name: 'Rules', value: 'Wajib mempunyai channel <#856041521916936222>. Bagi Server yang akan ber-partner di haruskan 1 orang untuk perwakilan.'},
            {name: 'Role', value: 'Partnership akan mendapatkan role <@&856044582646448168>, agar mudah untuk pengecekan secara berkala.'},
            {name: 'Minat', value: 'Harga? Free! Anda bisa menghubungi <@&852747727909683271>'},
            )
        .setTimestamp()
        .setFooter('discord.gg/magerpol');
        message.channel.send(newEmbed);
    }
}