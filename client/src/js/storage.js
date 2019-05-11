const StorageHub = require("watch-framework").StorageHub;

StorageHub.setData("hello", "world");

StorageHub.setData("meals", [
  { name: "Pizza", id: "0", selected: "selected", diet: "Contains dairy" }
]);

StorageHub.setData("groceryBundle", [
  {
    name: "Healthy Dinner Pack",
    contents: "bag of salad, two tomatoes, one cucumber, three beef steaks"
  },
  {
    name: "Fun time Dinner Pack",
    contents: "bag of chips, two burgers, one coke, three ice-creams"
  },
  {
    name: "Vegetarian Dinner Pack",
    contents: "purple cabbage, spinach, sweet potatoes, tofu"
  }
]);


StorageHub.setData("timeFrames", [
  {
    time: "6 AM - 10 AM"
  },
  {
    time: "12 PM - 4 PM"
  },
  {
    time: "6 PM - 10 PM"
  }
]);
