const BaseNotification = require("watch-framework").BaseNotification;
const NotificationHub = require("watch-framework").NotificationHub;
module.exports = class FoodNotification extends BaseNotification {
  template = require("./FoodNotification.hbs");

  leftButtonEvent() {
    console.log("LEFT");
    NotificationHub.hide();
  }
};
