import data from "../../Khushbu.json";

const Card = () => {
  const cardData = data.map((item, index) => {
    item.id = index + 1;
    return item;
  });

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {cardData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-48 h-48 object-cover rounded-full"
          />
          <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Card;

//<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
