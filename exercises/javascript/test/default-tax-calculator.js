const { TaxCalculator } = require("../tax-calculator");
const vehicle = require("../vehicle");

let DefaultTaxCalculator = class DefaultTaxCalculator extends TaxCalculator {
  constructor() {
    super();
  }
  calculateTax(vehicle) {
    let taxAmount = 0;

    if (vehicle.fuelType === "Petrol") {
      if (vehicle.co2Emissions === 0) {
        taxAmount = 0;
      } else if (vehicle.co2Emissions > 0 && vehicle.co2Emissions <= 50) {
        taxAmount = 10;
      } else if (vehicle.co2Emissions > 50 && vehicle.co2Emissions <= 75) {
        taxAmount = 25;
      } else if (vehicle.co2Emissions > 75 && vehicle.co2Emissions <= 90) {
        taxAmount = 105;
      } else if (vehicle.co2Emissions > 90 && vehicle.co2Emissions <= 100) {
        taxAmount = 125;
      } else if (vehicle.co2Emissions > 100 && vehicle.co2Emissions <= 110) {
        taxAmount = 145;
      } else if (vehicle.co2Emissions > 110 && vehicle.co2Emissions <= 130) {
        taxAmount = 165;
      } else if (vehicle.co2Emissions > 130 && vehicle.co2Emissions <= 150) {
        taxAmount = 205;
      } else if (vehicle.co2Emissions > 150 && vehicle.co2Emissions <= 170) {
        taxAmount = 515;
      } else if (vehicle.co2Emissions > 170 && vehicle.co2Emissions <= 190) {
        taxAmount = 830;
      } else if (vehicle.co2Emissions > 190 && vehicle.co2Emissions <= 225) {
        taxAmount = 1240;
      } else if (vehicle.co2Emissions > 225 && vehicle.co2Emissions <= 255) {
        taxAmount = 1760;
      } else if (vehicle.co2Emissions > 225) {
        taxAmount = 2070;
      }
    } else if (vehicle.fuelType === "Alternative fuel") {
      if (vehicle.co2Emissions === 0) {
        taxAmount = 0;
      } else if (vehicle.co2Emissions > 0 && vehicle.co2Emissions <= 50) {
        taxAmount = 0;
      } else if (vehicle.co2Emissions > 50 && vehicle.co2Emissions <= 75) {
        taxAmount = 15;
      } else if (vehicle.co2Emissions > 75 && vehicle.co2Emissions <= 90) {
        taxAmount = 95;
      } else if (vehicle.co2Emissions > 90 && vehicle.co2Emissions <= 100) {
        taxAmount = 115;
      } else if (vehicle.co2Emissions > 100 && vehicle.co2Emissions <= 110) {
        taxAmount = 135;
      } else if (vehicle.co2Emissions > 110 && vehicle.co2Emissions <= 130) {
        taxAmount = 155;
      } else if (vehicle.co2Emissions > 130 && vehicle.co2Emissions <= 150) {
        taxAmount = 195;
      } else if (vehicle.co2Emissions > 150 && vehicle.co2Emissions <= 170) {
        taxAmount = 505;
      } else if (vehicle.co2Emissions > 170 && vehicle.co2Emissions <= 190) {
        taxAmount = 820;
      } else if (vehicle.co2Emissions > 190 && vehicle.co2Emissions <= 225) {
        taxAmount = 1230;
      } else if (vehicle.co2Emissions > 225 && vehicle.co2Emissions <= 255) {
        taxAmount = 1750;
      } else if (vehicle.co2Emissions > 225) {
        taxAmount = 2060;
      }
    }
    if (vehicle.fuelType === "Diesel") {
        if (vehicle.co2Emissions === 0) {
          taxAmount = 0;
        } else if (vehicle.co2Emissions > 0 && vehicle.co2Emissions <= 50) {
          taxAmount = 25;
        } else if (vehicle.co2Emissions > 50 && vehicle.co2Emissions <= 75) {
          taxAmount = 105;
        } else if (vehicle.co2Emissions > 75 && vehicle.co2Emissions <= 90) {
          taxAmount = 125;
        } else if (vehicle.co2Emissions > 90 && vehicle.co2Emissions <= 100) {
          taxAmount = 145;
        } else if (vehicle.co2Emissions > 100 && vehicle.co2Emissions <= 110) {
          taxAmount = 165;
        } else if (vehicle.co2Emissions > 110 && vehicle.co2Emissions <= 130) {
          taxAmount = 205;
        } else if (vehicle.co2Emissions > 130 && vehicle.co2Emissions <= 150) {
          taxAmount = 515;
        } else if (vehicle.co2Emissions > 150 && vehicle.co2Emissions <= 170) {
          taxAmount = 830;
        } else if (vehicle.co2Emissions > 170 && vehicle.co2Emissions <= 190) {
          taxAmount = 1240;
        } else if (vehicle.co2Emissions > 190 && vehicle.co2Emissions <= 225) {
          taxAmount = 1760;
        } else if (vehicle.co2Emissions > 225 && vehicle.co2Emissions <= 255) {
          taxAmount = 2070;
        } else if (vehicle.co2Emissions > 225) {
          taxAmount = 2070;
        }
        
      }
    return taxAmount;
  }
};

module.exports = {
  DefaultTaxCalculator,
};
