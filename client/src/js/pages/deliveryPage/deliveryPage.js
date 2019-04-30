const BasePage = require('watch-framework').BasePage;

class DeliveryPage extends BasePage {
  template = require('./deliveryPage.hbs');


  rightButtonEvent() {
    this.navigate('/');
  }

}

module.exports = DeliveryPage;
