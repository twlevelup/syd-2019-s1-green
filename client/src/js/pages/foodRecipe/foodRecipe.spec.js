const FoodRecipe = require('./foodRecipe');

describe('Food Recipe Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new FoodRecipe();
      expect(page.render()).toContain('This is the food recipe page');
    });
  });

   describe('#rightButtonEvent', () => {
    it('goes to root page', () => {
      const page = new FoodRecipe();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

    describe('#leftButtonEvent', () => {
      it('left button goes back', () => {
        const page = new FoodRecipe();
        spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });


   describe('#faceButtonEvent', () => {
    it('goes to recipe details page', () => {
      const page = new FoodRecipe();
      spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('recipeDetails');
    });
  });


  });
