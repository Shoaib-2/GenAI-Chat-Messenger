import axios from 'axios';

const getResponseOpenAi = async (inputValue) => {
    const APIkey = 'API_key'
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                prompt: inputValue,
                max_tokens: 150,
            },
            {
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${APIkey}`,
                },
            }
        );
        const generatedText = response.data.choices[0]?.message?.content|| '';
        return generatedText;
    }
    catch (error){
        console.error('getResponseOpenAi Errors', error.message)
        throw error;
    }
}

export default getResponseOpenAi;