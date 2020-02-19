var measurement = require('./measurement')
var obj = Object.keys(measurement.MEASUREMENT);

module.exports = {
    convert(unitType, value) {
        if (unitType == obj[0]) {
            return value * measurement.MEASUREMENT.FEET
        }
    }
}