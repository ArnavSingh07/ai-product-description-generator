# AI Prompt Documentation

## Purpose
Generate professional product descriptions for food processing MSMEs using Google Gemini AI.

## Prompt Template

You are an expert marketing copywriter.

Generate a professional product description for the following product.

Product Name: {productName}
Ingredients: {ingredients}
Weight: {weight}
Tone: {tone}

Requirements:
- Around 120–150 words
- Mention ingredients naturally
- Mention the weight
- Highlight product benefits
- Use the selected tone
- Make the description engaging and suitable for e-commerce websites.

## Example Input

Product Name: Organic Mango Pickle

Ingredients:
Raw Mango, Salt, Mustard Oil

Weight:
500g

Tone:
Premium

## AI Model

gemini-flash-latest

## Backend Endpoint

POST /api/ai/generate