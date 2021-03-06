'use strict';

/* eslint-disable no-restricted-syntax */

const { rules } = require('./lib/index');

const ruleTableRows = Object.keys(rules)
  .sort()
  .map((id) => {
    const { meta } = rules[id];
    const { fixable, docs } = meta;
    return [
      docs.recommended ? '✔' : '',
      fixable ? '🔧' : '',
      `[antonin/${id}](docs/rules/${id}.md)`,
      docs.description,
    ].join(' | ');
  });

const buildRulesTable = (rows) => {
  const header = '✔ | 🔧 | Rule | Description';
  const separator = ':---: | :---: | :--- | :---';

  return [header, separator, ...rows]
    .map((row) => `| ${row} |`)
    .join('\n');
};

const BASIC_RULES = () => buildRulesTable(ruleTableRows);

module.exports = {
  transforms: {
    BASIC_RULES,
  },
  callback: () => {
    console.log('The auto-generating of rules finished!');
  },
};