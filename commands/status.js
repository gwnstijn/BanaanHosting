const discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
 
    var botEmbed = new discord.MessageEmbed()
    .setTitle("")
    .setDescription("**Panel & Web Status**\n\n**BanaanHosting Websites**\n:white_check_mark: Website\n:white_check_mark: Client Area\n\n**Nodes**\n:x: Node01\n:x: Node02\n\n**Daemons**\n:x: Node01 Daemon\n:x: Node02 Daemon")
    .setColor("#0099ff")

    .setTimestamp()
    .setFooter('BanaanHosting');

return message.channel.send(botEmbed);
 
}
 
module.exports.help = {
    name: "status"
}