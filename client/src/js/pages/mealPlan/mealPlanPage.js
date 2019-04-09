const BasePage = require('watch-framework').BasePage;
const StorageHub = require('watch-framework').StorageHub;

class MealPlanPage extends BasePage {
  template = require('./mealPlanPage.hbs');

  topButtonEvent() {
    this.navigate('/');
  }
    pageWillLoad() {
      this.meals = StorageHub.getData('meals');
    }

    rightButtonEvent() {
      let current = 99999;
      let meals = StorageHub.getData('meals');

      meals.forEach(function (meal) {
        if (meal.selected == "selected") {
            current = meal.id;
            // meal.selected.setData("unselected");
            meal.selected = "notSelected";
            console.log(meals)
            // TODO select next item
            // meals[current+1].selected = "selected";
        }
      });
    }

}



module.exports = MealPlanPage;


