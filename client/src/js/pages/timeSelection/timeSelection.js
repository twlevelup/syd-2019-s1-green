const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class TimeSelectionPage extends BasePage {
  template = require('./timeSelection.hbs');


  leftButtonEvent() {
    this.navigate('mealQuantity');
  }

  rightButtonEvent() {
    this.navigate('/');
  }

  faceButtonEvent(){
    this.navigate('delivery');
  }

  pageWillLoad() {
      StorageHub.setData("selectedTimeFrame", 0);
      this.selectedTimeFrame = StorageHub.getData("selectedTimeFrame");

      this.timeFrames = StorageHub.getData("timeFrames").map(
        (bundle, index) => ({
          ...bundle,
          selected: index == this.selectedTimeFrame
        })
      );
  }

  bottomButtonEvent() {
    let selectedTimeFrame = StorageHub.getData("selectedTimeFrame");

    if (selectedTimeFrame < this.timeFrames.length - 1) {
      StorageHub.setData("selectedTimeFrame", selectedTimeFrame + 1);
    } else {
      StorageHub.setData("selectedTimeFrame", 0);
    }

    this.updategroceryBundleList()
  }

  updategroceryBundleList() {
    let selectedTimeFrame = StorageHub.getData("selectedTimeFrame");
    let groceryBundleList = document.getElementById('groceryBundleList')
    let times = groceryBundleList.getElementsByTagName('li')

    if (selectedTimeFrame == 0) {
      times[this.timeFrames.length - 1].classList.remove('selectedItem')
      times[selectedTimeFrame].classList.add('selectedItem')
    } else {
      times[selectedTimeFrame - 1].classList.remove('selectedItem')
      times[selectedTimeFrame].classList.add('selectedItem')
    }
  }


}



module.exports = TimeSelectionPage;


