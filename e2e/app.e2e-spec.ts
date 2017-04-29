import { SpotyfyAppPage } from './app.po';

describe('spotyfy-app App', () => {
  let page: SpotyfyAppPage;

  beforeEach(() => {
    page = new SpotyfyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
