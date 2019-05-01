const GroceryDeliveryDetails = require('./groceryDeliveryDetails');

describe('Delivery Details Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new GroceryDeliveryDetails();
      expect(page.render()).toContain('Delivery Details');
    });
  });


//   describe('#bottomButtonEvent', () => {
//     it('scrolls page down', () => {

//       const page = new GroceryDeliveryDetails({ watchFace });

//       page.bottomButtonEvent();

//       expect(watchFace.scrollTop).toEqual(40);

//    });

//   });
  });
