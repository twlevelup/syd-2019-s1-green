const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class GroceryDeliveryPage extends BasePage {
  template = require('./groceryDeliveryPage.hbs');

  pageWillLoad() {
    this.groceryBundle = StorageHub.getData('groceryBundle')
  }

  topButtonEvent() {
    this.navigate('/');
  }
}

module.exports = GroceryDeliveryPage;
