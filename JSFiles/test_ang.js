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
const ang_home_1 = require("./pages_ts/ang_home");
describe('ang', () => {
    it('ang', () => __awaiter(void 0, void 0, void 0, function* () {
        yield protractor_1.browser.get("https://angular.io/");
        let ang = new ang_home_1.ang_homePage();
        yield ang.getStarted.click();
        yield ang.create.click();
        yield protractor_1.browser.sleep(6000);
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdF9hbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0X2FuZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyxrREFBbUQ7QUFFbkQsUUFBUSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7SUFDakIsRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFTLEVBQUU7UUFDakIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3pDLElBQUksR0FBRyxHQUFHLElBQUksdUJBQVksRUFBRSxDQUFDO1FBQzdCLE1BQU0sR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDekIsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUc3QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUMifQ==