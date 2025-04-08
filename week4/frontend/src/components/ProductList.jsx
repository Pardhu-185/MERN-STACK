import { useNavigate } from 'react-router-dom';
import productImage from "../assets/image.png";

const products = [
  { id: 1, name: "Product A", price: "$20", image: productImage },
  { id: 2, name: "Product B", price: "$30", image: productImage },
  { id: 3, name: "Product C", price: "$25", image: productImage },
  { id: 4, name: "Product D", price: "$40", image: productImage },
  { id: 5, name: "Product E", price: "$35", image: productImage },
  { id: 6, name: "Product F", price: "$45", image: productImage },
  { id: 7, name: "Product G", price: "$50", image: productImage },
  { id: 8, name: "Product H", price: "$60", image: productImage },
];

const ProductList = () => {
  const navigate = useNavigate();

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
      {products.map(product => (
        <div
          key={product.id}
          className="border p-4 rounded shadow hover:shadow-lg transition h-80 flex flex-col justify-between"
        >
          <div className="flex justify-center items-center h-40 mb-2">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
            <button
              onClick={() => navigate(`/product/${product.id}`)}
              className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Details
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductList;
