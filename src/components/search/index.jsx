import React, { useState } from "react";
const Search = ( { send } ) => {
    const [search, setSearch] = useState("");

    const handleChange = (event) => {
        const novoValor = event.target.value;
        setSearch(novoValor);
    
        send(novoValor);
      };

  return (
    <div className="mb-3 xl:w-96">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          value={search}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Search;
