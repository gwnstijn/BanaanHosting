const discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
 
    // !announcement titel | bericht | kleur | kanaal.
 
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("you cannot do this");
 
    var seperator = "|";
 
    if (args[0] == null) {
        var embed = new discord.MessageEmbed()
            .setTitle(":books: Usage")
            .setColor("#0099ff")
            .setDescription(`Make a announcement using: \n !announcement title ${seperator} message ${seperator} channel`)
            .setFooter('BanaanHosting » Coded By: Stijn Jakobs');
 
        return message.reply(embed);
    }
 
    var argsList = args.join(" ").split(seperator);
 
    console.log(argsList);
 
    if (argsList[2] == undefined) argsList[2] = "#eeeeee";
    if (argsList[3] == undefined) argsList[3] = "general";
 
    var options = {
 
        titel: argsList[0],
        bericht: argsList[1] || "No content specified",
        kanaal: argsList[2].trim()
 
    }
 
    console.log(options);
 
    var announceEmbed = new discord.MessageEmbed()
        .setTitle(`${options.titel}`)
        .setColor("#0099ff")
        .setDescription(`${options.bericht}`)
        .setTimestamp()
        .setFooter('BanaanHosting');
 
    var channel = message.member.guild.channels.cache.find(channel => channel.name === options.kanaal);
    if (!channel) return message.reply("Channel does not exist");
 
    channel.send(announceEmbed);
 
}
 
module.exports.help = {
    name: "announcement"
}