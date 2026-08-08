import jsPDF from "jspdf";

const exportPDF = (product) => {
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(20);
  doc.text("AI Product Description", 20, y);

  y += 15;

  doc.setFontSize(12);

  doc.text(`Product Name: ${product.productName}`, 20, y);
  y += 10;

  doc.text(`AI Title: ${product.title || ""}`, 20, y);
  y += 10;

  doc.text(`Weight: ${product.weight}`, 20, y);
  y += 10;

  doc.text(`Tone: ${product.tone}`, 20, y);
  y += 15;

  doc.setFontSize(14);
  doc.text("Description", 20, y);

  y += 10;

  const description = doc.splitTextToSize(
    product.description || "",
    170
  );

  doc.setFontSize(11);
  doc.text(description, 20, y);

  y += description.length * 6 + 10;

  doc.setFontSize(14);
  doc.text("Features", 20, y);

  y += 10;

  product.features?.forEach((feature) => {
    doc.setFontSize(11);
    doc.text(`• ${feature}`, 25, y);
    y += 8;
  });

  y += 5;

  doc.setFontSize(14);
  doc.text("SEO Keywords", 20, y);

  y += 10;

  doc.setFontSize(11);
  doc.text(
    product.seoKeywords?.join(", ") || "",
    20,
    y
  );

  y += 15;

  doc.setFontSize(14);
  doc.text("Meta Description", 20, y);

  y += 10;

  const meta = doc.splitTextToSize(
    product.metaDescription || "",
    170
  );

  doc.setFontSize(11);
  doc.text(meta, 20, y);

  y += meta.length * 6 + 10;

  doc.setFontSize(14);
  doc.text("Marketing Caption", 20, y);

  y += 10;

  const caption = doc.splitTextToSize(
    product.marketingCaption || "",
    170
  );

  doc.setFontSize(11);
  doc.text(caption, 20, y);

  doc.save(`${product.productName}.pdf`);
};

export default exportPDF;