import { browser, element, by } from "protractor";

describe('ass', () => {
    it('saa', async() => {
        await browser.get("https://angular.io/");
        await element(by.css('a.hero-cta')).click();
        await browser.sleep(5000);


    });
    
});