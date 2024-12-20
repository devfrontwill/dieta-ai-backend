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
exports.CreateNutritionController = void 0;
const CreateNutritionService_1 = require("../services/CreateNutritionService");
class CreateNutritionController {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, weight, height, age, gender, objective, level } = request.body;
            const createNutrition = new CreateNutritionService_1.CreateNutritionService();
            const nutrition = yield createNutrition.execute({
                name,
                weight,
                height,
                age,
                gender,
                objective,
                level,
            });
            reply.send(nutrition);
        });
    }
}
exports.CreateNutritionController = CreateNutritionController;
