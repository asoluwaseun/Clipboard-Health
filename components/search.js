import React, { useState } from "react";
import { context } from "../providers/AppProvider";

const Search = ()=>{
    const _context = React.useContext(context);
    const [search, setSearch] = React.useState("");

    return (
        <div className="w-full lg:w-full mb-3">
            <div className="h-12 flex rounded-sm shadow-sm">
                  <span
                      className="inline-flex items-center px-3 rounded-l-md bg-white text-black text-sm">
                        <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                  </span>
                <input type="text" name="search" id="search"
                       onChange={
                           (e)=>{
                               setSearch(e.target.value);
                               if(e.target.value === ""){
                                    _context.clearSearch();
                               }
                               _context.search({
                                   search: e.target.value,
                                   filter: _context.jobs.current_filter,
                                   sort: _context.jobs.current_sort
                               });
                           }
                       }
                       value={search}
                       className="flex-1 block w-full rounded-none rounded-r-md sm:text-sm"
                       placeholder="Search for any job, title, keywords or company"
                />
            </div>
        </div>
    );
}
export default Search;