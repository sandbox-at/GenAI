import { config } from "dotenv"
config()

// configuration ,OpenAPI 
import { Configuration,OpenAIApi } from "openai"

console.log(process.env.API_KEY);