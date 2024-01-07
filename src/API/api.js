const axios = require("axios")

require("dotenv").config();


const getResponseOpenAi = async (prompt) => {
  const apiKey = process.env.OPENAI_API_KEY;

  const client = axios.create({
  headers: {
    Authorization: `Bearer ${apiKey}`
  }
})

const params = {
  prompt: "how are you?",
  model: "text-davinci-003",
  max_tokens: 10,
  temperature: 0
}
try{
  const result = await client.post('https://api.openai.com/v1/completions', params)
  console.log(result.data.choices[0].text)
}
catch(error){
  console.error(error)
}
}

module.exports = {getResponseOpenAi}


