const TeamPage = require('./teamPage');

describe('TeamPage', () => {
  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#render', () => {
    it('should render my team page', () => {
      const page = new TeamPage();
      expect(page.render()).toContain("<h1>Made by:</h1>");
    });

    it('should contain team members names', () => {
      const page = new TeamPage();

      expect(page.render()).toContain("James");
      expect(page.render()).toContain("Tony");
      expect(page.render()).toContain("Herman");
      expect(page.render()).toContain("Angela");
      expect(page.render()).toContain("Mitchell");
      expect(page.render()).toContain('Theodore');
      expect(page.render()).toContain('Lainmar');
      expect(page.render()).toContain("Bruce");
    });
  });
});
