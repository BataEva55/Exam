import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/rooms')
      .then(response => response.json())
      .then(data => {
        setRooms(data.rooms);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-lg p-4 bg-gray-500 shadow-md rounded-lg animate-pulse text-center">
          <p className="text-xl">Rooms Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="max-w-lg w-full p-4 bg-brown shadow-md rounded-lg">
        {rooms.map(room => (
          <Link key={room.id} to={`/rooms/${room.id}`} className="block p-4 border border-black-300 my-2 grid items-center hover:bg-gray-100 transition-colors duration-300">
            <span className="text-lg">{room.name}</span>
            <FaArrowRight className="text-xl" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
