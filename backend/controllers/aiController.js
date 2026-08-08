const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ==========================
// Generate Product Description
// ==========================
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
You are an expert e-commerce copywriter.

Generate ONLY valid JSON.

Product Name: ${productName}
Ingredients: ${ingredients}
Weight: ${weight}
Tone: ${tone}

Return ONLY:

{
"title":"",
"description":"",
"features":["","",""],
"seoKeywords":["","",""],
"metaDescription":"",
"marketingCaption":""
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    let text = response.text;

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(text);

    return res.json({
      success: true,
      data: parsed,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ==========================
// Analyze Product Image
// ==========================
const analyzeImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required.",
      });
    }

    const imageBase64 = req.file.buffer.toString("base64");

    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: [
        {
          inlineData: {
            mimeType: req.file.mimetype,
            data: imageBase64,
          },
        },
        {
          text: `
You are an expert product analyst.

Look carefully at this image.

If it is a product, return ONLY JSON.

{
"productName":"",
"ingredients":"",
"weight":""
}

Rules:

If ingredients are not visible, estimate them.

If weight isn't visible, estimate.

Never return markdown.

Never explain.
`,
        },
      ],
    });

    let text = response.text;

    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(text);

    res.json({
      success: true,
      data: parsed,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  generateDescription,
  analyzeImage,
};