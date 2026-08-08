import Button from "../common/Button";

export default function AIActions({
  saveProduct,
  result,
}) {
  if (!result) return null;

  return (
    <div className="mt-6 flex gap-4">

      <Button
        variant="success"
        onClick={saveProduct}
      >
        Save Product
      </Button>

      <Button
        variant="secondary"
        onClick={() =>
          navigator.clipboard.writeText(result)
        }
      >
        Copy
      </Button>

    </div>
  );
}