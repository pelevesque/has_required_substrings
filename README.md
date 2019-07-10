[![Build Status](https://travis-ci.org/pelevesque/has_required_substrings.svg?branch=master)](https://travis-ci.org/pelevesque/has_required_substrings)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/has_required_substrings/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/has_required_substrings?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# has_required_substrings

Checks if a string has required substrings.

## Related Packages

https://github.com/pelevesque/has_prohibited_substring    
https://github.com/pelevesque/has_required_substrings_at_indexes    
https://github.com/pelevesque/has_prohibited_substring_at_indexes    
https://github.com/pelevesque/has_required_substrings_after_sums    
https://github.com/pelevesque/has_prohibited_substring_after_sums    

## Node Repository

https://www.npmjs.com/package/@pelevesque/has_required_substrings

## Installation

`npm install @pelevesque/has_required_substrings`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

### Parameters

```js
str                       (required)
requiredSubstrings        (required)
allowLastSubstringToBleed (optional) default = false
```

### Requiring

```js
const hasRequiredSubstrings = require('@pelevesque/has_required_substrings')
```

### Basic Usage

`requiredSubstrings` is an array of substrings. `true` is returned if all
substrings are found.

```js
const str = 'abcde'
const requiredSubstrings = [ 'f' ]
const result = hasRequiredSubstrings(str, requiredSubstrings)
// result === false
```

```js
const str = 'abcde'
const requiredSubstrings = [ 'a' ]
const result = hasRequiredSubstrings(str, requiredSubstrings)
// result === true
```

```js
const str = 'abcde'
const requiredSubstrings = [ 'a', 'b', 'f']
const result = hasRequiredSubstrings(str, requiredSubstrings)
// result === false
```

```js
const str = 'abcde'
const requiredSubstrings = [ 'a', 'b', 'c']
const result = hasRequiredSubstrings(str, requiredSubstrings)
// result === true
```

```js
const str = 'a man a plan a canal'
const requiredSubstrings = [ 'man', 'plan', 'canal' ]
const result = hasRequiredSubstrings(str, requiredSubstrings)
// result === true
```

### Options

#### allowLastSubstringToBleed

The `allowLastSubstringToBleed` option is `false` by default. It it used when you want
to allow the last substring to be incomplete if the string is too short.
In the following example, the last substring `canal` starts at the correct index,
but remains incomplete since the string ends. Normally this would return `false`.
With `allowLastSubstringToBleed` set to `true`, it returns `true`.

```js
const str = 'a man a plan a c'
const requiredSubstrings = [ 'man', 'plan', 'canal' ]
const allowLastSubstringToBleed = true
const result = hasRequiredSubstrings(str, requiredSubstrings, allowLastSubstringToBleed)
// result === true
```

##### options style

For style compatibility with related packages like `has_required_substrings_after_sums`,
it is possible to set `allowLastSubstringToBleed` using an options style.

```js
const str = 'a man a plan a c'
const requiredSubstrings = [ 'man', 'plan', 'canal' ]
const allowLastSubstringToBleed = true
const result = hasRequiredSubstrings(str, requiredSubstrings, {
  allowLastSubstringToBleed: allowLastSubstringToBleed
})
// result === true
```
