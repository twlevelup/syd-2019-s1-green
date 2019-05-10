const BasePage = require("watch-framework").BasePage;

class RecipeDetails extends BasePage {
  template = require("./recipeDetails.hbs");

  rightButtonEvent() {
    this.navigate("/");
  }

  leftButtonEvent() {
    this.navigate("foodRecipe");
  }

  // topButtonEvent() {
  //   this.watchFace.scrollTop -= 40;
  // }

  // bottomButtonEvent() {
  //   this.watchFace.scrollTop += 40;
  // }
}

module.exports = RecipeDetails;
