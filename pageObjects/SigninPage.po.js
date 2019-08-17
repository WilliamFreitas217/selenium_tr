var SigninPage = function(){

    this.email = element(by.model('$ctrl.formData.email'));
    this.password = element(by.model('$ctrl.formData.password'));
    this.signinButton = element(by.xpath("//button[@class='btn btn-lg btn-primary pull-xs-right ng-binding']"));
};


SigninPage.prototype.enter_email = function(email_param){
    this.email.sendKeys(email_param);
};

SigninPage.prototype.enter_password = function(password_param){
    this.password.sendKeys(password_param);
};

SigninPage.prototype.log_in = function(){
    this.signinButton.click();
};

SigninPage.prototype.visit = function(){
    browser.get('http://localhost:4000/#!/login');
};

module.exports = SigninPage;