// SupportBot
// Command: Help

const Discord = require("discord.js");
const bot = new Discord.Client()

bot.settings = require("../settings.json");

exports.run = (bot, message, args) => {
    message.delete();

    let userCommands = "";
        userCommands += `**${bot.settings.prefix}${bot.settings.Link_Command}**: Get some important links!\n`;
        userCommands += `**${bot.settings.prefix}${bot.settings.Ping_Command}**: Check the bots ping. Pong!\n`;
	    userCommands += `**${bot.settings.prefix}${bot.settings.Ticket_Command} <reason>**: Create a support ticket\n`;
        userCommands += `**${bot.settings.prefix}${bot.settings.Close_Command}**: Close your support ticket\n`;
        userCommands += `**${bot.settings.prefix}${bot.settings.Suggest_Command} <suggestion>**: Create a server suggestion\n`;
	
    let supportCommands = "";
	    supportCommands += `**${bot.settings.prefix}${bot.settings.Add_Command} <user>**: Adds a user to a ticket\n`;
        supportCommands += `**${bot.settings.prefix}${bot.settings.Remove_Command} <user>**: Removes a user from a ticket\n`;
        supportCommands += `**${bot.settings.prefix}${bot.settings.Forceclose_Command}**: Forceclose a support ticket\n`;
		supportCommands += `**${bot.settings.prefix}${bot.settings.Rename_Command}**: Rename a support ticket\n`;

        let staffCommands = "";
        staffCommands += `**${bot.settings.prefix}${bot.settings.Say_Command} <message>**: Create a bot announcement\n`;
        staffCommands += `**${bot.settings.prefix}${bot.settings.Lockchat_Command}**: Lock the chat channel\n`;
        staffCommands += `**${bot.settings.prefix}${bot.settings.UnLockchat_Command}**: UnLock the chat channel\n`;

    const embed = new Discord.RichEmbed()
        .setTitle(bot.settings.botname)
        .addField(":ticket: Support Commands", userCommands)
        .addField(":pushpin: Support Commands", supportCommands, true)
        .addField(":pushpin: Staff Commands", staffCommands, true)
        .setColor(bot.settings.colour)
        .setFooter(bot.settings.footer, message.author.displayAvatarURL);

	message.channel.send(embed)

    console.log(`\x1b[36m`, `${message.author} has executed ${bot.settings.prefix}${bot.settings.Help_Command}`)

}

exports.help = {
    name: bot.settings.Help_Command,
}