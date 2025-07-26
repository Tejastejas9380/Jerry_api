const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({ apiKey: process.env.AI_KEY });

const askAI = async (req, res) => {
  try {
    const { prompt = "Hello" } = req.body;
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    const answer = response.text;
    console.log(answer);

    return res.json({ answer });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { askAI };
