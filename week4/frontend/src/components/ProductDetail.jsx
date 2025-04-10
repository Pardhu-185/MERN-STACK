import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => navigate("/")}
        >
          ← Back to Products
        </button>
      </div>

      <div className="flex-grow p-6 max-w-4xl mx-auto flex flex-col items-center text-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-md h-80 object-contain mb-6 rounded shadow"
        />
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-xl text-blue-600 mb-4">{product.price}</p>
        <p className="text-gray-700">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
