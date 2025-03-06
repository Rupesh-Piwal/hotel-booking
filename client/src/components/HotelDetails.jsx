const HotelDetails = ({ hotel }) => (
  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
    {hotel.image && (
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-64 object-cover rounded-lg shadow-md"
      />
    )}
    <div className="mt-4 bg-gray-50 p-4 rounded-lg">
      <h2 className="font-bold text-xl text-gray-700">{hotel.name}</h2>
      <p className="mt-2 text-purple-600">{hotel.location}</p>
      <p className="mt-2 text-gray-700">${hotel.pricePerNight} per night</p>
    </div>
  </div>
);

export default HotelDetails;
