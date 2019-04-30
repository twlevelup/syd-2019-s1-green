const DeliveryDetails = require('./deliveryDetails');

describe('Delivery Details Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new DeliveryDetails();
      expect(page.render()).toContain('Delivery Details');
    });
  });


//   describe('#bottomButtonEvent', () => {
//     it('scrolls page down', () => {

//       const page = new DeliveryDetails({ watchFace });

//       page.bottomButtonEvent();

//       expect(watchFace.scrollTop).toEqual(40);

//    });

//   });
  });
