import jsPDF from "jspdf";

export const exportPDF = (product) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("AI Product Description", 20, 20);

  doc.setFontSize(12);

  doc.text(`Product: ${product.productName}`, 20, 40);
  doc.text(`Weight: ${product.weight}`, 20, 50);
  doc.text(`Tone: ${product.tone}`, 20, 60);

  doc.text("Ingredients:", 20, 80);

  const ingredients = doc.splitTextToSize(
    product.ingredients || "",
    170
  );

  doc.text(ingredients, 20, 90);

  const description = doc.splitTextToSize(
    product.description || "",
    170
  );

  doc.text("Description:", 20, 130);

  doc.text(description, 20, 140);

  doc.save(`${product.productName}.pdf`);
};

export const exportTXT = (product) => {
  const text = `
Product Name: ${product.productName}

Weight: ${product.weight}

Tone: ${product.tone}

Ingredients:
${product.ingredients}

Description:
${product.description}
`;

  const blob = new Blob([text], {
    type: "text/plain",
  });

  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);

  link.download = `${product.productName}.txt`;

  link.click();
};

export const exportJSON = (product) => {
  const blob = new Blob(
    [JSON.stringify(product, null, 2)],
    {
      type: "application/json",
    }
  );

  const link = document.createElement("a");

  link.href = URL.createObjectURL(blob);

  link.download = `${product.productName}.json`;

  link.click();
};