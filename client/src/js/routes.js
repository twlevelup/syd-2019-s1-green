const HomePage = require('./pages/homePage/homePage');
// const ContactsPage = require('./pages/contactsPage/contactsPage');
const MealPlanPage = require('./pages/mealPlan/mealPlanPage');
const TeamPage = require('./pages/teamPage/teamPage');
const FourOhFour = require('./pages/404Page/404Page');
const FoodRecipe = require('./pages/foodRecipe/foodRecipe');
const FoodInformation = require('./pages/foodInformation/FoodInformation');
const GroceryDeliveryPage = require('./pages/groceryDelivery/groceryDeliveryPage');
const DeliveryPage = require('./pages/deliveryPage/deliveryPage');

module.exports = {
  '/': HomePage,
//   'contacts': ContactsPage,
  'mealPlan': MealPlanPage,
  'team': TeamPage,
  '404': FourOhFour,
  'foodRecipe': FoodRecipe,
  'foodInformation': FoodInformation,
  'groceryDelivery': GroceryDeliveryPage,
  'delivery': DeliveryPage
};
