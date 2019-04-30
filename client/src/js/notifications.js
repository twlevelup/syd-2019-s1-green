const AlertNotification = require('./notifications/AlertNotification/AlertNotification');
const FoodNotification = require('./notifications/FoodNotification/FoodNotification');

const notifications = [
  {
    type: "alert",
    label: "Alert",
    defaultValue: "This is a test alert",
    view: AlertNotification,
  },
  {
    type: "base",
    label: "Base",
    defaultValue: "This is a test base notification",
  },
  {
    type: "foodAvailable",
    label: "Food Nearby",
    defaultValue: "Hi, there is leftover food nearby at location [XX]. Get in quick for a yummy meal!",
    view: FoodNotification,
  },

];


module.exports = notifications;

//IDEAS (from James)

// 1. Write a json file of restaurant addresses which the watch periodically reads from and checks if the web browser is within the location
// 2. Create generic styles to import from for different pages (ie a style guide)
// 3.
