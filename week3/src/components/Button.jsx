const Button = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="flex justify-center items-center px-5 py-2">
        <button 
            onClick={handleClick}
            className=" w-48 font-bold text-xl bg-blue-500 text-white px-4 py-2 
            rounded-lg hover:bg-blue-700 cursor-pointer">
                Click Me
        </button>
    </div>
  );
};

export default Button;