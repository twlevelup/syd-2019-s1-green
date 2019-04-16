const DeliveryPage = require('./deliveryPage');
const StorageHub = require('watch-framework').StorageHub;

describe('The Delivery Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

    describe('#render', () => {
      it('should contain the correct text', () => {
        const page = new DeliveryPage();
        expect(page.render()).toContain('Food will be delivered at 6pm');
      });
    });
});
