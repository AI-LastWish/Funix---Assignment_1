import SearchList from "./SearchList";
import SearchPopup from "./SearchPopup";

export default function SearchContent() {
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
