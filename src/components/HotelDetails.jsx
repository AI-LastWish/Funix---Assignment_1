const hotels = [
  {
    id: 1,
    image: "./images/hotel_detail_1.jpg",
  },
  {
    id: 2,
    image: "./images/hotel_detail_2.jpg",
  },
  {
    id: 3,
    image: "./images/hotel_detail_3.jpg",
  },
  {
    id: 4,
    image: "./images/hotel_detail_4.jpg",
  },
  {
    id: 5,
    image: "./images/hotel_detail_5.jpg",
  },
  {
    id: 6,
    image: "./images/hotel_detail_6.jpg",
  },
];

export default function HotelDetails() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-8">
          {hotels.map((hotel) => (
            <a key={hotel.id} href="#" className="group text-sm">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100 group-hover:opacity-75">
                <img
                  src={hotel.image}
                  alt={hotel.id}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
