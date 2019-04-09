const HomePage = require('./pages/homePage/homePage');
// const ContactsPage = require('./pages/contactsPage/contactsPage');
const MealPlanPage = require('./pages/mealPlan/mealPlanPage');
const TeamPage = require('./pages/teamPage/teamPage');
const FourOhFour = require('./pages/404Page/404Page');
const FoodRecipe = require('./pages/foodRecipe/foodRecipe');

module.exports = {
  '/': HomePage,
//   'contacts': ContactsPage,
  'mealPlan': MealPlanPage,
  'team': TeamPage,
  '404': FourOhFour,
  'foodRecipe': FoodRecipe
};
