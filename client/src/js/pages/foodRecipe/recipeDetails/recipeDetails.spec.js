const RecipeDetails = require('./recipeDetails');

describe('Food Recipe Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the correct text', () => {
      const page = new RecipeDetails();
      expect(page.render()).toContain('Recipe Details');
    });
  });

   describe('#topButtonEvent', () => {
    it('goes to root page', () => {
      const page = new RecipeDetails();
      spyOn(page, 'navigate');

      page.topButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });
  });
