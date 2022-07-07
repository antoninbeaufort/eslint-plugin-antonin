"use strict";

const getFormattedSpecifiers = (speficiers) => {
  const defaultSpecifiers = speficiers.filter(specifier => specifier.type === 'ImportDefaultSpecifier')
  const specifiers = speficiers.filter(specifier => specifier.type === 'ImportSpecifier')

  let result = ''

  if (defaultSpecifiers.length > 0) {
    result += `${defaultSpecifiers.map(specifier => specifier.local.name).join(', ')}`
  }
  if (result !== '' && specifiers.length > 0) {
    result += ', '
  }
  if (specifiers.length > 0) {
    result += `{ ${specifiers.map(specifier => specifier.local.name).join(', ')} }`
  }

  if (result !== '') {
    result += ' from '
  }

  return result
}

const getFormattedSource = (source) => {
  if (source.includes('~~/')) {
    return source.replace("~~/", "@/")
  }
  if (source.includes('@@/')) {
    return source.replace("@@/", "@/")
  }
  return source.replace("~/", "@/")
}

module.exports = {
  meta: {
    type: "suggestion",
    fixable: "code",
    docs: {
      description: "Disallow the use of `import` with tildes or multiple @",
      category: "Layout & Formatting",
      recommended: true,
    }
  },
  create: function(context) {
    return {
      // Rule methods - AST Node Type
      "ImportDeclaration": function(node) {
        if (node.source.value.startsWith("~/") || node.source.value.startsWith("~~/") || node.source.value.startsWith("@@/")) {
          context.report({
            node, 
            message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead", 
            fix: function(fixer) {
              return fixer.replaceText(node, `import ${getFormattedSpecifiers(node.specifiers)}'${getFormattedSource(node.source.value)}'`);
            }
          });
        }
      }
    }
  }
}
module.schema = [];