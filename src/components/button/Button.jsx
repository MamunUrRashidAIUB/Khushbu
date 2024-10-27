const Button = ({ text, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-white uppercase  text-gray-500 font-bold py-2 px-8 rounded-full border border-gray-300 hover:border-gray-600"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
