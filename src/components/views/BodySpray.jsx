import data from "../../Khushbu.json";
import CardA from "../Common/CardA";
const BodySpray = () => {
  const attarItems = data.filter((item) => item.category === "Body Spray");

  return (
    <div className="flex mt-20 flex-wrap gap-4 justify-center">
      {attarItems.map((item, index) => (
        <CardA key={index} item={item} />
      ))}
    </div>
  );
};

export default BodySpray;
