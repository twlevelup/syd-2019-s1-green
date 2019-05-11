const BasePage = require('watch-framework').BasePage;
const StorageHub = require("watch-framework").StorageHub;


class CalorieCounter extends BasePage {
  template = require('./calorieCounter.hbs');
  quantity = 0;

  rightButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('nutritionTracker');
  }

  topButtonEvent() {
    this.quantity = this.quantity+100
    console.log(this.quantity)
    this.updateQuantity()
    StorageHub.setData('addCalorie', this.quantity)
  }

  bottomButtonEvent() {
    if (this.quantity <= 1) {
      return;
    }
    this.quantity = this.quantity-100
    console.log(this.quantity)
    this.updateQuantity()
    StorageHub.setData('addCalorie', this.quantity)
  }

  updateQuantity() {
    document.getElementById("quantity").textContent = this.quantity;
  }
}

module.exports = CalorieCounter;
