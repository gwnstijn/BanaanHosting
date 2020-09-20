const discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
 
    var botEmbed = new discord.MessageEmbed()
    .setTitle("")
    .setDescription("**Prijzenlijst BanaanHosting**\n\n**Minecraft host HDD**\n:books: |  512 MB / 1 GB disk space I Free (Out of stock)\n:books: | 1 GB / 5 GB disk space |  FREE (Out of stock)\n\n**Minecraft host SSD**\n:books: | 512 MB / 1 GB disk space | €0.45 Maandelijks\n:books: | 1 GB / 2 GB disk space | €0,90 Maandelijks\n:books: | 2 GB / 4 GB disk space | €1,80 Maandelijks\n:books: | 3 GB / 6 GB disk space | €2,70 Maandelijks\n:books: | 4 GB / 8 GB disk space | €3,60 Maandelijks\n:books: | 10 GB / 20 GB disk space | €9,00 Maandelijks\n:books: | 15 GB / 30 GB disk space | €13,50 Maandelijks\n\n**Discord Bot Host**\n:robot: | 50 MB | €0,10 Maandelijks\n:robot: | 100 MB | €0,30 Maandelijks\n\n**Domeinnamen**\n:flag_nl: I .nl extentie I 3,50 Jaarlijks\n:flag_be: I .be extentie I 3.50 Jaarlijks\n:flag_eu: I .eu extentie I €4,50 Jaarlijks\n:flag_us: I .com extentie I €12,00 Jaarlijks\n:globe_with_meridians: I .net extentie I €16,50 Jaarlijks")
    .setColor("#0099ff")

    .setTimestamp()
    .setFooter('BanaanHosting');

return message.channel.send(botEmbed);
 
}
 
module.exports.help = {
    name: "prijzen"
}