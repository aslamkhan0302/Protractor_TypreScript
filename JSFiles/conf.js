"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
exports.config = {
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
        protractor_1.browser.driver.manage().window().maximize();
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
        format: 'json:results.json',
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTZDO0FBRWxDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLHFCQUFxQixFQUFFLElBQUk7SUFDM0IsWUFBWSxFQUFFLENBQUM7SUFDZix3QkFBd0IsRUFBRSxJQUFJO0lBQzlCLGlCQUFpQixFQUFFLE1BQU07SUFDekIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0QsWUFBWSxFQUFFO1FBQ1YsV0FBVyxFQUFFLFFBQVE7S0FDeEI7SUFDRCxLQUFLLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztJQUN0QyxrREFBa0Q7SUFFbEQsMEVBQTBFO0lBQzFFLHNDQUFzQztJQUN0QyxTQUFTLEVBQUUsSUFBSTtJQUdmLFNBQVMsRUFBRTtRQUNQLG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzVDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUdELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDYixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUVqRCxJQUFJLE9BQU8sR0FBRztZQUNWLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsTUFBTSxFQUFFLCtCQUErQjtZQUN2QyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLGFBQWEsRUFBRSxPQUFPO2dCQUN0QixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3ZCO1NBQ0osQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFL0IsQ0FBQztJQUVELFlBQVksRUFBRTtRQUNWLE9BQU8sRUFBRSxDQUFDLDJDQUEyQyxDQUFDO1FBQ3RELE1BQU0sRUFBRSxJQUFJO1FBRVosU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLEVBQUU7UUFDWixNQUFNLEVBQUUsbUJBQW1CO0tBQzlCO0NBQ0osQ0FBQyJ9