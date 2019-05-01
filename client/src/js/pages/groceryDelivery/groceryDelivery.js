const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class GroceryDelivery extends BasePage {
  template = require('./groceryDelivery.hbs');

  pageWillLoad() {
    this.groceryBundle = StorageHub.getData('groceryBundle')
  }

  rightButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('/');
  }

  faceButtonEvent() {
    this.navigate('groceryDeliveryDetails');
  }
}

module.exports = GroceryDelivery;
