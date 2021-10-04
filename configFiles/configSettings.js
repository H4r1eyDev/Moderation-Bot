const _config = {
    // Main Config;
    botConfig: {
        botToken: '', // Your Bots token. 
        botPrefix: `!`,
        botStatus: 'Bans, Kicks and Warnings', // Custom Status.
        botStatusType: 'WATCHING' // Custom Presence. (WATCHING or PLAYING)
    },

    customConfig: {
        deleteCommands: true,
        serverCopyright: 'H4r1eyDev', // The copyright symbol is already done!
        serverIcon: 'https://cdn.discordapp.com/attachments/891492197306871808/891492286716866560/HDnew.gif',
        hexID: '#ff0000',
        muteRoleID: '892044367336964127'
    },

    permissionSetup: {
	// All of the following are role ID's for permissions.
        warnCommandPerms: [`891124626250403840`], 
        banCommandPerms: [`891124626250403840`],
        kickCommandPerms: [`891124626250403840`],
        commendCommandPerms: [`891124626250403840`],
        clearChatCommandPerms: [`891124626250403840`],
        muteCommandPerms: [`891124626250403840`],
        sayCommandPerms: [`891124626250403840`]
    },

    optionalSettings: {
        logCommands: true,
        logWarnings: true,
        logBans: true,
        logKicks: true,
        logCommends: true,
        logPurgeCommand: true,
        logMutes: true,
        DMUsersOnPunishment: true,
        removeMemberRoleOnMute: true,
        logSayCommand: true,
        memberRoleID: '891124626250403840',
        deleteBadWorlds: true,
        bypassBadWordsRoleIDs: [`891124626250403840`], // Role ID's.
        badWords: [`fuck`, `bitch`],
        dmUsersWhenSayingBadWords: true,
        logBadWords: true,
        logBotDMs: true,
        deleteLinks: true,
        bypassLinkPrevention: [`891124626250403840`], // Role ID's.
        bannedLinks: [`.gg`, `www`, `https://`, `http://`],
        logBadLinks: true,
        dmUsersAfterPostingBadLinks: true,
        logDeletedMessages: true,
        usePingPrevention: true,
        bypassPingPreventionRoles: [`891124626250403840`], // Role ID's
        pingPreventedMember: [`659742300364341254`], // User ID's.
        dmUsersWhenPingingPreventedMembers: true,
        logMemberJoining: true,
    },

    loggingChannels: {
        commandLoggingChannel: '891120299435773982',
        warnLoggingChannel: '891272993282588682',
        banLoggingChannel: '891272993282588682',
        kickLoggingChannel: '891272993282588682',
        clearMessagesLogging: '891272993282588682',
        badWordLogging: '891272993282588682',
        botDMLogger: '891272993282588682',
        badLinksLogging: '891272993282588682',
        deletedMessageLog: '891272993282588682',
        memberJoinLogging: '891272993282588682',
        sayLoggingChannel: '891272993282588682',
    }
}

module.exports = _config