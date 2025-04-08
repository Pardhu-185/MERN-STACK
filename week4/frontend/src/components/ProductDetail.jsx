import { useParams, useNavigate } from "react-router-dom";
import productImage from "../assets/image.png";

const products = [
  { id: 1, name: "Product A", price: "$20", description: "Description for Product A", image: productImage },
  { id: 2, name: "Product B", price: "$30", description: "Description for Product B", image: productImage },
  { id: 3, name: "Product C", price: "$25", description: "Description for Product C", image: productImage },
  { id: 4, name: "Product D", price: "$40", description: "Description for Product D", image: productImage },
  { id: 5, name: "Product E", price: "$35", description: "Description for Product E", image: productImage },
  { id: 6, name: "Product F", price: "$45", description: "Description for Product F", image: productImage },
  { id: 7, name: "Product G", price: "$50", description: "Description for Product G", image: productImage },
  { id: 8, name: "Product H", price: "$60", description: "Description for Product H", image: productImage },
];

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Back Button - top left */}
      <div className="p-6">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => navigate("/")}
        >
          ← Back to Products
        </button>
      </div>

      {/* Product Details */}
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
