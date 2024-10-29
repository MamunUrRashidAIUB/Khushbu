import data from "../../Khushbu.json";

const BodySpray = () => {
  const bodySpray = Array.from(new Set(data.map((item) => item.id)));

  return (
    <div className="flex mt-20">
      {bodySpray.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 p-4 rounded-lg shadow-lg"
        >
          <img
            src={item.image}
            alt={item.name}
            className="object-cover rounded-full"
          />
          <h1>{item.price}</h1>
          <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default BodySpray;
