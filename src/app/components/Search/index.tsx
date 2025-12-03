"use client";

import {useState} from "react";
import {Events} from "../Events";
import {Calendar} from "lucide-react";
import {Locations} from "@/app/components/Locations";

const Search = () => {
    const [searchFilter, setSearchFilter] = useState("");
    const [locationFilter, setLocationFilter] = useState("");

    // input field for the search filter
    return (
        <div className="grid gap-4">

            <h1 className="text-xl text-gray-200 flex items-center gap-2 justify-start mb-3 mt-2">
                <Calendar />
                Events
            </h1>

            <input
                type="text"
                placeholder="Find your event"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                className="
  w-3/6
  px-4 py-2
  rounded-xl
  border border-gray-700
  bg-gray-900
  text-gray-200
  placeholder-gray-500
  focus:ring-2 focus:ring-blue-500
  focus:border-blue-500
  transition
"
            />
            {/*location component with filter*/}
            <Events searchFilter={searchFilter} locationFilter={locationFilter} />

            {/*events component with search filter*/}
            <Locations
                onSelectLocation={(id) =>
                    setLocationFilter((active) => (active === id ? "" : id))
                }
                locationFilter={locationFilter}
            />
        </div>
    );
};

export default Search;
