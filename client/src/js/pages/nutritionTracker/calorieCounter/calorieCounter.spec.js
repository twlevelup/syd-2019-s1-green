const CalorieCounter = require("./calorieCounter");
const NotificationHub = require("watch-framework").NotificationHub;
const hideSpy = jest.spyOn(NotificationHub, 'hide');

describe("FoodQuantity", () => {
  describe("#render", () => {
    it("should render my page correctly", () => {
      const page = new CalorieCounter();
      expect(page.render()).toContain("Calories to Add");
    });

    // it("should show quantity of 1", () => {
    //   const page = new FoodQuantity();
    //   expect(page.quantity).toEqual(1);
    // })
  });

   describe('#rightButtonEvent', () => {
    it('goes to root page', () => {
      const page = new CalorieCounter();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#topButtonEvent', () => {
    it('increases quantity by 100 and re-renders it', () => {
      const page = new CalorieCounter();
      page.updateQuantity = jest.fn();
      const initialQuantity = page.quantity

      page.topButtonEvent();
      expect(page.quantity).toEqual(initialQuantity + 100)
      expect(page.updateQuantity).toBeCalled();
    });
  });

  describe('#BottomButtonEvent', () => {
    it('decreases quantity by 100 and re-renders it', () => {
      const page = new CalorieCounter();
      page.updateQuantity = jest.fn();
      page.quantity = 2
      const initialQuantity = page.quantity

      page.bottomButtonEvent();
      expect(page.quantity).toEqual(initialQuantity - 100)
      expect(page.updateQuantity).toBeCalled();
    });
  });

   describe('#leftButtonEvent', () => {
    it('goes to previous page', () => {
      const page = new CalorieCounter();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('nutritionTracker');
    });
  });
});
