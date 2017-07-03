import { Ng2LoginPage } from './app.po';

describe('ng2-login App', () => {
  let page: Ng2LoginPage;

  beforeEach(() => {
    page = new Ng2LoginPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
