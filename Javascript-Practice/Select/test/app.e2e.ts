describe('App', () => {

  beforeEach(() => {
    browser.get('https://www.google.com/');
  });

  it('should have proper title', () => {
    expect(browser.getTitle()).toEqual('Google');
  });

});
