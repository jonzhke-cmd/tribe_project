import type { Metadata } from "next";
import BookingFlow from "./BookingClient";

export const metadata: Metadata = {
  title: "Book Your Car",
  description:
    "Book your Perth car hire online instantly. Choose your dates, pick a vehicle, and get an instant quote. AutoTrip — Perth Airport's premium rental.",
  alternates: { canonical: "https://autotrip-five.vercel.app/book" },
};

export default function BookPage() {
  return <BookingFlow />;
}
