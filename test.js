const {format} = require('prettier')
const plugin = require('./src/plugin/index')

// const myCustomPlugin = {
//   parsers: {
//     "my-custom-parser": {
//       parse(text) {
//         const ast = parserBabel.parsers.babel.parse(text);
//         ast.program.body[0].expression.callee.name = "_";
//         return ast;
//       },
//       astFormat: "estree",
//     },
//   },
// };

const str = format("<div></div>", {
  parser: "glimmer",
  plugins: [plugin],
});

console.log(str)