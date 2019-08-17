var SigninPage = require('../pageObjects/SigninPage.po');
var HomePage = require('../pageObjects/HomePage.po');
var SettingsPage = require('../pageObjects/SettingsPage.po');


describe('Change bio test', function() {
  var signinPage = new SigninPage();
  var homePage = new HomePage();
  var settingsPage = new SettingsPage();

    beforeEach(function() {
        signinPage.visit();
        browser.driver.manage().window().maximize();
    });

    it('it should sign up new user', function(){
    signinPage.enter_email('rickmilloss@restuu.rr')
    signinPage.enter_password('1234567890')
    signinPage.log_in()
    homePage.go_to_settings();
    settingsPage.add_bio('Ricardo Millos. Lenda, mito, dancarino.');
    });

    it ('Should change bio descriptions', function(){
        homePage.go_to_settings();
        settingsPage.add_bio('Ricardo Millos. Lenda, mito, dancarino.');
    });
});
