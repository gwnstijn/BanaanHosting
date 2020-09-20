const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setDescription("Gebruik **!ticket** om een ticket te maken!\nals dat niet werkt neem contact op!")
            .setColor("#kleur")

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "use"
}