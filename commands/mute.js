const discord = require("discord.js");
const ms = require("ms");
 
module.exports.run = async (client, message, args) => {
 
    // Video voor uitleg:
 
    // !tempmute gebruiker tijd(h,m,s)
 
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("you dont have perms for that");
 
    if (!args[0]) return message.reply("specify a person.");
 
    if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.reply("I need perms for that!");
 
    var mutePerson = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
 
    if (!mutePerson) return message.reply("Can find the user.");
 
    if (mutePerson.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry, you cant mute this person");
 
    var muteRole = message.guild.roles.cache.get('713038229645033502');
 
    if (!muteRole) return message.channel.send("the role Muted doesnt excist");
 
    var muteTime = args[1];
 
    if (!muteTime) return message.reply("you have to give a time");
 
    await (mutePerson.roles.add(muteRole.id));
    message.channel.send(`${mutePerson} got muted for ${muteTime}`);
 
    setTimeout(function () {
 
        mutePerson.roles.remove(muteRole.id);
   
        message.channel.send(`${mutePerson} is unmuted.`);
   
    }, ms(muteTime));
}
 
module.exports.help = {
    name: "mute"
}