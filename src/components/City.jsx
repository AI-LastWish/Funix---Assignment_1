const cities = [
  {
    id: 1,
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    id: 2,
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    id: 3,
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
  // More people...
];

export default function City() {
  return (
    <div className="space-y-12">
      <ul
        role="list"
        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
      >
        {cities.map((city) => (
          <div
            key={city.id}
            className="group aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2"
          >
            <img
              src={city.image}
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              className="object-cover object-center group-hover:opacity-75"
            />
            <div
              aria-hidden="true"
              className="bg-gradient-to-b from-transparent to-black opacity-50"
            />
            <div className="flex items-end p-6">
              <div>
                <h3 className="font-semibold text-white">
                  <a href="#">
                    <span className="absolute inset-0" />
                    {city.name}
                  </a>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  {city.subText}
                </p>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
