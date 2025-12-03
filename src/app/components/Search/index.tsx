"use client";

import {useState} from "react";
import {Events} from "../Events";

const Search = () => {
    const [searchFilter, setSearchFilter] = useState("");

    // input field for the search filter
    return (
        <div>
            <input
                type="text"
                placeholder="Search for events..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
            />

            {/*events component with search filter*/}
            <Events searchFilter={searchFilter}/>
        </div>
    );
};

export default Search;
