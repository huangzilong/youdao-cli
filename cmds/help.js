const menus = {
    main: `yd <command> <options>

    help .............. 查看帮助
    type .............. 查看支持的语言类型
    --version, -v ............ 查看版本
    search .............. 查询单词
        --from, -f ............ 设置翻译前语言类型
        --to, -t ............ 设置需要翻译成哪种语言
        --word, -w ............ 设置要翻译的文本`,
    type: `yd type ............. 查看支持的语言`,
    search: `yd search <options>
    --version, -v ............ 查看版本
    --from, -f ............ 设置翻译前语言类型
    --to, -t ............ 设置需要翻译成哪种语言
    --word, -w ............ 设置要翻译的文本`,
};
module.exports = args => {
    const subCmd = args._[0] === 'help' ? args._[1] : args._[0];
    console.log(menus[subCmd] || menus.main);
};
