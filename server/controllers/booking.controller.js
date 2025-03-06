import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const Booking = async (req, res) => {
  const { hotelId, checkInDate, checkOutDate, guests, totalPrice } = req.body;
  const userId = req.user.userId;

  try {
    const booking = await prisma.booking.create({
      data: {
        userId,
        hotelId,
        checkInDate: new Date(checkInDate),
        checkOutDate: new Date(checkOutDate),
        guests,
        totalPrice,
      },
    });
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to create booking", details: error.message });
  }

  router.get("/bookings", async (req, res) => {
    const userId = req.user.userId;

    try {
      const bookings = await prisma.booking.findMany({
        where: { userId },
      });
      res.status(200).json(bookings);
    } catch (error) {
      res
        .status(400)
        .json({ error: "Failed to fetch bookings", details: error.message });
    }
  });
};
