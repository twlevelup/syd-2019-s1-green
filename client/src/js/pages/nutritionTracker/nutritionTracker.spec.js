const NutritionTracker = require('./nutritionTracker');

describe('Nutrition Tracker Page', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should contain the header text', () => {
      const page = new NutritionTracker();
      expect(page.render()).toContain('Nutrition Tracker');
    });

  });

   describe('#rightButtonEvent', () => {
    it('goes to root page', () => {
      const page = new NutritionTracker();
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

    describe('#leftButtonEvent', () => {
      it('left button goes back', () => {
        const page = new NutritionTracker();
        spyOn(page, 'navigate');

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('/');
    });
  });

    describe('#faceButtonEvent', () => {
      it('goes to calorie counter page', () => {
       const page = new NutritionTracker();
       spyOn(page, 'navigate');

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('calorieCounter');
    });
  });

  });
