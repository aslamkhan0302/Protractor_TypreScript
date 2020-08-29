import { Before, After, Status } from "cucumber";
import { browser } from "protractor";

Before('Test Start',()=>{
    console.log('Test has Started')
})

After('test COmpletes',async function(scenario){
    if(scenario.result.status=Status.FAILED){
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,'image/png')
    }

})