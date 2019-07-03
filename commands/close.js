// SupportBot
// Command: Close Ticket

const Discord = require("discord.js");
const bot = new Discord.Client()

bot.settings = require("../settings.json");

exports.run = (bot, message, args) => {
    message.delete();

    const outsideticket = new Discord.RichEmbed()
    .setDescription(`:x: Cannot use this command becase you are outside a ticket channel.`)
    .setColor(bot.settings.colour) 
if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send({embed: outsideticket});
const close1 = new Discord.RichEmbed()
    .setDescription(`Looks like you have come to the end of your support ticket\nPlease confirm that you want to close your ticket by saying ||**confirm**||`)
    .setFooter("Your request will be avoided in 20 seconds")
    .setColor(bot.settings.colour)
message.channel.send({embed: close1}).then(m => {
    message.channel.awaitMessages(response => response.content === `confirm`, {
        max: 1,
        time: 10000,
        errors: ['time'],

    }).then((collected) => {
        message.channel.delete();

    }).catch(() => {
        m.edit('Close ticket request, timedout').then(m2 => {
        m2.delete();
    }, 3000);

    });
});

console.log(`\x1b[36m`, `${message.author} has executed ${bot.settings.prefix}${bot.settings.Close_Command}`)

}

exports.help = {
    name: bot.settings.Close_Command,
}