import { ElementFinder, element, by, browser } from "protractor";

export class ang_homePage{
    
    getStarted:ElementFinder;
    create:ElementFinder;
    homepageTitle:ElementFinder;

    constructor(){
        this.create=element(by.css("a[title*='Create an']"));
        this.getStarted=element(by.css('a.hero-cta'));
        this.homepageTitle=element(by.css('div.hero-headline'));
        
    }

   async  angFun(){
       await this.getStarted.click();
       await  this.create.click();
       await browser.sleep(5000);

    }
    
}

    

