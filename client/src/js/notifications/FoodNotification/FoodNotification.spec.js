const FoodNotification = require("./FoodNotification");
const NotificationHub = require("watch-framework").NotificationHub;
const hideSpy = jest.spyOn(NotificationHub, 'hide');

describe("FoodNotification", () => {
  describe("#render", () => {
    it("should render my page correctly", () => {
      const notification = new FoodNotification();
      expect(notification.render()).toContain("Food Available");
    });
  });
});
