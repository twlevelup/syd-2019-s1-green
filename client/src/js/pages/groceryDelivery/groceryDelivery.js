const BasePage = require("watch-framework").BasePage;
const StorageHub = require("watch-framework").StorageHub;

class GroceryDelivery extends BasePage {
  template = require("./groceryDelivery.hbs");

  pageWillLoad() {
    console.log(" *** GroceryDelivery Page Will Load ***");

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
    if (this.selectedBundle < this.groceryBundle.length - 1) {
      StorageHub.setData("selectedBundle", this.selectedBundle + 1);
    } else {
      StorageHub.setData("selectedBundle", 0);
    }
    this.navigate("groceryDelivery", true);

    console.log(this.selectedBundle);
    console.log(StorageHub.getData("selectedBundle"));
    console.log(this.groceryBundle);
    console.log(StorageHub.getData("groceryBundle"));
  }
}

module.exports = GroceryDelivery;
