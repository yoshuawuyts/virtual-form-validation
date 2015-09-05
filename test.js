const test = require('tape')
const virtualFormValidation = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(virtualFormValidation)
})
