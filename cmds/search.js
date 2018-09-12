const axios = require('axios')
const querystring = require('querystring')
const crypto = require('crypto')
const ora = require('ora')
const colors = require('colors')

const config = require('../config/app')
const { ERROR_CODE, TYPE } = require('../constant')

const getTranslate = (params, language) => {
    const loading = ora('正在查询中,请稍候...').start();
    loading.color = 'green';
    axios.post(`${config.url}?${querystring.stringify(params)}`).then(res => {
        if (res.status === 200) {
            if (+res.data.errorCode !== 0) {
                console.log(res.data.errorCode)
                throw new Error(ERROR_CODE[res.errorCode] || '发生了错误')
            } else {
                loading.stop()
                const {basic: { explains }} = res.data
                console.log('\n')
                console.log('************************'.underline.red)
                console.log('\n')
                explains.forEach(e => {
                    console.log(e)
                })
                console.log('\n')
                console.log('************************'.underline.red)
            }
        }
    }).catch(e => {
        loading.stop()
        console.log(e)
    });
  }

const translate = (word = '', {
    fromLan = '',
    toLan = '',
}) => {
    fromLan = fromLan || TYPE.EN
    toLan = toLan || TYPE.CN
    const utf8Word = Buffer.from(word).toString()
    const md5 = crypto.createHash('md5')
    const randomNumber = Math.random() * 100;
    md5.update(`${config.appID}${utf8Word}${randomNumber}${config.appSecret}`)
    const sign = md5.digest('hex').slice(0, 32).toLocaleUpperCase();

    const params = {
        q: utf8Word,
        appKey: config.appID,
        salt: randomNumber,
        sign,
        from: TYPE[fromLan.toUpperCase()],
        to: TYPE[toLan.toUpperCase()],
    }

    getTranslate(params);
}

module.exports = translate