var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test_date_spec.js','test_alert_spec.js', 'test_random_spec.js', 'test_protractor_spec.js'],
    capabilities: {
        'browserName': 'firefox'
    },
    onPrepare: function(){
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './tests/reports/'
        }))
    }
}