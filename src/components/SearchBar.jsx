import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faFemale } from "@fortawesome/free-solid-svg-icons";
import DateRangePickerComp from "./elements/DateRangePickerComp";

const SearchBar = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-6">
      <form className="">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative flex">
          <div className="relative w-full shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon className="h-5 w-5" icon={faBed} />
            </div>
            <input
              type="search"
              id="search"
              className="block border-none rounded-l-lg w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Where are you going?"
              required
            />
          </div>
          <div className="relative w-full shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon className="h-5 w-5" icon={faCalendar} />
            </div>
            {/* <input
                type="search"
                id="search"
                className="block border-none w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="06/24/2022 to 06/24/2022"
                required
              /> */}
            <DateRangePickerComp />
          </div>
          <div className="relative w-full shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <FontAwesomeIcon className="h-5 w-5" icon={faFemale} />
            </div>
            <input
              type="search"
              id="search"
              className="block border-none rounded-r-lg w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="1 adult - 0 children - 1 room"
              required
            />
          </div>
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-header_blue-light hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => window.location.replace("/search") }
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
