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
        assert.equal(valuesInInch, valuesInInch1)
    })

    it('given values in Inch should return typeOf', () => {
        var valuesInInch = quantityMeasurement.convert('INCH', 0)
        assert.typeOf(valuesInInch, 'number')
    })

    it('given null values in Inch should return false', () => {
        var valuesInInch = quantityMeasurement.convert('INCH', null)
        assert.isFalse(valuesInInch)
    })

    it('given values in Feet and Yard when equal should return true', () => {
        var valuesInInFeet = quantityMeasurement.convert('FEET', 3)
        var valuesInYard = quantityMeasurement.convert('YARD', 1)
        assert.equal(valuesInInFeet, valuesInYard)
    })

    it('given one feet and one Yard should return not equal', () => {
        var valuesInInFeet = quantityMeasurement.convert('FEET', 1)
        var valuesInYard = quantityMeasurement.convert('YARD', 1)
        assert.notEqual(valuesInInFeet, valuesInYard)
    })

    it('given one inch and one Yard should return not equal', () => {
        var valuesInInch = quantityMeasurement.convert('INCH', 1)
        var valuesInYard = quantityMeasurement.convert('YARD', 1)
        assert.notEqual(valuesInInch, valuesInYard)
    })

    it('given one inch and one Yard should return not equal', () => {
        var valuesInInch = quantityMeasurement.convert('INCH', 1)
        var valuesInYard = quantityMeasurement.convert('YARD', 1)
        assert.notEqual(valuesInInch, valuesInYard)
    })

    it('given 1 yard and 36 inches should return not equal', () => {
        var valuesInYard = quantityMeasurement.convert('YARD', 1)
        var valuesInInch = quantityMeasurement.convert('INCH', 36)
        assert.equal(valuesInYard, valuesInInch)
    })

    it('given 36 inch and 1 yard  should return not equal', () => {
        var valuesInInch = quantityMeasurement.convert('INCH', 36)
        var valuesInYard = quantityMeasurement.convert('YARD', 1)
        assert.equal(valuesInInch, valuesInYard)
    })

    it('given values 1 yard and 3 feet when equal should return true', () => {
        var valuesInYard = quantityMeasurement.convert('YARD', 1)
        var valuesInInFeet = quantityMeasurement.convert('FEET', 3)
        assert.equal(valuesInYard,valuesInInFeet)
    })
})