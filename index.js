'use strict'

const isObject = require('isobject')

function parseAllowLastSubstringToBleed (allowLastSubstringToBleed) {
  if (
    isObject(allowLastSubstringToBleed) &&
    typeof allowLastSubstringToBleed.allowLastSubstringToBleed !== 'undefined'
  ) {
    allowLastSubstringToBleed = allowLastSubstringToBleed.allowLastSubstringToBleed
  }
  return allowLastSubstringToBleed
}

module.exports = (str, requiredSubstrings, allowLastSubstringToBleed = false) => {
  if (requiredSubstrings.length === 0) return true
  allowLastSubstringToBleed = parseAllowLastSubstringToBleed(allowLastSubstringToBleed)
  for (let i = requiredSubstrings.length - 1; i >= 0; i--) {
    if (str.includes(requiredSubstrings[i])) {
      requiredSubstrings.splice(i, 1)
    }
  }
  if (requiredSubstrings.length === 1 && allowLastSubstringToBleed) {
    for (let i = 1, len = requiredSubstrings[0].length; i < len; i++) {
      const substring = requiredSubstrings[0].substr(0, i)
      const target = str.substr(str.length - i, i)
      if (substring.localeCompare(target) === 0) {
        requiredSubstrings.splice(0, 1)
        break
      }
    }
  }
  return requiredSubstrings.length === 0
}
