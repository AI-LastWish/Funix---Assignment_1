import City from "./City";
import HotelList from "./HotelList";
import Type from "./Type";

export default function Stays() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <City />
        <h2 className="text-2xl py-8 font-bold tracking-tight text-gray-900">
          Browse by property type
        </h2>
        <Type />
        <h2 className="text-2xl py-8 font-bold tracking-tight text-gray-900">
          Homes guests love
        </h2>
        <HotelList />
      </div>
    </div>
  );
}
