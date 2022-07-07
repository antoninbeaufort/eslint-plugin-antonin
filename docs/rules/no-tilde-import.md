# No tilde import (antonin/no-tilde-import)

This option force the imports relatives to root to start by "@/".

**Fixable:** This rule is automatically fixable using the `--fix` flag on the command line.
Fixer will replace import starting by "~/", "~~/", "@@/" by "@/".

## Rule Details

Examples of **incorrect** code for this rule:

```js
import { Something } from '~/anywhere-invalid'
import { Something } from '~~/anywhere-invalid'
import { Something } from '@@/anywhere-invalid'
import { Something, Autre } from '~/anywhere-invalid'
import { Something, Autre } from '~~/anywhere-invalid'
import { Something, Autre } from '@@/anywhere-invalid'
import Default, { Something, Autre } from '~/anywhere-invalid'
import Default, { Something, Autre } from '~~/anywhere-invalid'
import Default, { Something, Autre } from '@@/anywhere-invalid'
import Something from '~/anywhere-invalid'
import Something from '~~/anywhere-invalid'
import Something from '@@/anywhere-invalid'
import '~/anywhere-invalid'
import '~~/anywhere-invalid'
import '@@/anywhere-invalid'
```

Examples of **correct** code for this rule:

```js
import { Something } from '@/anywhere-valid'
import { Something, Autre } from '@/anywhere-valid'
import Default, { Something, Autre } from '@/anywhere-valid'
import Something from '@/anywhere-valid'
import '@/anywhere-invalid'
```