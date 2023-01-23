const types = [
  {
    id: 1,
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    id: 2,
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    id: 3,
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    id: 4,
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    id: 5,
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

export default function Type() {
  return (
    <div className="space-y-12">
      <ul
        role="list"
        className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-5 lg:gap-x-8"
      >
        {types.map((type) => (
          <li key={type.id}>
            <div className="space-y-4">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  className="rounded-lg object-cover shadow-lg"
                  src={type.image}
                  alt={type.name}
                />
              </div>

              <div className="space-y-2">
                <div className="space-y-1 text-lg font-medium leading-6">
                  <h3>{type.name}</h3>
                  <p className="text-indigo-600">{type.count} hotels</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
