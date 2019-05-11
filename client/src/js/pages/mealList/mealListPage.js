const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class MealListPage extends BasePage {
  template = require('./mealListPage.hbs');

  leftButtonEvent() {
    this.navigate('/');
  }

  rightButtonEvent() {
    this.navigate('/');
  }

  faceButtonEvent(){
    this.navigate('mealQuantity');
  }

  pageWillLoad() {
    this.meals = StorageHub.getData('meals');
  }


}



module.exports = MealListPage;


