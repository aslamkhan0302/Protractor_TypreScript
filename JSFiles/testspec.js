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
describe('ass', () => {
    it('saa', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angular.io/");
        yield protractor_1.element(protractor_1.by.css('a.hero-cta')).click();
        yield protractor_1.browser.sleep(5000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFrRDtBQUVsRCxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtJQUNqQixFQUFFLENBQUMsS0FBSyxFQUFFLEdBQVEsRUFBRTtRQUNoQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDekMsTUFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QyxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRzlCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQyJ9