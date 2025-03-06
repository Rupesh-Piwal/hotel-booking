const BookingSummary = ({ totalNights, hotel, totalPrice }) =>
  totalNights > 0 && (
    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
      <h3 className="font-bold text-gray-800 mb-2">Booking Summary</h3>
      <SummaryRow
        label="Duration:"
        value={`${totalNights} ${totalNights === 1 ? "night" : "nights"}`}
      />
      <SummaryRow label="Rate:" value={`$${hotel.pricePerNight} per night`} />
      <SummaryRow label="Total:" value={`$${totalPrice}`} bold />
    </div>
  );

const SummaryRow = ({ label, value, bold }) => (
  <div
    className={`flex justify-between py-2 ${
      bold ? "font-bold text-lg" : "border-b border-gray-200"
    }`}
  >
    <span>{label}</span>
    <span>{value}</span>
  </div>
);

export default BookingSummary;
