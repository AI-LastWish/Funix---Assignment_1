const hotelList = [
  {
    id: 1,
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    id: 2,
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    id: 3,
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    id: 4,
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

export default function HotelList() {
  return (
    <div className="space-y-12">
      <ul
        role="list"
        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8"
      >
        {hotelList.map((hotel) => (
          <li key={hotel.id}>
            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="rounded-lg object-cover shadow-lg"
                  src={hotel.image_url}
                  alt={hotel.name}
                />
              </div>

              <div className="space-y-2">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3 className="underline">{hotel.name}</h3>
                  <p className="py-4">{hotel.city}</p>
                  <h5 className="font-bold">Starting from ${hotel.price}</h5>
                  <p className="pt-4">
                    <span className="bg-header_blue-light p-1">{hotel.rate}</span> {hotel.type}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
