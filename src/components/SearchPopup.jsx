import DateRangePickerComp from "./elements/DateRangePickerComp";
import SearchPopupOptions from "./elements/SearchPopupOptions";

const SearchPopup = () => {
  return (
    <div>
      <div className="border-gray-200 bg-orange p-4 rounded-xl">
        <h2 className=" text-xl font-bold text-gray-900">Search</h2>

        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-lg font-medium text-gray-700"
            >
              Destination
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="company"
                id="company"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-lg font-medium text-gray-700"
            >
              Check-in Date
            </label>
            <div className="mt-1">
              {/* <input
                type="text"
                name="address"
                id="address"
                autoComplete="street-address"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              /> */}
              <DateRangePickerComp />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-lg font-medium text-gray-700"
            >
              Options
            </label>
            <SearchPopupOptions
              name="Min price per night"
              id="minPricePerNight"
              type="text"
            />
            <SearchPopupOptions
              name="Max price per night"
              id="maxPricePerNight"
              type="text"
            />
            <SearchPopupOptions name="Adult" id="adult" type="number" defaultValue="1" />
            <SearchPopupOptions name="Children" id="children" type="number" defaultValue="0" />
            <SearchPopupOptions name="Room" id="room" type="number" defaultValue="1" />
          </div>
        </div>
        <div className="py-6">
          <button
            type="submit"
            className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          >
            Confirm order
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
