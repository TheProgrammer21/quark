const fs = require('fs');

function getConfig(msg) {
    let serverId = msg.guild.id;

    let exists = fs.existsSync('./config/' + serverId + ".json")
    if (!exists) { // use default config
        name = "./config/default.json";
    } else {
        name = "./config/" + serverId + ".json";
    }

    return JSON.parse(fs.readFileSync(name).toString());
}

function writeConfig(msg, diff, successMessage) {
    let config = getConfig(msg);
    for (x in diff) {
        config[x] = diff[x];
    }
    fs.writeFile("./config/" + msg.guild.id + ".json", JSON.stringify(config), err => {
        if (err) {
            console.log("Error writing file");
            msg.reply("An error occured - try again!");
        } else {
            msg.reply(successMessage);
        }
    });
}

module.exports = {
    getConfig: getConfig,
    writeConfig: writeConfig
}