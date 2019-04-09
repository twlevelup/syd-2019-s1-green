const StorageHub = require('watch-framework').StorageHub;

StorageHub.setData('hello', 'world')

StorageHub.setData('meals', [
  { name: 'Pizza', id: '0', selected: "selected" },
  { name: 'Pasta', id: '1', selected: "notSelected" },
  { name: 'Salad', id: '2', selected: "notSelected" },
  ])
