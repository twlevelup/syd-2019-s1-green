const StorageHub = require('watch-framework').StorageHub;

StorageHub.setData('hello', 'world')

StorageHub.setData('meals', [
  { name: 'Pizza', id: '0', selected: "selected" },
  { name: 'Pasta', id: '1', selected: "notSelected" },
  { name: 'Salad', id: '2', selected: "notSelected" },
  ])


StorageHub.setData('groceryBundle', [
  {   
    name: 'Healthly Dinner Pack',
    contents: 'bag of salad, two tomatoes, one cucumber, three beef steaks' 
  },
])