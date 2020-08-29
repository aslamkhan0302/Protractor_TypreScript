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
cucumber_1.Before('Test Start', () => {
    console.log('Test has Started');
});
cucumber_1.After('test COmpletes', function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status = cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, 'image/png');
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzX0ZJbGUvaG9vay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUFpRDtBQUNqRCwyQ0FBcUM7QUFFckMsaUJBQU0sQ0FBQyxZQUFZLEVBQUMsR0FBRSxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtBQUNuQyxDQUFDLENBQUMsQ0FBQTtBQUVGLGdCQUFLLENBQUMsZ0JBQWdCLEVBQUMsVUFBZSxRQUFROztRQUMxQyxJQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFDLGlCQUFNLENBQUMsTUFBTSxFQUFDO1lBQ3BDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBQyxXQUFXLENBQUMsQ0FBQTtTQUN0QztJQUVMLENBQUM7Q0FBQSxDQUFDLENBQUEifQ==