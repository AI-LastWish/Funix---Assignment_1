const SearchPopupOptions = ({name, id, type}) => {
  return (
    <div className="pl-4 sm:grid sm:grid-cols-2 sm:items-start sm:gap-4 sm:pt-5">
      <label
        htmlFor="first-name"
        className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {name}
      </label>
      <div className="mt-1 sm:mt-0 flex flex-col items-end">
        <input
          type={type}
          name={id}
          id={id}
          autoComplete="given-name"
          className="block w-2/4 max-w-lg rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default SearchPopupOptions;
