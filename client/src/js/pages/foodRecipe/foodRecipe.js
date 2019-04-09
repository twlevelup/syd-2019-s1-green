const BasePage = require('watch-framework').BasePage;

class FoodRecipe extends BasePage {
  template = require('./foodRecipe.hbs');

  topButtonEvent() {
    this.navigate('/');
  }
}



module.exports = FoodRecipe;
