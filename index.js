const minimist = require('minimist')

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    let cmd = args._[0] || 'help'
    if (args.v || args.version) cmd = 'version'
    if (args.h || args.help) cmd = 'help'
    if (args.w || args.word) cmd = 'search'

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
            require('./cmds/help.js')()
            break
        default:
            console.log(`不支持 ${cmd} 命令`)
            break
    }
}
