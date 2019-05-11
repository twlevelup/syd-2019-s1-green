const GroceryDeliveryDetails = require('./groceryDeliveryDetails');

describe('Delivery Details Page', () => {
  let watchFace;
  let page;

  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
    page = new GroceryDeliveryDetails();
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      expect(page.render()).toContain('Delivery Details');
    });
  });


  describe("#buttons", () => {
    it("right button goes to root page", () => {
      spyOn(page, "navigate");

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("/");
    });

    it("left button goes to GroceryDelivery page", () => {
      spyOn(page, "navigate");

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("groceryDelivery");
    });
  });
});
