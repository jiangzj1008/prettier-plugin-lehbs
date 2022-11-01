const {format} = require('prettier')
const plugin = require('./src/plugin/index')

const text = `
{{#if valid}}
<{{tag}}>
</{{tag}}>
{{/if}}
`

const str = format(text, {
  parser: "lehbs-parser",
  plugins: [plugin],
});

console.log(str)