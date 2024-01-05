import axios from "axios";
const getResponseOpenAi = async (prompt) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        prompt: prompt,
        max_tokens: 150,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${APIkey}`,
        },
      }
    );

    // const generatedText = response.data.choices[0]?.message?.content || "";
    return response.data;
  } catch (error) {
    console.error("getResponseOpenAi Errors", error.message);
    throw error;
  }
};
async function main() {
    try {
        const responseText = await getResponseOpenAi('What is the weather like today?');
        console.log(responseText);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

main();
export default getResponseOpenAi;
