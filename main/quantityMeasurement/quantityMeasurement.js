var measurement = require('./measurement')

var keys = Object.keys(measurement.MEASUREMENT);

module.exports = {
    convert(unitType, value) {
        if (value == null) return false;
        for (var i = 0; i < keys.length; i++) {
            if (keys[i] == unitType) {
                return value * measurement.MEASUREMENT[keys[i]];
            }
        }
    }
}



