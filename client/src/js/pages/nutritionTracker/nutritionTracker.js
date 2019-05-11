const BasePage = require('watch-framework').BasePage;

class NutritionTracker extends BasePage {
  template = require('./nutritionTracker.hbs');

  rightButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('/');
  }

}



module.exports = NutritionTracker;
