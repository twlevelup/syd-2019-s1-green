const FoodRecipe = require('./foodRecipe');

describe('Food Recipe Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the header text', () => {
      const page = new FoodRecipe();
      expect(page.render()).toContain('Food Recipe');
    });

    it('should contain the recipe text', () => {
      const page = new FoodRecipe();
      expect(page.render()).toContain('Cheese Cake');
    });

    it('should contain selected recipe styling', () => {
      const page = new FoodRecipe();
      expect(page.render()).toContain('selectedRecipe');
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
