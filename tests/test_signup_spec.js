var SignupPage = require('../pageObjects/SignupPage.po');
var HomePage = require('../pageObjects/HomePage.po');


describe('Sign Up Test', function() {
  var signupPage = new SignupPage();
  var homePage = new HomePage();

  beforeEach(function() {
    signupPage.visit();
    browser.driver.manage().window().maximize();
  });

  it('it should have a title', function() {
    expect(browser.getTitle()).toEqual(signupPage.title);
  });


  it('it should sign up new user', function(){
    signupPage.username.sendKeys('RickMilloss');
    signupPage.email.sendKeys('rickmilloss@restuu.rr');
    signupPage.password.sendKeys('1234567890');
    signupPage.signupButton.click().then(function() {
        expect(homePage.signed.getText()).toEqual('RickMilloss');
      });
    });
});
