`eslint-plugin-antonin`
===================

[![NPM version][npm-image]][npm-url]

# Installation

```sh
$ npm install eslint eslint-plugin-antonin
```

# Configuration


```json
  "plugins": [
    "antonin",
  ],
  "rules": {
    "antonin/no-tilde-import": "error",
  }
```

# List of supported rules

✔: Enabled in the [`recommended`](#recommended) configuration.\
🔧: Fixable with [`eslint --fix`](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems).

<!-- AUTO-GENERATED-CONTENT:START (BASIC_RULES) -->
| ✔ | 🔧 | Rule | Description |
| :---: | :---: | :--- | :--- |
| ✔ | 🔧 | [antonin/no-tilde-import](docs/rules/no-tilde-import.md) | Disallow the use of `import` with tildes or multiple @ |
<!-- AUTO-GENERATED-CONTENT:END -->

# License

`eslint-plugin-antonin` is licensed under the [MIT License](https://opensource.org/licenses/mit-license.php).


[npm-url]: https://npmjs.org/package/eslint-plugin-antonin
[npm-image]: https://img.shields.io/npm/v/eslint-plugin-antonin.svg