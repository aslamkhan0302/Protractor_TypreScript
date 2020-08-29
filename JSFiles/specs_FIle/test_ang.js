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
const protractor_1 = require("protractor");
const ang_home_1 = require("../pages_ts/ang_home");
describe('ang', () => {
    it('ang', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angular.io/");
        let ang = new ang_home_1.ang_homePage();
        yield ang.getStarted.click();
        yield ang.create.click();
        yield protractor_1.browser.sleep(6000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF9hbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjc19GSWxlL3Rlc3RfYW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQXFDO0FBQ3JDLG1EQUFvRDtBQUVwRCxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUNqQixFQUFFLENBQUMsS0FBSyxFQUFFLEdBQVMsRUFBRTtRQUNqQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDekMsSUFBSSxHQUFHLEdBQUcsSUFBSSx1QkFBWSxFQUFFLENBQUM7UUFDN0IsTUFBTSxHQUFHLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN6QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBRzdCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyJ9