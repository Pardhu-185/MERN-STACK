import { useState } from "react";

const TextForm = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Text:", input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex justify-center items-center">
      <input
        type="text"
        className="border border-gray-300 p-2 rounded-md w-100"
        placeholder="Enter text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className=" w-30 m-2 font-semibold text-lg bg-blue-500 text-white px-4 py-2 
            rounded-lg hover:bg-blue-700 cursor-pointer">
        Submit
      </button>
    </form>
  );
};

export default TextForm;
