var HomePage = function(){
    this.title = 'Home — Conduit';
    this.signed = element.all(by.xpath("//a[@class='nav-link ng-binding']"));
    this.settings = element(by.xpath("//a[@href='#/settings']"));
    this.your_feed = element.all(by.xpath("//a[@class='nav-link active']"));
    this.new_article = element.all(by.xpath("//a[@href='#/editor/']"));
    this.sign_in = element.all(by.xpath("//a[@href='#/login']"));
};

module.exports = HomePage;

HomePage.prototype.go_to_sign_up = function(){
    this.sign_in.click();
};

HomePage.prototype.go_to_settings = function(){
    this.settings.click();
};
