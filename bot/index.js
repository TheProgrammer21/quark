const Discord = require('discord.js');
const client = new Discord.Client();
const configManager = require('./configManager');

// require commands
var command = {
    ping: require('./commands/ping'),
    prefix: require('./commands/prefix')
}

var splitRegex = /[^\s"']+|"([^"]*)"|'([^']*)'/g; // Regex to split at every space not surrounded by " or '

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    let config = configManager.getConfig(msg);
    if (msg.content.startsWith(config.prefix)) {
        executeCommand(msg.content.substring(config.prefix.length), msg, config);
    }
});

function executeCommand(text, msg, config) {
    text = text.match(splitRegex);
    cmd = command[text[0]];

    if (cmd === undefined) {
        unknownCommand(msg, config);
    } else {
        cmd.run(msg, text, config);
    }
}

function unknownCommand(msg, config) {
    msg.reply("This command is not known! Try " + config.prefix + "help to display known commands!");
}

client.login(process.env.discordToken);