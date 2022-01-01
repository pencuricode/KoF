const Discord = require('discord.js');
const moment = require('moment');

const bot = new Discord.Client();
const client = new Discord.Client();

const token = "OTI2NTAzOTc0NzQyNDA5MjQ2.Yc8oEQ.S6x8ewpsAAzQxEnX2bevu5z4ZnY"
const PREFIX = ","

const fs = require('fs')
const { version } = require('os')

bot.commands = new Discord.Collection()

//summon-start
const welcome = require("./auto/welcome");
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    bot.commands.set(command.name, command)}
//summon-end
    
//Online-start
bot.on('ready', () => {
    console.log(`Bot ${bot.user.tag} On!`);
    bot.user.setActivity(',help | for information');
    welcome(client);
});
client.on("ready", () => {
    console.log(`Client ${client.user.tag} On!`);
  });
//online-end

//SendMessagejoin-Start
bot.on('guildMemberAdd', member => {
    member.send(
        {embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    description: `Selamat Datang ${member}, Server siapa pun dapat bergabung tanpa batasan apa pun, kamu akan mendapatkan teman dengan berbagai macam, Server tempat Anda bisa bersenang-senang dan mendapatkan teman baru.`,
    thumbnail : {
      url: member.user.avatarURL(),
    },
    image: {
      url: "https://c.tenor.com/cehm5654j8EAAAAC/hu-tao-genshin.gif"
    },
    fields: [
      {name: "New Member", value: member, inline: true},
      {name: "Total Member", value: member.guild.memberCount, inline: true},
      {name: "Bot Developer", value: "Butuh belajar cara membuat bot, contact Kaixin#5925."},
      {name: "Create Discord", value: moment(member.user.createdAt).format('D/M/YYYY'), inline: true},
      {name: "Join Knights of Favonius", value: moment(member.joinedAt).format('D/M/YYYY'), inline: true},
  ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "discord.gg/magerpol"
    }
    }}
)
});
//SendMessagejoin-End

//SendMessageleave-Start
bot.on('guildMemberRemove', member => {
    member.send(
        {embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL()
    },
    description: `We are happy to welcome you back on this Server Knights of Favonius. See you again, I hope you are well there.`,
    thumbnail : {
      url: member.user.avatarURL(),
    },
    image: {
      url: "https://cdn.discordapp.com/attachments/809748093779050538/855157443155722280/announcements-1-1_gif.gif"
    },
    fields: [
      {name: "Member Leave", value: member, inline: true},
      {name: "Total Member", value: member.guild.memberCount, inline: true},
  ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL(),
      text: "Knights of Favonius"
    }
    }}
)
});
//SendMessageleave-End

//prefix-start
bot.on('message', message => {

    if(message.content === 'cok') {
        message.channel.send('Eyy bro ${message.author} jangan toxic dong!')
        }

    let args = message.content.substring(PREFIX.length).split(" ");
        switch (args[0]) {

            case "help":
                bot.commands.get('help').execute(message, args, Discord);
            break;

//help
case "link":
  bot.commands.get('link').execute(message, args, Discord);
break;

case "recruit":
  bot.commands.get('recruit').execute(message, args, Discord);
break;

case "clone":
  bot.commands.get('clone').execute(message, args, Discord);
break;

case "pages":
  bot.commands.get('pages').execute(client, message, args);
break;

case "kai":
  bot.commands.get('kai').execute(message, args, Discord);
break;

case "owner":
  bot.commands.get('owner').execute(message, args, Discord);
break;

//embed-start
case "rules-eng":
  bot.commands.get('rules-eng').execute(message, args, Discord);
break;

case "rules-id":
  bot.commands.get('rules-id').execute(message, args, Discord);
break;
//embed-end

//partnership-start
case "rules":
  bot.commands.get('rules').execute(message, args, Discord);
break;
case "ps2":
bot.commands.get('ps2').execute(message, args, Discord);
break;
//partnership-end
            }
        }
        );
//prefix-end

bot.login(token);
client.login(token);


//SEMANGAT DAN JANGAN LUPA NGOPIIII ;)