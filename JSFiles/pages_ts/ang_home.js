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
exports.ang_homePage = void 0;
const protractor_1 = require("protractor");
class ang_homePage {
    constructor() {
        this.create = protractor_1.element(protractor_1.by.css("a[title*='Create an']"));
        this.getStarted = protractor_1.element(protractor_1.by.css('a.hero-cta'));
        this.homepageTitle = protractor_1.element(protractor_1.by.css('div.hero-headline'));
    }
    angFun() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getStarted.click();
            yield this.create.click();
            yield protractor_1.browser.sleep(5000);
        });
    }
}
exports.ang_homePage = ang_homePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5nX2hvbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlc190cy9hbmdfaG9tZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUU7QUFFakUsTUFBYSxZQUFZO0lBTXJCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBRTVELENBQUM7SUFFSyxNQUFNOztZQUNULE1BQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5QixNQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDM0IsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU3QixDQUFDO0tBQUE7Q0FFSjtBQXBCRCxvQ0FvQkMifQ==