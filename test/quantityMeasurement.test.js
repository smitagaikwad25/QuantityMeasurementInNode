var assert = require('chai').assert
var quantityMeasurement = require('../main/quantityMeasurement/quantityMeasurement');

describe('Quantity Measurement Test Cases for length', () => {

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
        assert.equal(valuesInYard, valuesInInFeet)
    })

    it('given values 2 inch and 5 cm when equal should return true', () => {
        var valuesInInch = Math.round(quantityMeasurement.convert('INCH', 2))
        var valuesInCm = Math.round(quantityMeasurement.convert('CM', 5))
        assert.equal(valuesInInch, valuesInCm)
    })

    it('given 2 Inch and 2 Inch should return addion of it', () => {
        var valuesInInch = quantityMeasurement.convert('INCH', 2)
        var valuesInInch1 = quantityMeasurement.convert('INCH', 2)
        var finalAdditionValue = quantityMeasurement.addition(valuesInInch, valuesInInch1)
        assert.equal(4, finalAdditionValue)
    })

    it('given 1 feet and 2 Inch should return addion of it', () => {
        var convertedValue = quantityMeasurement.convert('FEET', 1)
        var convertedValue1 = quantityMeasurement.convert('INCH', 2)
        var finalAdditionValue = quantityMeasurement.addition(convertedValue, convertedValue1)
        assert.equal(14, finalAdditionValue)
    })

    it('given 1 feet and 1 feet should return addion of it', () => {
        var convertedValue = quantityMeasurement.convert('FEET', 1)
        var convertedValue1 = quantityMeasurement.convert('FEET', 1)
        var finalAdditionValue = quantityMeasurement.addition(convertedValue, convertedValue1)
        assert.equal(24, finalAdditionValue)
    })

    it('given 2 inch and 2.5 cm should return addion of it', () => {
        var convertedValue = quantityMeasurement.convert('INCH', 2)
        var convertedValue1 = quantityMeasurement.convert('CM', 2.5)
        var finalAdditionValue = Math.round(quantityMeasurement.addition(convertedValue, convertedValue1))
        assert.equal(3, finalAdditionValue)
    })

})

describe('Quantity Measurement Test Cases for volum', () => {

    it('given 1 gallon and 3.78 litter should return addion of it', () => {
        var convertedValue = quantityMeasurement.convert('GALLON', 1)
        var convertedValue1 = quantityMeasurement.convert('LITRE', 3.78)
        assert.equal(convertedValue1, convertedValue)
    })

    it('given 1 litre and 1000 ml should return addion of it', () => {
        var convertedValue = quantityMeasurement.convert('LITRE',1)
        var convertedValue1 = quantityMeasurement.convert('ML',1000)
        assert.equal(convertedValue, convertedValue1)
    })

    it('given 1 gallon and 3.78 litre should return addion of it', () => {
        var convertedValue = quantityMeasurement.convert('GALLON', 1)
        var convertedValue1 = quantityMeasurement.convert('LITRE', 3.78)
        var finalAdditionValue = quantityMeasurement.addition(convertedValue, convertedValue1)
        assert.equal(7.56, finalAdditionValue)
    })

    it('given 1 litre and 1000 ml should return addion of it', () => {
        var convertedValue = quantityMeasurement.convert('LITRE', 1)
        var convertedValue1 = quantityMeasurement.convert('ML', 1000)
        var finalAdditionValue = quantityMeasurement.addition(convertedValue, convertedValue1)
        assert.equal(2, finalAdditionValue)
    })
})