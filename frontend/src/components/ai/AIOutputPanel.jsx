import OutputCard from "./OutputCard";

export default function AIOutputPanel({ result }) {
  return (
    <div className="space-y-5">

      <OutputCard
        title="📝 Product Title"
        content={result?.title}
        placeholder="Waiting for AI..."
      />

      <OutputCard
        title="📖 Product Description"
        content={result?.description}
        placeholder="Generate content to see the product description."
      />

      <OutputCard
        title="⭐ Key Features"
        content={
          result?.features
            ? result.features.map((item) => `• ${item}`).join("\n")
            : ""
        }
        placeholder="AI will generate key product features."
      />

      <OutputCard
        title="🔍 SEO Keywords"
        content={
          result?.seoKeywords
            ? result.seoKeywords.join(", ")
            : ""
        }
        placeholder="AI will generate SEO keywords."
      />

      <OutputCard
        title="📑 Meta Description"
        content={result?.metaDescription}
        placeholder="AI will generate a meta description."
      />

      <OutputCard
        title="📢 Marketing Caption"
        content={result?.marketingCaption}
        placeholder="AI will generate a social media caption."
      />

    </div>
  );
}