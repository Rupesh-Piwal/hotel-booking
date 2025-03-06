import { useNavigate } from "react-router-dom";

const BookingForm = ({
  bookingData,
  handleChange,
  handleSubmit,
  isLoading,
  today,
}) => (
  <form onSubmit={handleSubmit} className="space-y-4">
    <InputField
      label="Check-In Date"
      type="date"
      name="checkInDate"
      min={today}
      value={bookingData.checkInDate}
      onChange={handleChange}
      required
    />
    <InputField
      label="Check-Out Date"
      type="date"
      name="checkOutDate"
      min={bookingData.checkInDate || today}
      value={bookingData.checkOutDate}
      onChange={handleChange}
      required
    />
    <SelectField
      label="Number of Guests"
      name="guests"
      value={bookingData.guests}
      onChange={handleChange}
      options={[1, 2, 3, 4, 5, 6]}
    />
    <SubmitButtons isLoading={isLoading} />
  </form>
);

const InputField = ({ label, type, name, value, onChange, min, required }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      min={min}
      required={required}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {options.map((num) => (
        <option key={num} value={num}>
          {num} {num === 1 ? "Guest" : "Guests"}
        </option>
      ))}
    </select>
  </div>
);

const SubmitButtons = ({ isLoading }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 px-4 mt-6 bg-blue-600 hover:bg-blue-700 text-white cursor-pointer font-bold rounded-md transition duration-200 ${
          isLoading ? "opacity-75 cursor-not-allowed" : ""
        }`}
      >
        {isLoading ? "Processing..." : "Confirm Booking"}
      </button>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="w-full py-3 px-4 bg-white border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition duration-200 mt-3 cursor-pointer"
      >
        Cancel
      </button>
    </>
  );
};

export default BookingForm;
