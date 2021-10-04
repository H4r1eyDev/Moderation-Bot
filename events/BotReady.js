const nodelogger = require('hyperz-nodelogger');
const chalk = require('chalk');

module.exports = {
    name: 'ready',
    async execute(H4r1ey) {

        const logger = new nodelogger()
        logger.hypelogger(`${H4r1ey.user.tag}`, '500', `blue`, `I am online and running!\n\n${chalk.yellow(`Moderation Bot`)}\n${chalk.yellow(`Bot Started Successfully`)}\n${chalk.yellow(`Config file is verified!`)}`, 'disabled', `blue`, 'double', false)
        setTimeout(() => {
            console.log(`\n\n------ LOGGING TO CONSOLE STARTS BELOW! ------\n\n`)
            console.log(chalk.green('[SYSTEM] ') + 'Errors are in RED!')
            console.log(chalk.green('[SYSTEM] ') + 'Completed actions are in BLUE!')
            console.log(chalk.green('[SYSTEM] ') + 'V.1.1')
            console.log(chalk.yellow('[HARLEY] ') + 'THANKS FOR PURCHASING!')
        }, 800)

        H4r1ey.user.setActivity(H4r1ey.config.botConfig.botStatus, {
            type: H4r1ey.config.botConfig.botStatusType
        })

    }
}