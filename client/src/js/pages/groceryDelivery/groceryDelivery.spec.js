const groceryDelivery = require('./groceryDelivery');
const StorageHub = require('watch-framework').StorageHub;

describe('groceryDelivery', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render navigation', () => {
      const page = new groceryDelivery();
      // expect(page.render()).toContain("navTopIcon");
      expect(page.render()).toContain("navRightIcon");
      // expect(page.render()).toContain("navBottomIcon");
      expect(page.render()).toContain("navLeftIcon");
    });
  });

  describe('#render', () => {
    it('should render my with a specific grocery bundle', () => {
      const groceryBundle = [
        {
          name: 'Healthly Dinner Pack',
          contents: 'bag of salad, two tomatoes, one cucumber, three beef steaks'
        },
      ];
      StorageHub.setData('groceryBundle', groceryBundle)
      const page = new groceryDelivery();
      page.pageWillLoad();
      expect(page.render()).toContain('Grocery Bundles');
      expect(page.render()).toContain('Healthly Dinner Pack:');
    });
  });

  describe('#buttons', () => {
    it('right button goes to root page', () => {
      const page = new groceryDelivery();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });

    it('left button goes to root page', () => {
      const page = new groceryDelivery();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });

    it('face button goes to root page', () => {
      const page = new groceryDelivery();
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('groceryDeliveryDetails');
    });
  });
});
