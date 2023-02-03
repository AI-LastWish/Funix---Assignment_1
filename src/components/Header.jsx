import { Button } from "../components/elements/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";

const navigation = [{ name: "Booking Website", href: "/" }];
const services = [
  {
    id: 1,
    name: "Stays",
    href: "#",
    icon: <FontAwesomeIcon className="-ml-1 mr-3 h-5 w-5" icon={faBed} />,
  },
  {
    id: 2,
    name: "Flights",
    href: "#",
    icon: <FontAwesomeIcon className="-ml-1 mr-3 h-5 w-5" icon={faPlane} />,
  },
  {
    id: 3,
    name: "Car rentals",
    href: "#",
    icon: <FontAwesomeIcon className="-ml-1 mr-3 h-5 w-5" icon={faCar} />,
  },
  {
    id: 4,
    name: "Attractions",
    href: "#",
    icon: <FontAwesomeIcon className="-ml-1 mr-3 h-5 w-5" icon={faBed} />,
  },
  {
    id: 5,
    name: "Airport taxis",
    href: "#",
    icon: <FontAwesomeIcon className="-ml-1 mr-3 h-5 w-5" icon={faTaxi} />,
  },
];

export default function Header() {
  return (
    <>
      <header className="bg-header_blue pb-16">
        <nav
          className="relative mx-auto max-w-7xl px-6 lg:px-8"
          aria-label="Top"
        >
          <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
            <div className="flex items-center">
              <div className="hidden space-x-8 lg:!block">
                {navigation.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-white hover:text-indigo-50"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-header_blue hover:bg-opacity-75"
              >
                Register
              </a>
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-header_blue hover:bg-indigo-50"
              >
                Login
              </a>
            </div>
          </div>
          <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
            <div className="flex items-center">
              <div className="hidden md:!flex md:space-x-8">
                {services.map((service) => (
                  <Button
                    key={service.id}
                    href={service.href}
                    color="transparent"
                    className="text-lg hidden md:!block ease-in duration-300"
                  >
                    <div className="flex items-center">
                      {service.icon}
                      {service.name}
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
            <div className="flex items-center">
              <div className="hidden space-x-8 lg:block">
                <p className="text-4xl font-bold text-white hover:text-indigo-50">
                  A lifetime of discounts? It's Genius.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
            <div className="flex items-center">
              <div className="hidden space-x-8 lg:block">
                <p className="text-md text-white hover:text-indigo-50">
                  Get rewarded for your travels - unlock instant savings of 10%
                  or more with a free account
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
            <div className="flex items-center">
              <div className="hidden space-x-8 lg:block">
                <button
                  type="button"
                  className="inline-flex items-center rounded-md border border-transparent bg-header_blue-light px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Sign in / Register
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
