"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const ang_home_1 = require("../../pages_ts/ang_home");
let ang = new ang_home_1.ang_homePage();
cucumber_1.Given('i will navigate to angular home Page', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angular.io/");
        let title = ang.homepageTitle.getText();
        yield expect(yield title).to.contain('One framework.');
        // Write code here that turns the phrase above into concrete actions
        //return 'pending';
    });
});
cucumber_1.When('getting started is selected', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield ang.angFun();
        // await ang.getStarted.click();
        // Write code here that turns the phrase above into concrete actions
        //return 'pending';
    });
});
cucumber_1.Then('Angular Docs should be navigated', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function* () {
        // await ang.create.click();
        // await browser.sleep(5000);
        // Write code here that turns the phrase above into concrete actions
        //return 'pending';
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5nX2N1Y3VtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZmVhdHVyZXMvc3RlcF9kZWZpbml0aW9ucy9hbmdfY3VjdW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBNkM7QUFDN0MsMkNBQXFDO0FBQ3JDLHNEQUF1RDtBQUN2RCxJQUFJLEdBQUcsR0FBRyxJQUFJLHVCQUFZLEVBQUUsQ0FBQztBQUU3QixnQkFBSyxDQUFDLHNDQUFzQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTs7UUFDbEUsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3pDLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsTUFBTSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDdEQsb0VBQW9FO1FBQ3BFLG1CQUFtQjtJQUN2QixDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBR0gsZUFBSSxDQUFDLDZCQUE2QixFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTs7UUFDekQsTUFBTSxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkIsZ0NBQWdDO1FBQy9CLG9FQUFvRTtRQUNwRSxtQkFBbUI7SUFDdkIsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxrQ0FBa0MsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUU7O1FBQzlELDRCQUE0QjtRQUM1Qiw2QkFBNkI7UUFDNUIsb0VBQW9FO1FBQ3BFLG1CQUFtQjtJQUN2QixDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=