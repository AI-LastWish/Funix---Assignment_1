import SearchListItem from "./SearchListItem";

const hotels = [
  {
    id: 1,
    name: "Tower Street Apartments",
    distance: "500m",
    tag: "Free airport taxi",
    type: "Entire studio • 1 bathroom • 21m² 1 full bed",
    description: "Studio Apartment with Air conditioning",
    free_cancel: true,
    price: 112,
    rate: 8.9,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_1.webp",
  },
  {
    id: 2,
    name: "Comfort Suites Airport",
    distance: "200m",
    tag: "Free Breakfast",
    type: "Entire studio • 2 bathroom • 100m² 2 full bed",
    description: "Studio Apartment",
    free_cancel: true,
    price: 140,
    rate: 9.3,
    rate_text: "Exceptional",
    image_url: "./images/hotel_search_2.jpg",
  },
  {
    id: 3,
    name: "Four Seasons Hotel",
    distance: "100m",
    tag: "Free Parking",
    type: "1 bathroom • 51m² 2 full bed",
    description: "Hotel in Lisbon",
    free_cancel: false,
    price: 99,
    rate: 8.8,
    rate_text: "Excellent",
    image_url: "./images/hotel_search_3.jpg",
  },
];

const SearchList = () => {
  return (
    <div className="mt-10 lg:mt-0 lg:!col-span-2">
      <div className="">
        <ul
          role="list"
          className="space-y-12 sm:-mt-8 sm:space-y-0 lg:gap-x-8 lg:space-y-0"
        >
          {hotels.map((hotel) => (
            <SearchListItem key={hotel.id} hotel={hotel} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchList;
