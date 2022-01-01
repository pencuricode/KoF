module.exports = (client) => {
  //welcom embed tag nama-start
  const moment = require('moment');
    client.on('guildMemberAdd', member => {
        member.guild.channels.cache.get('926530150575775835').send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL()
        },
        description: `Selamat datang di Knights of Favonius <#905820124987138148> sapalah teman anda di chat.`,
        thumbnail : {
          url: member.user.avatarURL(),
        },
        image: {
          url: "https://cdn.discordapp.com/attachments/809748093779050538/855157443155722280/announcements-1-1_gif.gif"
        },
        fields: [
          {name: "Member Baru", value: member, inline: true},
          {name: "Akun Discord", value: moment(member.user.createdAt).format('D/M/YYYY'), inline: true},
      ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL(),
          text: "Knights of Favonius"
        }
        }}); 
  });
  //welcom embed tag nama-end
  };