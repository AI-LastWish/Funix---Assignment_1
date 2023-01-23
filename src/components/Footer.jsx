const footerNavigation = {
  countries: [
    { name: "Countries", href: "#" },
    { name: "Regions", href: "#" },
    { name: "Cities", href: "#" },
    { name: "Districts", href: "#" },
    { name: "Airports", href: "#" },
    { name: "Hotels", href: "#" },
  ],
  homes: [
    { name: "Homes", href: "#" },
    { name: "Apartments", href: "#" },
    { name: "Resorts", href: "#" },
    { name: "Villas", href: "#" },
    { name: "Hostels", href: "#" },
    { name: "Guest houses", href: "#" },
  ],
  places: [
    { name: "Unique places to stay", href: "#" },
    { name: "Reviews", href: "#" },
    { name: "Unpacked: Travel articles", href: "#" },
    { name: "Travel communities", href: "#" },
    { name: "Seasonal and holiday deals", href: "#" },
  ],
  cars: [
    { name: "Car rental", href: "#" },
    { name: "Flight Finder", href: "#" },
    { name: "Restaurant reservations", href: "#" },
    { name: "Travel Agents", href: "#" },
  ],
  customerService: [
    { name: "Curtomer Service", href: "#" },
    { name: "Partner Help", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press center", href: "#" },
    { name: "Safety Resource Center", href: "#" },
    { name: "Investor relations", href: "#" },
    { name: "Terms & conditions", href: "#" },
  ],
};

export default function Footer() {
  return (
    <>
      <div className="mx-auto w-full">
        <div className="relative overflow-hidden bg-header_blue px-6 py-10 shadow-xl sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
          ></div>
          <div className="relative">
            <div className="sm:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Save time, save money!
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-white">
                Sign up and we'll send the best deals to you
              </p>
            </div>
            <form action="#" className="mt-12 sm:mx-auto sm:flex sm:max-w-lg">
              <div className="min-w-0 flex-1">
                <label htmlFor="cta-email" className="sr-only">
                  Your email
                </label>
                <input
                  id="cta-email"
                  type="email"
                  className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500"
                  placeholder="Your email"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full rounded-md border border-transparent bg-header_blue-light px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-rose-500 sm:px-10"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer
        aria-labelledby="footer-heading"
        className="border-t border-gray-200 bg-white"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 py-20 sm:grid-cols-2 sm:gap-y-0 lg:grid-cols-5">
            <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
              <div>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.countries.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.homes.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-10 lg:col-span-3 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              <div>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.places.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.cars.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul role="list" className="mt-6 space-y-6">
                  {footerNavigation.customerService.map((item) => (
                    <li key={item.name} className="text-sm">
                      <a
                        href={item.href}
                        className="text-gray-500 hover:text-gray-600"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
