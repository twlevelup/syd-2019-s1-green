const BasePage = require('watch-framework').BasePage;

class MealPlanPage extends BasePage {
  template = require('./mealPlanPage.hbs');

  topButtonEvent() {
    this.navigate('/');
  }
}



module.exports = MealPlanPage;


