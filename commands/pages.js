const { PaginatedEmbed } = require('embed-paginator');

module.exports = {
    name: 'pages',
    description: "says link!",
    execute(client, message, args){

        const embed = new PaginatedEmbed({
            colours: ['RANDOM', '#c21b15'],
            descriptions: [
                'palepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepale',
                'palepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepale',
                'palepalepalepalepalepalepalepalepalepalepalepalepalepalepalepale',
                'palepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepalepale'
            ],
            fields: [
                { name: '1',  value: '11', inline: true },
                { name: '1', value: '11', inline: true }
            ],
            duration: 60 * 1000, // in milliseconds
            itemsPerPage: 1,
            paginationType: 'description'
        })

            .setThumbnail(client.user.avatarURL())
            .setTimestamp()
            .setTitle('OPEN RECRUITMENT');
    
            embed.send(message.channel, 'a test message to go along with the embed');

    }
}
