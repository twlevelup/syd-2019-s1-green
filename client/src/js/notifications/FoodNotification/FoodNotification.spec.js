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

  describe("#faceButtonPress", () => {
    it("should bring user to a more detailed page of food available", () => {
      const page = new FoodNotification();
      spyOn(page, 'navigate');
      page.faceButtonEvent();
      expect(NotificationHub.hide).toHaveBeenCalled();
      expect(page.navigate).toHaveBeenCalledWith('foodInformation');
    });
  });
});
