import { ImpromptuPage } from './app.po';

describe('impromptu App', () => {
  let page: ImpromptuPage;

  beforeEach(() => {
    page = new ImpromptuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
