const BasePage = require('watch-framework').BasePage;
const StorageHub = require("watch-framework").StorageHub;


class NutritionTracker extends BasePage {
  template = require('./nutritionTracker.hbs');

    pageWillLoad() {
      this.cals =  StorageHub.getData('currCalorie')+ StorageHub.getData('addCalorie')
  }



  rightButtonEvent() {
    this.navigate('/');
    StorageHub.setData('currCalorie', this.cals)
  }

  leftButtonEvent() {
    this.navigate('/');
    StorageHub.setData('currCalorie', this.cals)
  }

  faceButtonEvent() {
  this.navigate('calorieCounter');
  StorageHub.setData('currCalorie', this.cals)
  }


}



module.exports = NutritionTracker;
