import "./booking.css";
import BookingPage from "@/components/BookingPage";
import { es } from "@/lib/dict";
import { bookingText } from "@/lib/booking";

export const metadata = {
  title: bookingText.es.meta.title,
  description: bookingText.es.meta.description,
  alternates: {
    languages: {
      es: "/contact/",
      en: "/en/contact/",
    },
  },
};

export default function Page() {
  return <BookingPage dict={es} text={bookingText.es} />;
}
