const BaseNotification = require("watch-framework").BaseNotification;
const NotificationHub = require("watch-framework").NotificationHub;
module.exports = class FoodNotification extends BaseNotification {
  template = require("./FoodNotification.hbs");

  faceButtonEvent() {
    NotificationHub.hide()
    this.navigate('foodInformation');
  }
};
