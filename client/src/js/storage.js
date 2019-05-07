const StorageHub = require('watch-framework').StorageHub;

StorageHub.setData('hello', 'world')

StorageHub.setData('meals', [
  { name: 'Pizza', id: '0', selected: "selected", diet: "Contains dairy" },
  ])


StorageHub.setData('groceryBundle', [
  {
    name: 'Healthy Dinner Pack',
    contents: 'bag of salad, two tomatoes, one cucumber, three beef steaks'
  },
  {
    name: 'Fun time Dinner Pack',
    contents: 'bag of chips, two burgers, one coke, three ice-creams'
  },
])
