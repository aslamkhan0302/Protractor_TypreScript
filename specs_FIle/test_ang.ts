import { browser } from "protractor";
import { ang_homePage } from "../pages_ts/ang_home";

describe('ang', () => {
    it('ang', async () => {
        await browser.get("https://angular.io/");
        let ang = new ang_homePage();
        await ang.getStarted.click();
        await ang.create.click();
        await browser.sleep(6000)


    });

});