const groceryDeliveryPage = require('./groceryDeliveryPage');
const StorageHub = require('watch-framework').StorageHub;

describe('groceryDeliveryPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
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
      const page = new groceryDeliveryPage();
      page.pageWillLoad();
      expect(page.render()).toContain('<h1>Grocery Bundles:</h1>');
      expect(page.render()).toContain('Healthly Dinner Pack:');
    });
  });

  // describe('#topButtonEvent', () => {
  //   it('goes to root page', () => {
  //     const page = new groceryDeliveryPage();
  //     spyOn(page, 'navigate');

  //     page.topButtonEvent();
  //     expect(page.navigate).toHaveBeenCalledWith('/');
  //   });
  // });
});
