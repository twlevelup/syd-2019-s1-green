const BasePage = require('watch-framework').BasePage;

class RecipeDetails extends BasePage {
  template = require('./recipeDetails.hbs');

  topButtonEvent() {
    this.navigate('/');
  }

  leftButtonEvent() {
    this.navigate('/');
  }

  topButtonEvent() {
    this.watchFace.scrollTop -= 40;
  }

  bottomButtonEvent() {
    this.watchFace.scrollTop += 40;
  }

}



module.exports = RecipeDetails;
