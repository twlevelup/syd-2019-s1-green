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

   describe('#rightButtonEvent', () => {
    it('goes to root page', () => {
      const page = new FoodInformation();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#faceButtonEvent', () => {
    it('goes to foodQuantity page', () => {
      const page = new FoodInformation();
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('foodQuantity');
    });
  });
});
