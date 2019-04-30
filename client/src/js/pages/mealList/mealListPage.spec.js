const MealListPage = require('./mealListPage');
const StorageHub = require('watch-framework').StorageHub;

describe('The Meal list Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new MealListPage();
      expect(page.render()).toContain('This is the meal list page');
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

    it('should render my Pasta', () => {
      const meals = [
        { name: 'Pizza', id: '0', selected: "selected" },
        { name: 'Pasta', id: '1', selected: "notSelected" },
        { name: 'Salad', id: '2', selected: "notSelected" },
      ];
      StorageHub.setData('meals', meals)
      const page = new MealListPage();
      page.pageWillLoad();
      expect(page.render()).toContain("Pasta</span>");;
    });

    it('should render my in red Pizza', () => {
      const meals = [
        { name: 'Pizza', id: '0', selected: "selected" },
        { name: 'Pasta', id: '1', selected: "notSelected" },
        { name: 'Salad', id: '2', selected: "notSelected" },
      ];
      StorageHub.setData('meals', meals)
      const page = new MealListPage();
      page.pageWillLoad();
      expect(page.render()).toContain('<span class=selected>Pizza</span>');
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

   describe('#topButtonEvent', () => {
    it('goes to root page', () => {
      const page = new MealListPage();
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
  });
