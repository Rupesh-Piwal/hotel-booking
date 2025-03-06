import React, { useEffect, useState } from "react";
import { fetchHotels } from "../services/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleBookNow = (hotel) => {
    navigate("/book-hotel", { state: { hotel } });
  };

  useEffect(() => {
    const loadHotels = async () => {
      try {
        const data = await fetchHotels();
        setHotels(data);
      } catch (err) {
        setError("Failed to fetch hotels.");
      } finally {
        setLoading(false);
      }
    };

    loadHotels();
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-2"></div>
          <p className="text-lg text-gray-700">Loading hotels...</p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded">
          <p className="font-medium">{error}</p>
          <p className="mt-2">
            Please try refreshing the page or check back later.
          </p>
        </div>
      </div>
    );

  return (
    <div className=" min-h-screen pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-8 mt-5">
          <h2 className="text-2xl font-bold text-gray-800">Featured Hotels</h2>
        </div>

        <div className="hotel-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="hotel-card bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={
                    hotel.image || "https://placehold.co/600x400?text=No+Image"
                  }
                  alt={hotel.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-bold text-blue-600 shadow">
                  ₹{hotel.pricePerNight}/night
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {hotel.name}
                </h3>

                <div className="flex items-center text-purple-600 mb-4">
                  <svg
                    className="w-5 h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <p className="text-slate-700">{hotel.location}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">
                    WiFi
                  </span>
                  <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">
                    Breakfast
                  </span>
                  <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-0.5 rounded">
                    AC
                  </span>
                </div>

                <button
                  onClick={() => handleBookNow(hotel)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 cursor-pointer"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {hotels.length === 0 && !loading && !error && (
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <p className="text-lg text-gray-700">
              No hotels available at the moment.
            </p>
            <p className="text-gray-500 mt-2">
              Please check back later for new listings.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
