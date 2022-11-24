const {format} = require('prettier')
const plugin = require('./src/plugin/index')

const text = `
<div {{{valid}}}>{{{hello}}}</div>
`

const str = format(text, {
  parser: "lehbs-parser",
  plugins: [plugin],
});

console.log(str)