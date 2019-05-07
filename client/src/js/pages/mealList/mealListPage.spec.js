const MealListPage = require('./mealListPage');
const StorageHub = require('watch-framework').StorageHub;

describe('The Meal list Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render an unordered list', () => {
      const meals = [
        { name: 'Pizza', id: '0', selected: "selected", diet: "Contains dairy" },
        { name: 'Pasta', id: '1', selected: "notSelected", diet: "Contains dairy" },
        { name: 'Salad', id: '2', selected: "notSelected", diet: "Contains dairy" },
      ];
      StorageHub.setData('meals', meals)
      const page = new MealListPage();
      page.pageWillLoad();
      expect(page.render()).toContain('<ul>');
    });

    it('should render my Pizza', () => {
      const meals = [
        { name: 'Pizza', id: '0' },
        { name: 'Pasta', id: '1' },
        { name: 'Salad', id: '2' },
      ];
      StorageHub.setData('meals', meals)
      const page = new MealListPage();
      page.pageWillLoad();
      expect(page.render()).toContain("Pizza</span>");;
    });

    it('should have Pizza selected', () => {
      const meals = [
        { name: 'Pizza', id: '0', selected: "selected" },
        { name: 'Pasta', id: '1', selected: "notSelected" },
        { name: 'Salad', id: '2', selected: "notSelected" },
      ];
      StorageHub.setData('meals', meals)
      const page = new MealListPage();
      page.pageWillLoad();
      expect(page.render()).toContain('<li class=selected>');
    });

    // TODO - working code
    // it('Right button click should toggle css class first and second items', () => {
    //   const meals = [
    //     { name: 'Pizza', id: '0', selected: "selected" },
    //     { name: 'Rice', id: '1', selected: "notSelected" },
    //     { name: 'Salad', id: '2', selected: "notSelected" },
    //   ];
    //   StorageHub.setData('meals', meals)
    //   const page = new MealListPage();
    //   page.pageWillLoad();
    //   page.rightButtonEvent();
    //   expect(page.render()).toContain('<span class=notSelected>Pizza</span>');
    //   expect(page.render()).toContain('<span class=selected>Rice</span>');
    // });
  });

   describe('#leftButtonEvent', () => {
    it('goes to root page', () => {
      const page = new MealListPage();
      spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

   describe('#rightButtonEvent', () => {
    it('goes to root page', () => {
      const page = new MealListPage();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

  describe('#faceButtonEvent', () => {
    it('goes to delivery page', () => {
      const page = new MealListPage();
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('delivery');
    });
  });


});
