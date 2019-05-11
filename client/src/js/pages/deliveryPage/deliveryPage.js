const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class DeliveryPage extends BasePage {
  template = require('./deliveryPage.hbs');


  rightButtonEvent() {
    this.navigate('/');
  }
  leftButtonEvent() {
    this.navigate("timeSelection");
  }

   pageWillLoad() {
      this.selectedTimeFrame = StorageHub.getData("selectedTimeFrame");

      this.timeFrames = StorageHub.getData("timeFrames").map(
        (bundle, index) => ({
          ...bundle,
          selected: index == this.selectedTimeFrame
        })
      );
  }

}

module.exports = DeliveryPage;
