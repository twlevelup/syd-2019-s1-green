const FoodQuantity = require("./FoodQuantity");
const NotificationHub = require("watch-framework").NotificationHub;
const hideSpy = jest.spyOn(NotificationHub, 'hide');

describe("FoodQuantity", () => {
  describe("#render", () => {
    it("should render my page correctly", () => {
      const page = new FoodQuantity();
      expect(page.render()).toContain("QTY:");
    });
  });
});

   describe('#rightButtonEvent', () => {
    it('goes to root page', () => {
      const page = new FoodQuantity();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

   describe('#leftButtonEvent', () => {
    it('goes to previous page', () => {
      const page = new FoodQuantity();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('FoodInformation');
    });
  });