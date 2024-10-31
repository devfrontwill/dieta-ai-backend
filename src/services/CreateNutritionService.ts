import { DataProps } from '../controllers/CreateNutritionController';
import { GoogleGenerativeAI } from '@google/generative-ai';

class CreateNutritionService{
    async execute({ name, weight, height, age, gender, objective, level }: DataProps){

        try {
            const genAI = new GoogleGenerativeAI(process.env.API_KEY!)
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

            const response = await model.generateContent(`Em que ano o JavaScript foi criado`)
            console.log(JSON.stringify(response, null, 2));

            return { ok: true }
            
        } catch (err) {
            console.log("Erro JSON ", err)
            throw new Error("Failed to create. ")
        }

        return { message: "FUNCIONOU O SERVICE" }
    }
}

export { CreateNutritionService }