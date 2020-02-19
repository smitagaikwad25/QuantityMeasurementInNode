var assert = require('chai').assert
var quantityMeasurement = require('../main/quantityMeasurement/quantityMeasurement');

describe('Quantity Measurement Test Cases', () => {
    it('given 0 feet and 0 feet when equal should return true', () => {
        var feet1 = quantityMeasurement.convert('FEET', 1)
        var feet2 = quantityMeasurement.convert('FEET', 1)
        assert.equal(feet1, feet2)
    })
})