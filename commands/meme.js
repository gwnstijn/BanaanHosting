const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
 
module.exports.run = async (client, message, args) => {
 
    const subReddits = ["dankmeme", "meme", "memes"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const img = await randomPuppy(random);

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(img)
    .setTitle(`Your meme sir :)`)
    .setURL(`https://reddit.com/r/${random}`)
    .setFooter('StormBot#2624 » Coded By: Stijn');

    message.channel.send(embed);
 
}
 
module.exports.help = {
    name: "meme"
}