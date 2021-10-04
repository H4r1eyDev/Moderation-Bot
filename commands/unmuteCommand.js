const chalk = require('chalk')

module.exports = {
    name: 'unmute',
    execute(message, args, H4r1ey, Discord) {

        const mutedRoleIDD = H4r1ey.config.customConfig.muteRoleID;

        if (H4r1ey.config.optionalSettings.logCommands) {
            const channel = H4r1ey.channels.cache.get(H4r1ey.config.loggingChannels.commandLoggingChannel);
            if (!channel) return console.log(chalk.red(`The channel ID set for the mute command is in-correct. Please re-config!`))
            const embed = new Discord.MessageEmbed()
                .setDescription(`**Log:**\n\`Command\`\n**Author:**\n\`${message.author.tag} - ${message.author.id}\`\n**Command:**\n\`UNMUTE\``)
                .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
                .setColor(H4r1ey.config.customConfig.hexID)
            channel.send({
                embeds: [embed]
            })
        } // end of command log


        const per = H4r1ey.config.permissionSetup.muteCommandPerms
        if (message.member.roles.cache.some(h => per.includes(h.id))) {

            if (H4r1ey.config.customConfig.deleteCommands) {
                message.delete()
            }

            const embed3 = new Discord.MessageEmbed()
                .setDescription(`<@${message.author.id}> You must provide a user!`)
                .setColor(H4r1ey.config.customConfig.hexID)

            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            if (!user) return message.channel.send({
                embeds: [embed3]
            })

            const embed4 = new Discord.MessageEmbed()
                .setDescription(`<@${message.author.id}> You cannot unmute yourself!`)
                .setColor(H4r1ey.config.customConfig.hexID)

            if (user == message.author.id) return message.channel.send({
                embeds: [embed4]
            })


            const embed5 = new Discord.MessageEmbed()
                .setDescription(`<@${message.author.id}> You cannot unmute the owner of the server!`)
                .setColor(H4r1ey.config.customConfig.hexID)

            if (user == message.guild.owner) return message.channel.send({
                embeds: [embed5]
            })

            const embed44 = new Discord.MessageEmbed()
                .setDescription(`<@${message.author.id}> You cannot unmute the bot!`)
                .setColor(H4r1ey.config.customConfig.hexID)

            if (user == H4r1ey.user.id) return message.channel.send({
                embeds: [embed44]
            })

            const embed559 = new Discord.MessageEmbed()
            .setDescription(`<@${message.author.id}> This user is not muted!`)
            .setColor(H4r1ey.config.customConfig.hexID)

            if (!user.roles.cache.has(mutedRoleIDD)) return message.channel.send({ embeds: [embed559 ]});

            const warnEmbed = new Discord.MessageEmbed()
            .setAuthor(`${message.author.tag} - ${message.author.id}`, message.author.displayAvatarURL({
                dynamic: true
            }))
            .setColor(H4r1ey.config.customConfig.hexID)
            .setThumbnail(user.user.displayAvatarURL({
                dynamic: true
            }))
            .setDescription(`**Member:** ${user.user.tag} - ${user.user.id}\n**Moderator:** ${message.author.tag} - ${message.author.id}\n**Action:** Unmute`)
            .setTimestamp()
            .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)

            message.channel.send({ embeds: [warnEmbed] })
            user.roles.remove(mutedRoleIDD)
            if(H4r1ey.config.optionalSettings.removeMemberRoleOnMute) {
                user.roles.add(H4r1ey.config.optionalSettings.memberRoleID)
            }
            console.log(chalk.blue(`${user.user.tag} has been unmute by ${message.author.tag}`))


            if(H4r1ey.config.optionalSettings.DMUsersOnPunishment) {
                const embed0000 = new Discord.MessageEmbed()
                .setDescription(`You have been unmuted by \`${message.author.tag}\` in \`${message.guild.name}\``)
                .setColor(H4r1ey.config.customConfig.hexID)
                .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
                user.user.send({ embeds: [embed0000] }).catch(err => console.log(chalk.red(`Error. Could not send the message to that user. More information: ${err}`)))
            }


            if (H4r1ey.config.optionalSettings.logMutes) {
                const channel2 = H4r1ey.channels.cache.get(H4r1ey.config.loggingChannels.warnLoggingChannel);
                if (!channel2) return console.log(chalk.red(`The channel ID set for the unmute command is in-correct. Please re-config!`))
                const embed46 = new Discord.MessageEmbed()
                    .setDescription(`**Log:**\n\`Unmute\`\n**Moderator:**\n\`${message.author.tag} - ${message.author.id}\`\n**User:**\n\`${user.user.tag} - ${user.user.id}\``)
                    .setFooter("©️ " + H4r1ey.config.customConfig.serverCopyright, H4r1ey.config.customConfig.serverIcon)
                    .setColor(H4r1ey.config.customConfig.hexID)
                channel2.send({
                    embeds: [embed46]
                })
            }

        } else {
            const embed2 = new Discord.MessageEmbed()
                .setDescription(`<@${message.author.id}> You do not have the required permissions!`)
                .setColor(H4r1ey.config.customConfig.hexID)
            message.channel.send({
                embeds: [embed2]
            })
        }



    }
}