var assert = require('chai').assert
var quantityMeasurement = require('../main/quantityMeasurement/quantityMeasurement');

describe('Quantity Measurement Test Cases', () => {
    it('given 0 feet and 0 feet when equal should return true', () => {
        var feet1 = quantityMeasurement.convert('FEET', 0)
        var feet2 = quantityMeasurement.convert('FEET', 0)
        assert.equal(feet1, feet2)
    })

    it('given value in feet should return typeOf', () => {
        var feet1 = quantityMeasurement.convert('FEET', 1)
        assert.typeOf(feet1, 'number')
    })

    it('given null value in feet should return false', () => {
        var feet1 = quantityMeasurement.convert('FEET', null)
        assert.isFalse(feet1)
    })

    it('given values in Inch should return true', () => {
        var valuesInInch = quantityMeasurement.convert('INCH', 0)
        var valuesInInch1 = quantityMeasurement.convert('INCH', 0)
        assert.equal(valuesInInch,valuesInInch1)
    })

    it('given values in Inch should return typeOf', () => {
        var valuesInInch = quantityMeasurement.convert('INCH', 0)
        assert.typeOf(valuesInInch,'number')
    })

    it('given null values in Inch should return false', () => {
        var valuesInInch = quantityMeasurement.convert('INCH', null)
        assert.isFalse(valuesInInch)
    })
})