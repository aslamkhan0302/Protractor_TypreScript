import { Config, browser } from 'protractor';

export let config: Config = {
    directConnect: true,
    ignoreSynchronization: true,
    maxInstances: 1,
    ignoreUncaughtExceptions: true,
    allScriptsTimeout: 180000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['../features/angular.feature'],
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,


    onPrepare: function () {
        browser.driver.manage().window().maximize();
        const chai = require('chai');
        global.expect = chai.expect;
    },


    onComplete: () => {
        var reporter = require('cucumber-html-reporter');

        var options = {
            theme: 'bootstrap',
            jsonFile: './results.json',
            output: './report/cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };

        reporter.generate(options);

    },

    cucumberOpts: {
        require: ['../JSFiles/features/step_definitions/*.js'],
        strict: true,

        'dry-run': false,
        compiler: [],
        format: 'json:results.json',    //make sure you are not using multi-capabilities
    },
};