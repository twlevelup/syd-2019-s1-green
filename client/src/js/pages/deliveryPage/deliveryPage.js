const BasePage = require('watch-framework').BasePage;

class DeliveryPage extends BasePage {
  template = require('./deliveryPage.hbs');


  rightButtonEvent() {
    this.navigate('/');
  }
  leftButtonEvent() {
    this.navigate("mealList");
  }

}

module.exports = DeliveryPage;