import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { ang_homePage } from "../../pages_ts/ang_home";
let ang = new ang_homePage();

Given('i will navigate to angular home Page', { timeout: 60 * 1000 }, async function () {
    await browser.get("https://angular.io/");
    let title = ang.homepageTitle.getText();
    await expect(await title).to.contain('One framework.')
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
});


When('getting started is selected', { timeout: 60 * 1000 }, async function () {
   await ang.angFun();
   // await ang.getStarted.click();
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
});


Then('Angular Docs should be navigated', { timeout: 60 * 1000 }, async function () {
   // await ang.create.click();
   // await browser.sleep(5000);
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
});