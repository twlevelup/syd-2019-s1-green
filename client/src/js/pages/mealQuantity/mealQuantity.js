const BasePage = require('watch-framework').BasePage;

class FoodQuantity extends BasePage {
  template = require('./mealQuantity.hbs');
  quantity = 0;

  leftButtonEvent() {
    this.navigate('mealList');
  }

  rightButtonEvent() {
    this.navigate('/');
  }

  faceButtonEvent() {
    this.navigate('timeSelection');
  }

  topButtonEvent() {
    this.quantity = this.quantity+1
    console.log(this.quantity)
    this.updateQuantity()
  }

  bottomButtonEvent() {
    if (this.quantity <= 1) {
      return;
    }
    this.quantity = this.quantity-1
    console.log(this.quantity)
    this.updateQuantity()
  }

  updateQuantity() {
    document.getElementById("quantity").textContent = this.quantity;
  }
}

module.exports = FoodQuantity;
