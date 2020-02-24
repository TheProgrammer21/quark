var configManager = require('../configManager');

function run(msg, args, config) {
    newPrefix = args[1];

    if (newPrefix === undefined) {
        msg.reply("You need to specify a new prefix!");
        return;
    }

    let successMessage = "New prefix ```" + newPrefix + "``` has been set!";

    configManager.writeConfig(msg, { prefix: newPrefix }, successMessage);
}

function help() {
    return "help";
}

module.exports = {
    run: run,
    help: help
}