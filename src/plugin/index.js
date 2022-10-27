"use strict";

const createLanguage = require("../utils/create-language.js");
const printer = require("./printer.js");
const parser = require("./parser.js");

const languages = [
  createLanguage(require("linguist-languages/data/Handlebars.json"), () => ({
    since: "2.3.0",
    parsers: ["lehbs-parser"],
    vscodeLanguageIds: ["handlebars"],
  })),
];

const parsers = {
  'lehbs-parser': parser
}

const printers = {
  'lehbs-ast': printer,
};

module.exports = {
  languages,
  printers,
  parsers,
};
