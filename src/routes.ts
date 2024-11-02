import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply
} from 'fastify';
import { CreateNutritionController } from './controllers/CreateNutritionController';

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {

        let responseText = "```json\n{\n  \"nome\": \"Wiliam\",\n  \"sexo\": \"Masculino\",\n  \"idade\": 35,\n  \"altura\": 1.88,\n  \"peso\": 101,\n  \"objetivo\": \"Hipertrofia\",\n  \"refeicoes\": [\n    {\n      \"horario\": \"07:00\",\n      \"nome\": \"Café da manhã\",\n      \"alimentos\": [\n        \"2 fatias de pão integral\",\n        \"2 ovos mexidos\",\n        \"1 banana\",\n        \"1 copo de leite desnatado\"\n      ]\n    },\n    {\n      \"horario\": \"10:00\",\n      \"nome\": \"Lanche da manhã\",\n        \"alimentos\": [\n        \"1 iogurte grego com granola\",\n        \"1 maça\"\n      ]\n    },\n    {\n      \"horario\": \"13:00\",\n      \"nome\": \"Almoço\",\n      \"alimentos\": [\n        \"150g de frango grelhado\",\n        \"1 xícara de arroz integral\",\n        \"1 xícara de brócolis cozido\",\n        \"Salada verde com azeite de oliva\"\n      ]\n    },\n    {\n      \"horario\": \"16:00\",\n      \"nome\": \"Lanche da tarde\",\n      \"alimentos\": [\n        \"1 scoop de whey protein\",\n        \"1 fatia de pão integral\",\n        \"1 batata doce cozida\"\n      ]\n    },\n    {\n      \"horario\": \"20:00\",\n      \"nome\": \"Jantar\",\n      \"alimentos\": [\n        \"150g de carne magra\",\n        \"1 xícara de batata doce cozida\",\n        \"1 xícara de espinafre cozido\"\n      ]\n    }\n  ],\n  \"suplementos\": [\n    \"Whey protein\",\n    \"Creatina\",\n    \"BCAA\"\n  ]\n}\n```"

        try {
            let jsonString = responseText.replace(/```\w*\n/g, '').replace(/\n```/g,'').trim();

            let jsonObject = JSON.parse(jsonString);

            return reply.send({ data: jsonObject });

        } catch (err) {
            
        }

        reply.send({ ok: true})
    })

    fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateNutritionController().handle(request, reply)
    })

}
