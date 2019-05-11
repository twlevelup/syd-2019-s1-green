const MealQuantity = require("./mealQuantity");
const NotificationHub = require("watch-framework").NotificationHub;
const hideSpy = jest.spyOn(NotificationHub, 'hide');

describe("MealQuantity", () => {
  describe("#render", () => {
    it("should render my page correctly", () => {
      const page = new MealQuantity();
      expect(page.render()).toContain("QTY:");
    });
  });

   describe('#rightButtonEvent', () => {
    it('goes to root page', () => {
      const page = new MealQuantity();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#topButtonEvent', () => {
    it('increases quantity by 1 and re-renders it', () => {
      const page = new MealQuantity();
      page.updateQuantity = jest.fn();
      const initialQuantity = page.quantity

      page.topButtonEvent();
      expect(page.quantity).toEqual(initialQuantity + 1)
      expect(page.updateQuantity).toBeCalled();
    });
  });

  describe('#BottomButtonEvent', () => {
    it('decreases quantity by 1 and re-renders it', () => {
      const page = new MealQuantity();
      page.updateQuantity = jest.fn();
      page.quantity = 2
      const initialQuantity = page.quantity

      page.bottomButtonEvent();
      expect(page.quantity).toEqual(initialQuantity - 1)
      expect(page.updateQuantity).toBeCalled();
    });
  });

   describe('#faceButtonEvent', () => {
    it('goes to previous page', () => {
      const page = new MealQuantity();
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('delivery');
    });
  });
});
