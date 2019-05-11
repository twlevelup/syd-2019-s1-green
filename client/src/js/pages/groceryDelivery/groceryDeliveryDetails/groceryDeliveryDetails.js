const BasePage = require('watch-framework').BasePage;

class GroceryDeliveryDetails extends BasePage {
  template = require('./groceryDeliveryDetails.hbs');

  rightButtonEvent() {
    this.navigate("/");
  }

  leftButtonEvent() {
    this.navigate("groceryDelivery");
  }
}



module.exports = GroceryDeliveryDetails;
