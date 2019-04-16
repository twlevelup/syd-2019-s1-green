const BasePage = require('watch-framework').BasePage;

class FoodRecipe extends BasePage {
  template = require('./foodRecipe.hbs');

  topButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('recipeDetails');
  }

}



module.exports = FoodRecipe;
