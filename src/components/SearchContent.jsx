import { TrashIcon } from "@heroicons/react/20/solid";
import SearchList from "./SearchList";
import SearchPopup from "./SearchPopup";

const products = [
  {
    id: 1,
    title: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Black",
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
];

export default function Example() {
  return (
    <div className="bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <form className="lg:grid lg:grid-cols-3 lg:gap-x-6">
            <SearchPopup />
            <SearchList />
          </form>
        </div>
      </main>
    </div>
  );
}
