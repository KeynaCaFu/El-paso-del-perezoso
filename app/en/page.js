import HomePage from "@/components/HomePage";
import { en } from "@/lib/dict";

export const metadata = {
  title: en.meta.title,
  description: en.meta.description,
  alternates: {
    languages: {
      es: "/",
      en: "/en/",
    },
  },
};

export default function Page() {
  return <HomePage dict={en} />;
}
