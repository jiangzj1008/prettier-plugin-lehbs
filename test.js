const {format} = require('prettier')
const plugin = require('./src/plugin/index')

const text = `
{{#schema}}
{
  "name": {
    "zh-hans-cn": "图片拼接"
  }
}
{{/schema}}
`

const str = format(text, {
  parser: "lehbs-parser",
  plugins: [plugin],
});

console.log(str)