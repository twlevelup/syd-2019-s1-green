const HomePage = require('./pages/homePage/homePage');
// const ContactsPage = require('./pages/contactsPage/contactsPage');
const MealListPage = require('./pages/mealList/mealListPage');
const TeamPage = require('./pages/teamPage/teamPage');
const FourOhFour = require('./pages/404Page/404Page');
const FoodRecipe = require('./pages/foodRecipe/foodRecipe');
const FoodInformation = require('./pages/foodInformation/FoodInformation');
const GroceryDeliveryPage = require('./pages/groceryDelivery/groceryDeliveryPage');
const DeliveryPage = require('./pages/deliveryPage/deliveryPage');
const RecipeDetails = require('./pages/foodRecipe/recipeDetails/recipeDetails');
const FoodQuantity = require('./pages/foodQuantity/FoodQuantity');



module.exports = {
  '/': HomePage,
//   'contacts': ContactsPage,
  'mealList': MealListPage,
  'team': TeamPage,
  '404': FourOhFour,
  'foodRecipe': FoodRecipe,
  'foodInformation': FoodInformation,
  'groceryDelivery': GroceryDeliveryPage,
  'delivery': DeliveryPage,
  'groceryDelivery': GroceryDeliveryPage,
  'recipeDetails': RecipeDetails,
  'foodQuantity': FoodQuantity
};
