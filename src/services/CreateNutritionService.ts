import { DataProps } from '../controllers/CreateNutritionController';

class CreateNutritionService{
    async execute({ name, weight, height, age, gender, objective, level }: DataProps){

        console.log("TESTE")

        return { message: "FUNCIONOU O SERVICE" }
    }
}

export { CreateNutritionService }