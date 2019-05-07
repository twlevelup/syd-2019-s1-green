const FoodQuantity = require("./FoodQuantity");
const NotificationHub = require("watch-framework").NotificationHub;
const hideSpy = jest.spyOn(NotificationHub, 'hide');

describe("FoodQuantity", () => {
  describe("#render", () => {
    it("should render my page correctly", () => {
      const page = new FoodQuantity();
      expect(page.render()).toContain("QTY:");
    });

    // it("should show quantity of 1", () => {
    //   const page = new FoodQuantity();
    //   expect(page.quantity).toEqual(1);
    // })
  });

   describe('#rightButtonEvent', () => {
    it('goes to root page', () => {
      const page = new FoodQuantity();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#topButtonEvent', () => {
    it('increases quantity by 1 and re-renders it', () => {
      const page = new FoodQuantity();
      page.updateQuantity = jest.fn();
      const initialQuantity = page.quantity

      page.topButtonEvent();
      expect(page.quantity).toEqual(initialQuantity + 1)
      expect(page.updateQuantity).toBeCalled();
    });
  });

  describe('#BottomButtonEvent', () => {
    it('decreases quantity by 1 and re-renders it', () => {
      const page = new FoodQuantity();
      page.updateQuantity = jest.fn();
      page.quantity = 2
      const initialQuantity = page.quantity

      page.bottomButtonEvent();
      expect(page.quantity).toEqual(initialQuantity - 1)
      expect(page.updateQuantity).toBeCalled();
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
});
