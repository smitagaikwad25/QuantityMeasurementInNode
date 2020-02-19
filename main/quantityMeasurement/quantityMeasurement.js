var measurement = require('./measurement')

var keys = Object.keys(measurement.MEASUREMENT);
// console.log(measurement.MEASUREMENT[keys[0]])

module.exports = {
    convert(unitType, value) {
        if (value == null) return false;
        for (var i = 0; i < keys.length; i++) {
            // console.log("value--> " + measurement.MEASUREMENT[keys[i]])

            if (keys[i] == unitType) {
                console.log(value * measurement.MEASUREMENT[keys[i]]);
                
                return value * measurement.MEASUREMENT[keys[i]];
            }
        }
    }
    // if (unitType == keys[0]) {
    //     return value * measurement.MEASUREMENT.FEET
    // } else if (unitType == keys[1]) {
    //     return value * measurement.MEASUREMENT.INCH
    // } else {
    //     return value * measurement.MEASUREMENT.YARD
    // }
}



