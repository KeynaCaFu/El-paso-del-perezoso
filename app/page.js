import HomePage from "@/components/HomePage";
import { es } from "@/lib/dict";

export const metadata = {
  title: es.meta.title,
  description: es.meta.description,
  alternates: {
    languages: {
      es: "/",
      en: "/en/",
    },
  },
};

export default function Page() {
  return <HomePage dict={es} />;
}
