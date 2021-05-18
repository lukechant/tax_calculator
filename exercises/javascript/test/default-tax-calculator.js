const { TaxCalculator } = require("../tax-calculator");
const vehicle = require("../vehicle");
const { featureSwitches } = require("./feature-switch");

let DefaultTaxCalculator = class DefaultTaxCalculator extends TaxCalculator {
  constructor() {
    super();
  }
  calculateTax(vehicle) {
    let taxAmount = 0;
    let { co2Emissions, fuelType, dateOfFirstRegistration, listPrice  } = vehicle;


    if (dateOfFirstRegistration.getFullYear() === 2020) {
        if (fuelType === "Petrol") {
            if (co2Emissions === 0) taxAmount = 0;
            else if (co2Emissions <= 50) taxAmount = 10;
            else if (co2Emissions <= 75) taxAmount = 25;
            else if (co2Emissions <= 90) taxAmount = 105;
            else if (co2Emissions <= 100) taxAmount = 125;
            else if (co2Emissions <= 110) taxAmount = 145;
            else if (co2Emissions <= 130) taxAmount = 165;
            else if (co2Emissions <= 150) taxAmount = 205;
            else if (co2Emissions <= 170) taxAmount = 515;
            else if (co2Emissions > 170 && co2Emissions <= 190) taxAmount = 830;
            else if (co2Emissions > 190 && co2Emissions <= 225) taxAmount = 1240;
            else if (co2Emissions > 225 && co2Emissions <= 255) taxAmount = 1760;
            else taxAmount = 2070;
          } else if (fuelType === "Alternative fuel") {
            if (co2Emissions === 0) taxAmount = 0;
            else if (co2Emissions <= 50) taxAmount = 0;
            else if (co2Emissions <= 75) taxAmount = 15;
            else if (co2Emissions <= 90) taxAmount = 95;
            else if (co2Emissions <= 100) taxAmount = 115;
            else if (co2Emissions <= 110) taxAmount = 135;
            else if (co2Emissions <= 130) taxAmount = 155;
            else if (co2Emissions <= 150) taxAmount = 195;
            else if (co2Emissions <= 170) taxAmount = 505;
            else if (co2Emissions <= 190) taxAmount = 820;
            else if (co2Emissions <= 225) taxAmount = 1230;
            else if (co2Emissions <= 255) taxAmount = 1750;
            else taxAmount = 2060;
          } else if (fuelType === "Diesel") {
              if (co2Emissions === 0) taxAmount = 0;
              else if (co2Emissions <= 50) taxAmount = 25;
              else if (co2Emissions <= 75) taxAmount = 105;
              else if (co2Emissions <= 90) taxAmount = 125;
              else if (co2Emissions <= 100) taxAmount = 145;
              else if (co2Emissions <= 110) taxAmount = 165;
              else if (co2Emissions <= 130) taxAmount = 205;
              else if (co2Emissions <= 150) taxAmount = 515;
              else if (co2Emissions <= 170) taxAmount = 830;
              else if (co2Emissions <= 190) taxAmount = 1240;
              else if (co2Emissions <= 225) taxAmount = 1760;
              else taxAmount = 2070;
          }
    } else if (listPrice < 40000 && featureSwitches.storyFourSwitch) {
        if (fuelType === "Petrol" || fuelType === "Diesel") taxAmount = 140;
        if (fuelType === "Electric") taxAmount = 0;
        if (fuelType === "Alternative fuel") taxAmount = 130;
    } else if (featureSwitches.storyFiveSwitch) {
      if (fuelType === "Diesel" || fuelType === "Petrol") {taxAmount = 450;}
      else if (fuelType === "Electric") taxAmount = 310;
      else if (fuelType === "Alternative fuel") taxAmount = 440;
       }
    return taxAmount;
  }
};

module.exports = {
  DefaultTaxCalculator,
};
