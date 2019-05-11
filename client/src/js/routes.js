const HomePage = require('./pages/homePage/homePage');
// const ContactsPage = require('./pages/contactsPage/contactsPage');
const MealListPage = require('./pages/mealList/mealListPage');
const TeamPage = require('./pages/teamPage/teamPage');
const FourOhFour = require('./pages/404Page/404Page');
const FoodRecipe = require('./pages/foodRecipe/foodRecipe');
const FoodInformation = require('./pages/foodInformation/FoodInformation');
const GroceryDelivery = require('./pages/groceryDelivery/groceryDelivery');
const GroceryDeliveryDetails = require('./pages/groceryDelivery/groceryDeliveryDetails/groceryDeliveryDetails');
const DeliveryPage = require('./pages/deliveryPage/deliveryPage');
const RecipeDetails = require('./pages/foodRecipe/recipeDetails/recipeDetails');
const FoodQuantity = require('./pages/foodQuantity/FoodQuantity');
const MealQuantity = require('./pages/mealQuantity/mealQuantity');
const NutritionTracker = require('./pages/nutritionTracker/nutritionTracker');
const TimeSelection = require('./pages/timeSelection/timeSelection');



module.exports = {
  '/': HomePage,
  'mealList': MealListPage,
  'team': TeamPage,
  '404': FourOhFour,
  'foodRecipe': FoodRecipe,
  'foodInformation': FoodInformation,
  'groceryDelivery': GroceryDelivery,
  'groceryDeliveryDetails': GroceryDeliveryDetails,
  'delivery': DeliveryPage,
  'recipeDetails': RecipeDetails,
  'foodQuantity': FoodQuantity,
  'mealQuantity' : MealQuantity,
  'nutritionTracker': NutritionTracker,
  'timeSelection' : TimeSelection
};
