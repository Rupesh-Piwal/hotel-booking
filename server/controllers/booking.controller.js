import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const Booking = async (req, res) => {
  const { userId, hotelId, checkInDate, checkOutDate, guests, totalPrice } =
    req.body;

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
    console.error("Failed to create booking:", error);
    res.status(400).json({ error: "Failed to create booking" });
  }
};
