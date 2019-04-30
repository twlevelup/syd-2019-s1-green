const BasePage = require('watch-framework').BasePage;

class FoodRecipe extends BasePage {
  template = require('./foodRecipe.hbs');

  rightButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('/');
  }

  faceButtonEvent() {
    this.navigate('recipeDetails')
  }

}



module.exports = FoodRecipe;
