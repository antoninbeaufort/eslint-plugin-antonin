"use strict";

const rule = require("../../../lib/rules/no-tilde-import"),
  RuleTester = require("eslint").RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  }
});

const ruleTester = new RuleTester();
ruleTester.run("no-tilde-import", rule, {

  valid: [
    "import { Something } from '@/anywhere-valid'",
    "import { Something, Autre } from '@/anywhere-valid'",
    "import Default, { Something, Autre } from '@/anywhere-valid'",
    "import Something from '@/anywhere-valid'",
    "import '@/anywhere-valid'"
  ],

  invalid: [
    {
      code: "import { Something } from '~/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import { Something } from '@/anywhere-invalid'"
    },
    {
      code: "import { Something } from '~~/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import { Something } from '@/anywhere-invalid'"
    },
    {
      code: "import { Something } from '@@/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import { Something } from '@/anywhere-invalid'"
    },
    {
      code: "import { Something, Autre } from '~/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import { Something, Autre } from '@/anywhere-invalid'"
    },
    {
      code: "import { Something, Autre } from '~~/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import { Something, Autre } from '@/anywhere-invalid'"
    },
    {
      code: "import { Something, Autre } from '@@/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import { Something, Autre } from '@/anywhere-invalid'"
    },
    {
      code: "import Default, { Something, Autre } from '~/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import Default, { Something, Autre } from '@/anywhere-invalid'"
    },
    {
      code: "import Default, { Something, Autre } from '~~/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import Default, { Something, Autre } from '@/anywhere-invalid'"
    },
    {
      code: "import Default, { Something, Autre } from '@@/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import Default, { Something, Autre } from '@/anywhere-invalid'"
    },
    {
      code: "import Something from '~/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import Something from '@/anywhere-invalid'"
    },
    {
      code: "import Something from '~~/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import Something from '@/anywhere-invalid'"
    },
    {
      code: "import Something from '@@/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import Something from '@/anywhere-invalid'"
    },
    {
      code: "import '~/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import '@/anywhere-invalid'"
    },
    {
      code: "import '~~/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import '@/anywhere-invalid'"
    },
    {
      code: "import '@@/anywhere-invalid'",
      errors: [{
        message: "Use of relative path with a ~, ~~ or @@ is not allowed, use @ instead",
        type: "ImportDeclaration"
      }],
      output: "import '@/anywhere-invalid'"
    },
  ]
});