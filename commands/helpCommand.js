module.exports = {
	name: 'help',
	execute(message, args, H4r1ey, Discord) {
		if(H4r1ey.config.customConfig.deleteCommands) {
			message.delete();
		}

		const embed3 = new Discord.MessageEmbed()
		.setTitle("Harley's Moderation Bot")
		.setColor(H4r1ey.config.customConfig.hexID)
		.setDescription(`**Usage:**\n\`\`\`PREFIX | COMMAND | USER\`\`\`\n\n\**Commands:**\n\n\`ban [user]\`\n\`clear [amount]\`\n\`commend [user]\`\n\`kick [user]\`\n\`mute [user]\`\n\`unmute [user]\`\n\`warn [user]\``)
        .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)

        message.channel.send({ embeds: [embed3] })


	}
}