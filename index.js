const minimist = require('minimist')
const error = require('./utils/error')

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    let cmd = args._[0] || 'help'
    if (args.w || args.word) cmd = 'search'
    if (args.v || args.version) cmd = 'version'
    if (args.h || args.help) cmd = 'help'

    switch(cmd) {
        case 'search':
            require('./cmds/search.js')(args.w || args.word, {
                fromLan: args.f || args.from,
                toLan: args.t || args.to
            })
            break
        case 'version':
            require('./cmds/version.js')()
            break
        case 'help':
            require('./cmds/help.js')(args)
            break
        case 'type':
            require('./cmds/type.js')(args)
            break
        default:
            error(`"${cmd}" is not a valid command!`, true)
            break
    }
}
