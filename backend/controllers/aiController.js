const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const generateDescription = async (req, res) => {
  try {
    const { productName, ingredients, weight, tone } = req.body;

    if (!productName || !ingredients || !weight || !tone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const prompt = `
You are an expert marketing copywriter.

Generate a professional product description.

Product Name: ${productName}
Ingredients: ${ingredients}
Weight: ${weight}
Tone: ${tone}

The description should:
- Be engaging
- Highlight benefits
- Mention ingredients naturally
- Mention weight
- Be around 120-150 words.
`;

    const response = await ai.models.generateContent({
     model: "gemini-flash-latest",
      contents: prompt,
    });

    return res.status(200).json({
      success: true,
      description: response.text,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { generateDescription };