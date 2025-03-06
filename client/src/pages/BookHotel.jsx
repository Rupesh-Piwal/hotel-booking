import { useEffect, useState } from "react";
import { createBooking } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import HotelDetails from "../components/HotelDetails";
import BookingForm from "../components/BookingForm";
import BookingSummary from "../components/BookingSummary";

const BookHotel = () => {
  const location = useLocation();
  const { hotel } = location.state;
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [totalNights, setTotalNights] = useState(1);
  const [bookingData, setBookingData] = useState({
    userId: 1,
    hotelId: hotel.id,
    checkInDate: "",
    checkOutDate: "",
    guests: 1,
    totalPrice: hotel.pricePerNight,
  });

  useEffect(() => {
    if (bookingData.checkInDate && bookingData.checkOutDate) {
      const checkIn = new Date(bookingData.checkInDate);
      const checkOut = new Date(bookingData.checkOutDate);
      const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
      if (nights > 0) {
        setTotalNights(nights);
        setBookingData({
          ...bookingData,
          totalPrice: hotel.pricePerNight * nights,
        });
      }
    }
  }, [bookingData.checkInDate, bookingData.checkOutDate, hotel.pricePerNight]);

  const handleChange = (e) =>
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await createBooking(bookingData);
      navigate("/bookings");
    } catch (err) {
      setError("Failed to create booking. Please try again.");
      setIsLoading(false);
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row mb-8">
        <HotelDetails hotel={hotel} />
        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Complete Your Booking
          </h1>
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
              <p>{error}</p>
            </div>
          )}
          <BookingForm
            bookingData={bookingData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            today={today}
          />
          <BookingSummary
            totalNights={totalNights}
            hotel={hotel}
            totalPrice={bookingData.totalPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default BookHotel;
