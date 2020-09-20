const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new discord.MessageEmbed()
            .setTitle("BanaanHosting | Help")
            .setDescription("**General Commands**\n!help - toon het help bericht\n!sps - speel steen papier schaar\n!covid - zie de corona status\n!meme - krijg meme's op je beeldscherm\n!leden - zie hoeveel leden er in de discord zitten\n!ping - zie jou ping\n!review - plaats een review\n!serverinfo - zie de serverinfo\n!ticket - maak een ticket\n\n**Admin Commands**\n!ban - ban een speler\n!kick - kick een speler\n!mute - mute een speler\n!warn - warn een speler\n!clear - clear een channel\n!melding - plaats een melding\n!giveaway - maak een giveaway\n!tempmute - mute een speler voor een paar minuten\n!close - sluit een ticket")
            .setColor("#kleur")

        return message.channel.send(serverEmbed);

}

module.exports.help = {
    name: "use"
}
