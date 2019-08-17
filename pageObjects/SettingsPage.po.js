var SettingsPage = function(){
    this.your_settings = element.all(by.xpath("//h1[@class='text-xs-center']"));
    this.bio = element.all(by.xpath("//textarea[@ng-model='$ctrl.formData.bio']"));
    this.user = element.all(by.xpath("//input[@ng-model='$ctrl.formData.username']"));
};

SettingsPage.prototype.add_bio = function(new_bio){
    this.bio.sendKeys(new_bio);
};

module.exports = SettingsPage;
