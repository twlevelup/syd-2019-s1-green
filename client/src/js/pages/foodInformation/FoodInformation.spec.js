const FoodInformation = require("./FoodInformation");
const NotificationHub = require("watch-framework").NotificationHub;
const hideSpy = jest.spyOn(NotificationHub, 'hide');

describe("FoodInformation", () => {
  describe("#render", () => {
    it("should render my page correctly", () => {
      const page = new FoodInformation();
      expect(page.render()).toContain("Chicken Pesto Pasta");
    });
  });
});
