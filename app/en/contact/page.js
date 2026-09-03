import "../../contact/booking.css";
import BookingPage from "@/components/BookingPage";
import { en } from "@/lib/dict";
import { bookingText } from "@/lib/booking";

export const metadata = {
  title: bookingText.en.meta.title,
  description: bookingText.en.meta.description,
  alternates: {
    languages: {
      es: "/contact/",
      en: "/en/contact/",
    },
  },
};

export default function Page() {
  return <BookingPage dict={en} text={bookingText.en} />;
}
