const { version, name } = require('../package.json')

module.exports = () => {
  console.log(`${name}`)
  console.log(`v${version}`)
}