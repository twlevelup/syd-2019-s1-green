const groceryDelivery = require("./groceryDelivery");
const StorageHub = require("watch-framework").StorageHub;

describe("groceryDelivery", () => {
  let watchFace;
  let page;

  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById("watch-face");
    page = new groceryDelivery();

    const groceryBundle = [
      { name: "bundle-0", contents: "contents-0" },
      { name: "bundle-1", contents: "contents-1" },
      { name: "bundle-2", contents: "contents-2" }
    ];
    StorageHub.setData("groceryBundle", groceryBundle);
    StorageHub.setData("selectedBundle", 0);
  });

  describe("#render", () => {
    it("should render navigation", () => {
      expect(page.render()).toContain("navTopIcon");
      expect(page.render()).toContain("navRightIcon");
      expect(page.render()).toContain("navBottomIcon");
      expect(page.render()).toContain("navLeftIcon");
    });
  });

  describe("#render", () => {
    it("should render my with a specific grocery bundle", () => {
      page.pageWillLoad();
      expect(page.render()).toContain("Grocery Bundles");
      expect(page.render()).toContain("bundle-0");
    });

    it("should initialize bundles and select first bundle by default", () => {
      page.pageWillLoad();
      expect(page.render()).toContain('<li class="selectedBundle">bundle-0');
    });
  });

  describe("#buttons", () => {
    it("right button goes to root page", () => {
      spyOn(page, "navigate");

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("/");
    });

    it("left button goes to root page", () => {
      spyOn(page, "navigate");

      page.leftButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("/");
    });

    it("face button goes to groceryDeliveryDetails page", () => {
      spyOn(page, "navigate");
      page.faceButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith("groceryDeliveryDetails");
    });

    it("bottom button selects next item below", () => {
      spyOn(StorageHub, "getData");
      page.bottomButtonEvent();
      expect(StorageHub.getData("selectedBundle")).toEqual(1);
    });

    // it("top button selects next item above", () => {
    //   spyOn(StorageHub, "getData");
    //   page.bottomButtonEvent();
    //   expect(StorageHub.getData("selectedBundle")).toEqual(2);
    // });
  });
});
