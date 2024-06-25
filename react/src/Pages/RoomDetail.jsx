import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RoomDetails = () => {
  const { id } = useParams();
  const [furnitures, setFurnitures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weightFilter, setWeightFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    fetch(`/api/rooms/${id}/furnitures`)
      .then((response) => response.json())
      .then((data) => {
        setFurnitures(data.furnitures);
        setLoading(false);
      });
  }, [id]);

  const filteredFurnitures = furnitures.filter((furniture) => {
    const weightMatch =
      weightFilter === "" || parseInt(weightFilter) === furniture.weight;
    const priceMatch =
      priceFilter === "" || parseInt(priceFilter) === furniture.price;
    return weightMatch && priceMatch;
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-lg p-4 bg-white shadow-md rounded-lg animate-pulse text-center">
          <p className="text-xl">Furnitures Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="max-w-lg w-full p-4 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <input
            id="weight"
            type="number"
            placeholder="Search by weight (kg)"
            value={weightFilter}
            onChange={(e) => setWeightFilter(e.target.value)}
            className="border p-2 mb-2 w-full"
          />
          <input
            id="price"
            type="number"
            placeholder="Search by price (USD)"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Weight</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredFurnitures.length > 0 ? (
              filteredFurnitures.map((furniture) => (
                <tr key={furniture.id}>
                  <td className="border p-2">{furniture.name}</td>
                  <td className="border p-2">{furniture.weight} kg</td>
                  <td className="border p-2">
                    ${furniture.price.toFixed(2)} USD
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border p-2 text-center" colSpan="3">
                  No matching furniture found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomDetails;
