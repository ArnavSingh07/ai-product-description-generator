# PROMPTS.md

# AI Prompt Documentation

## Project

AI Product Description Generator using Google Gemini

---

# Prompt Variation 1 (Basic)

### Prompt

Generate a product description for the following product.

### Example Input

- Product Name: Organic Mango Pickle
- Ingredients: Raw Mango, Salt, Mustard Oil
- Weight: 500g
- Tone: Premium

### Example Output

A premium-quality Organic Mango Pickle prepared from fresh raw mangoes, mustard oil, and natural salt. Packed in a 500g jar, it delivers authentic taste and traditional flavour while maintaining freshness and quality.

---

# Prompt Variation 2 (Structured Marketing Prompt)

### Prompt

You are an expert marketing copywriter.

Generate a professional and engaging product description.

Requirements:

- 120–150 words
- Mention product name naturally
- Mention ingredients
- Mention weight
- Match requested tone
- Suitable for an e-commerce website
- No bullet points

### Example Input

- Product Name: Organic Mango Pickle
- Ingredients: Raw Mango, Salt, Mustard Oil
- Weight: 500g
- Tone: Premium

### Example Output

Elevate your dining experience with our Organic Mango Pickle, crafted from carefully selected raw mangoes, premium mustard oil, and natural salt. Packed in a convenient 500g jar, it delivers authentic flavour and exceptional quality while preserving traditional taste. Perfect for everyday meals and special occasions.

---

# Prompt Variation 3 (Benefit-Focused)

### Prompt

Act as an experienced food brand marketer.

Write a persuasive product description highlighting quality, freshness, health benefits, traditional taste, and customer trust.

### Example Input

- Product Name: Organic Mango Pickle
- Ingredients: Raw Mango, Salt, Mustard Oil
- Weight: 500g
- Tone: Premium

### Example Output

Experience authentic homemade flavour with our Organic Mango Pickle. Carefully prepared using fresh raw mangoes, mustard oil, and natural salt, this 500g pack combines traditional recipes with premium quality. Its rich taste, freshness, and carefully selected ingredients make it a perfect companion for every meal.

---

# Best Prompt

Prompt Variation 2 produced the best results because it provided clear instructions regarding length, tone, structure, and content requirements. The generated descriptions were more natural, consistent, and suitable for an e-commerce product page. It balanced creativity with factual product information while maintaining a professional marketing style. Therefore, Variation 2 was selected for the final implementation.

---

# System Prompt / Role

You are an expert marketing copywriter specializing in creating engaging and persuasive product descriptions for Food Processing MSMEs. Generate professional, accurate, and customer-friendly content suitable for e-commerce websites.

---

# AI Model

Google Gemini

Model Used:

`gemini-flash-latest`

---

# Backend Endpoint

POST `/api/ai/generate`

---

# Example Request

```json
{
  "productName": "Organic Mango Pickle",
  "ingredients": "Raw Mango, Salt, Mustard Oil",
  "weight": "500g",
  "tone": "Premium"
}
```

---

# Example Response

```json
{
  "success": true,
  "description": "Generated product description..."
}
```