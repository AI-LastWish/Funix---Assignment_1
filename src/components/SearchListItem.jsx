import React from "react";

const SearchListItem = ({ hotel }) => {
  return (
    <li key={hotel.id} className="sm:py-8">
      <div className="space-y-4 sm:grid sm:grid-cols-4 sm:items-start sm:gap-6 sm:space-y-0  p-2 border rounded-lg">
        <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
          <img
            className="rounded-lg object-cover shadow-lg"
            src={hotel.image_url}
            alt=""
          />
        </div>
        <div className="sm:col-span-2 mb-4">
          <div className="space-y-4">
            <div className="space-y-1 text-lg font-medium leading-6">
              <h3>{hotel.name}</h3>
              <p className="text-sm">{hotel.distance} from center</p>
            </div>
            <div className="text-sm">
              <p className="border p-1 rounded-lg bg-search_green inline-block text-white">
                {hotel.tag}
              </p>
            </div>
            <div className="text-sm">
              <p className="font-bold">{hotel.description}</p>
            </div>
            <div className="text-sm">
              <p className="text-gray-500">{hotel.type}</p>
            </div>
            {hotel.free_cancel && (
              <>
                <div className="text-sm">
                  <p className="text-search_green font-bold">
                    Free cancellation
                  </p>
                </div>
                <div className="text-sm">
                  <p className="text-search_green">
                    You can cancel later, so lock in this great price today!
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="pl-4 sm:grid sm:grid-cols-2 sm:items-start sm:gap-4">
          <label
            htmlFor="rate-text"
            className="block text-lg font-medium text-gray-700"
          >
            {hotel.rate_text}
          </label>
          <div className="flex flex-col items-end text-lg font-medium">
            <span className="p-1 bg-header_blue-light text-white">
              {hotel.rate}
            </span>
          </div>
          <label
            htmlFor="price"
            className="col-span-2 text-2xl font-medium text-gray-700 pt-14 flex flex-col items-end"
          >
            ${hotel.price}
          </label>
          <p
            htmlFor="price"
            className="col-span-2 text-sm font-medium text-gray-500 flex flex-col items-end"
          >
            Includes taxes and fees
          </p>
          <p
            htmlFor="price"
            className="col-span-2 text-sm font-medium text-gray-700 flex flex-col items-end"
          >
            {/* See availability */}
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-header_blue-light px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              See availability
            </button>
          </p>
        </div>
      </div>
    </li>
  );
};

export default SearchListItem;
