import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import HotelDetails from "./HotelDetails";

const hotel = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};

const DetailContent = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8">
        <div className="space-y-4 sm:grid sm:grid-cols-4 sm:items-start sm:space-y-0 p-2">
          <div className="mb-4 sm:col-span-3">
            <div className="space-y-4">
              <div className="space-y-1 text-4xl font-bold leading-6">
                <h3>{hotel.name}</h3>
              </div>
              <div className="space-y-1 text-sm font-normal leading-6 pt-2">
                <p className="flex items-center">
                  <FontAwesomeIcon className="h-5 w-5" icon={faLocationDot} />
                  &nbsp;&nbsp;
                  {hotel.address}
                </p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 px-4">
            <div className="space-y-4">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-header_blue-light px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Reserve or Book Now!
              </button>
            </div>
          </div>
          <div className="mb-4 sm:col-span-4">
            <div className="space-y-4">
              <div className="space-y-1 text-2xl font-medium leading-6 text-header_blue-bright">
                <h3>{hotel.distance}</h3>
              </div>
              <div className="space-y-1 text-lg font-normal leading-6">
                <p className="text-search_green">{hotel.price}</p>
              </div>
            </div>
          </div>
          <div className="mb-4 sm:col-span-4">
            <HotelDetails />
          </div>
          <div className="mb-4 sm:col-span-3 pt-12">
            <div className="space-y-4">
              <div className="space-y-1 text-4xl font-bold leading-6">
                <h3>{hotel.title}</h3>
              </div>
              <div className="space-y-1 text-sm font-normal leading-6 pt-6">
                <p className="flex items-center">{hotel.description}</p>
              </div>
            </div>
          </div>
          <div className="mb-4 sm:col-span-1 !mt-12 p-4 bg-detail_blue">
            <div className="space-y-4">
              <div className="space-y-1 text-xl font-bold leading-6 text-gray-500">
                <h3>Perfect for a 9-nights stay!</h3>
              </div>
              <div className="space-y-1 text-sm font-normal leading-6 pt-2">
                <p className="flex items-center">
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </p>
              </div>
              <div className="space-y-1 leading-6">
                <h3 className="text-2xl "><span className="font-bold">${hotel.nine_night_price}</span> <span className="font-sm">(9 nights)</span></h3>
              </div>
              <div className="space-y-1 text-4xl font-bold leading-6">
                <button
                  type="submit"
                  className="w-full rounded-md border border-transparent bg-header_blue-light py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                >
                  Reserve or Book Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
