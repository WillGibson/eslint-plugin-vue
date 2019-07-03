/**
 * @fileoverview Enforce consistent indentation in `<style>`
 * @author Will Gibson
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester
const rule = require('../../../lib/rules/html-quotes')

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { ecmaVersion: 2015 }
})

tester.run('html-quotes', rule, {
  valid: [
    {
      code: `
<style lang="scss">
.something {
  margin-top: 20px;

  .something-else {
    background-color: #F0F;
  }
}
</style>
      `
    }
  ],
  invalid: [
    {
      code: `
<style lang="scss">
   .something {
        margin-top: 20px;

           .something-else {
    background-color: #F0F;
          }
}
</style>
      `,
      output: `
<style lang="scss">
.something {
  margin-top: 20px;

  .something-else {
    background-color: #F0F;
  }
}
</style>
      `,
      errors: ['Expected to be enclosed by double quotes.']
    }
  ]
})
