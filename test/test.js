/* global describe, it */
'use strict'

const expect = require('chai').expect
const hasRequiredSubstrings = require('../index')

describe('#hasRequiredSubstrings()', () => {
  describe('without required substrings', () => {
    it('should return true when requiredSubstrings is an empty array', () => {
      const str = ''
      const requiredSubstrings = []
      const result = hasRequiredSubstrings(str, requiredSubstrings)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('single character substrings', () => {
    it('should return false when one of one substring is not found', () => {
      const str = 'abcde'
      const requiredSubstrings = ['f']
      const result = hasRequiredSubstrings(str, requiredSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true when one of one substring is found', () => {
      const str = 'abcde'
      const requiredSubstrings = ['a']
      const result = hasRequiredSubstrings(str, requiredSubstrings)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when none of many substrings are found', () => {
      const str = 'abcde'
      const requiredSubstrings = ['f', 'g', 'h']
      const result = hasRequiredSubstrings(str, requiredSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false when some of many substrings are found', () => {
      const str = 'abcde'
      const requiredSubstrings = ['a', 'g', 'h']
      const result = hasRequiredSubstrings(str, requiredSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true when all of many substrings are found', () => {
      const str = 'abcde'
      const requiredSubstrings = ['a', 'c', 'e']
      const result = hasRequiredSubstrings(str, requiredSubstrings)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('multi character substrings', () => {
    it('should return false when one of one substring is not found', () => {
      const str = 'abcde'
      const requiredSubstrings = ['fgh']
      const result = hasRequiredSubstrings(str, requiredSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true when one of one substring is found', () => {
      const str = 'abcde'
      const requiredSubstrings = ['abc']
      const result = hasRequiredSubstrings(str, requiredSubstrings)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when none of many substrings are found', () => {
      const str = 'abcde'
      const requiredSubstrings = ['fgh', 'ghi', 'hij']
      const result = hasRequiredSubstrings(str, requiredSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false when some of many substrings are found', () => {
      const str = 'abcde'
      const requiredSubstrings = ['abc', 'ghi', 'hij']
      const result = hasRequiredSubstrings(str, requiredSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true when all of many substrings are found', () => {
      const str = 'abcde'
      const requiredSubstrings = ['abc', 'cde', 'e']
      const result = hasRequiredSubstrings(str, requiredSubstrings)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('allowLastSubstringToBleed option', () => {
    it('should default to false', () => {
      const str = 'a big ma'
      const requiredSubstrings = ['machine']
      const result = hasRequiredSubstrings(str, requiredSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    describe('classic argument style', () => {
      it('should not allow last substring to bleed when set to false', () => {
        const str = 'a big ma'
        const requiredSubstrings = ['machine']
        const allowLastSubstringToBleed = false
        const result = hasRequiredSubstrings(str, requiredSubstrings, allowLastSubstringToBleed)
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should allow last substring to bleed when set to true', () => {
        const str = 'a big ma'
        const requiredSubstrings = ['machine']
        const allowLastSubstringToBleed = true
        const result = hasRequiredSubstrings(str, requiredSubstrings, allowLastSubstringToBleed)
        const expected = true
        expect(result).to.equal(expected)
      })
    })

    describe('options style', () => {
      it('should not allow last substring to bleed when set to false', () => {
        const str = 'a big ma'
        const requiredSubstrings = ['machine']
        const allowLastSubstringToBleed = false
        const result = hasRequiredSubstrings(str, requiredSubstrings, {
          allowLastSubstringToBleed: allowLastSubstringToBleed
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should allow last substring to bleed when set to true', () => {
        const str = 'a big ma'
        const requiredSubstrings = ['machine']
        const allowLastSubstringToBleed = true
        const result = hasRequiredSubstrings(str, requiredSubstrings, {
          allowLastSubstringToBleed: allowLastSubstringToBleed
        })
        const expected = true
        expect(result).to.equal(expected)
      })
    })
  })
})
