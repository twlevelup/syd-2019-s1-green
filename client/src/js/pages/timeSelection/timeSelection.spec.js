const TimeSelectionPage = require('./timeSelection');
const StorageHub = require('watch-framework').StorageHub;

describe('The Meal list Page', () => {
  let watchFace;
  let page;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
    page = new TimeSelectionPage();
  });

  describe("#render", () => {
    it("should render navigation", () => {
      expect(page.render()).toContain("navRightIcon");
      expect(page.render()).toContain("navLeftIcon");
    });
  });

  // describe("#render", () => {
  //   it("should render the title time frame", () => {
  //     page.pageWillLoad();
  //     expect(page.render()).toContain("Time Frame");
  //   });
  // });

 describe("#buttons", () => {
    it("right button goes to root page", () => {
      spyOn(page, "navigate");

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("/");
    });
  });

  describe("#buttons", () => {
    it("left button goes to the previous page, meal quantity", () => {
      spyOn(page, "navigate");

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("mealQuantity");
    });
  });

  describe("#buttons", () => {
    it("face button goes to the devlivery page", () => {
      spyOn(page, "navigate");

      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("delivery");
    });
  });

});
