var measurement = require('./measurement')

var keys = Object.keys(measurement.MEASUREMENT);

module.exports = {
    convert(unitType, value) {
        if (value == null) return false;
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == unitType) {
                var convertedValue = value * measurement.MEASUREMENT[keys[i]];
                return convertedValue;
            }
        }
    },

    addition(firstValue, SecondValue) {
        return firstValue + SecondValue;
    },

    checkForTempInFahrenheit(unitType, value) {

        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == unitType) {
                return (5 / 9) * (value - 32)
            }
        }
    },

}





