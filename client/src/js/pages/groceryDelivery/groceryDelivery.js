const BasePage = require("watch-framework").BasePage;
const StorageHub = require("watch-framework").StorageHub;

class GroceryDelivery extends BasePage {
  template = require("./groceryDelivery.hbs");

  pageWillLoad() {
    if (StorageHub.getData("loaded") != true) {
      StorageHub.setData("selectedBundle", 0);
      StorageHub.setData("loaded", true);
    }
    this.selectedBundle = StorageHub.getData("selectedBundle");

    this.groceryBundle = StorageHub.getData("groceryBundle").map(
      (bundle, index) => ({
        ...bundle,
        selected: index == this.selectedBundle
      })
    );
  }

  rightButtonEvent() {
    this.navigate("/");
  }

  leftButtonEvent() {
    this.navigate("/");
  }

  faceButtonEvent() {
    this.navigate("groceryDeliveryDetails");
  }

  bottomButtonEvent() {
    let selectedBundle = StorageHub.getData("selectedBundle");

    if (selectedBundle < this.groceryBundle.length - 1) {
      StorageHub.setData("selectedBundle", selectedBundle + 1);
    } else {
      StorageHub.setData("selectedBundle", 0);
    }

    this.updategroceryBundleList()
  }

  updategroceryBundleList() {
    let selectedBundle = StorageHub.getData("selectedBundle");
    let groceryBundleList = document.getElementById('groceryBundleList')
    let bundles = groceryBundleList.getElementsByTagName('li')

    if (selectedBundle == 0) {
      bundles[this.groceryBundle.length - 1].classList.remove('selectedItem')
      bundles[selectedBundle].classList.add('selectedItem')
    } else {
      bundles[selectedBundle - 1].classList.remove('selectedItem')
      bundles[selectedBundle].classList.add('selectedItem')
    }
  }
}

module.exports = GroceryDelivery;
