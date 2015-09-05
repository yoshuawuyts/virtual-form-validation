# virtual-form-validation
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

Validate a virtual-form using JSON Schema.

## Installation
```sh
$ npm install virtual-form-validation
```

## Usage
```js
const validator = require('virtual-form-validation')

const validate = validator({
  type: 'object',
  additionalProperties: false,
  required: [ 'name' ],
  properties: {
    name: { type: 'string' },
    address: { type: 'string' }
  }
})

module.exports = render

function render (h, state) {
  return h('form', { validate: validate }, [
    h('input', { type: 'text', name: 'name', placeholder: 'name' }),
    h('input', { type: 'text', name: 'address', placeholder: 'address' }),
    h('input', { type: 'submit', name: 'SUBMIT' })
  ]))
}
```

## API
### validate = validator(schema)
Create a validator based on a JSON schema.

## validate
`validate` should be attached to a `virtual-dom` form node as a property. It
uses hooks under the hood to perform actions whenever the internal state of the
form mutates. It performs the following behavior:

- sets the `:required` / `:optional` pseudo-classes
- sets the `:valid` / `:invalid` pseudo-classes on validation

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/virtual-form-validation.svg?style=flat-square
[npm-url]: https://npmjs.org/package/virtual-form-validation
[travis-image]: https://img.shields.io/travis/yoshuawuyts/virtual-form-validation/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/virtual-form-validation
[codecov-image]: https://img.shields.io/codecov/c/github/yoshuawuyts/virtual-form-validation/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/yoshuawuyts/virtual-form-validation
[downloads-image]: http://img.shields.io/npm/dm/virtual-form-validation.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/virtual-form-validation
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
