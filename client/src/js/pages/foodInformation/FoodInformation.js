const BasePage = require('watch-framework').BasePage;

class FoodInformation extends BasePage {
  template = require('./FoodInformation.hbs');

  rightButtonEvent() {
    this.navigate('/');
  }
    faceButtonEvent() {
    this.navigate('foodQuantity');
  }
}

module.exports = FoodInformation;
