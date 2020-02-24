function run(msg, args, config) {
    let responses = [
        "Yeah, I'm Up.",
        "Nope, still not Down.",
        "I'm feeling a bit Strange, but I'm here.",
        "I love your Charm typing that command.",
        "If you scroll to the Bottom you'll see I'm still here.",
        "I'm all the way on Top of the user list."
    ]
    msg.reply(responses[Math.floor(Math.random() * responses.length)]);
}

function help() {
    return "Responds when the bot is up and running!";
}

module.exports = {
    run: run,
    help: help
}