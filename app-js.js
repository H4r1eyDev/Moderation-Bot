const Discord = require('discord.js')
const intents = require('discord.js')
const H4r1ey = new Discord.Client({
    intents: ['GUILDS', 'GUILD_MESSAGES', "GUILD_MESSAGE_REACTIONS", "DIRECT_MESSAGES", "GUILD_MEMBERS", "GUILD_BANS", "GUILD_INTEGRATIONS", "GUILD_WEBHOOKS", "GUILD_INVITES", "GUILD_VOICE_STATES", "GUILD_PRESENCES", "GUILD_MESSAGE_TYPING", "DIRECT_MESSAGE_REACTIONS", "DIRECT_MESSAGE_TYPING"],
    partials: ["CHANNEL", "MESSAGE", "REACTIONS"],
    allowedMentions: {
        parse: ['users', 'roles', 'everyone'],
        repliedUser: true
    }
});
H4r1ey.config = require('./configFiles/configSettings');
const BT = H4r1ey.config.botConfig.botToken;
const prefix = H4r1ey.config.botConfig.botPrefix;
const fs = require('fs');


H4r1ey.commands = new Discord.Collection();
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    H4r1ey.commands.set(command.name, command);
}

for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    if (event.once) {
        H4r1ey.once(event.name, (...args) => event.execute(...args, H4r1ey, Discord));
    } else {
        H4r1ey.on(event.name, (...args) => event.execute(...args, H4r1ey, Discord));
    }
}


H4r1ey.on("messageCreate", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if (message.author.bot) return;
    if (message.channel.type == 'dm') return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === 'warn') {
        H4r1ey.commands.get('warn').execute(message, args, H4r1ey, Discord);
    } else if (command === 'ban') {
        H4r1ey.commands.get('ban').execute(message, args, H4r1ey, Discord);
    } else if (command === 'kick') {
        H4r1ey.commands.get('kick').execute(message, args, H4r1ey, Discord);
    } else if (command === 'commend') {
        H4r1ey.commands.get('commend').execute(message, args, H4r1ey, Discord)
    } else if (command === 'clear') {
        H4r1ey.commands.get('clear').execute(message, args, H4r1ey, Discord);
    } else if (command === 'mute') {
        H4r1ey.commands.get('mute').execute(message, args, H4r1ey, Discord);
    } else if (command === 'unmute') {
        H4r1ey.commands.get('unmute').execute(message, args, H4r1ey, Discord);
    } else if (command === 'commands') {
    	H4r1ey.commands.get('commands').execute(message, args, H4r1ey, Discord)
    } else if (command === 'help') {
        H4r1ey.commands.get('help').execute(message, args, H4r1ey, Discord);
    } else if (command === 'say') {
        H4r1ey.commands.get('say').execute(message, args, H4r1ey, Discord);
    }
})

H4r1ey.on("ready", () => {
    console.log(`I have logged in as ${H4r1ey.user.tag}`)
})

H4r1ey.login(BT)