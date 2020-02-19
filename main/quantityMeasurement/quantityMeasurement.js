var measurement = require('./measurement')
var obj = Object.keys(measurement.MEASUREMENT);

module.exports = {
    convert(unitType, value) {
        if (value == null) return false;
        if (unitType == obj[0]) {
            return value * measurement.MEASUREMENT.FEET
        } else if (unitType == obj[1]) {
            return value * measurement.MEASUREMENT.INCH
        }else{
            return value * measurement.MEASUREMENT.YARD
        }
    }
}