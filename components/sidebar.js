import React from "react";
import { context } from "../providers/AppProvider";

import { underscore_remover } from "../utils";

const SideBar = React.memo(()=>{
    const _context = React.useContext(context);

    return (
        <div className="hidden lg:block lg:w-1/4">
            {_context.filters &&
                Object.keys(_context.filters).map((filter,i)=>{
                    return(
                        <div key={`${filter}_${i}_${filter}`} className="h-15 p-3 mb-3 bg-white rounded-sm shadow-sm">
                            <h3 className="text-lg font-bold mb-2 uppercase">{underscore_remover(filter)}</h3>
                            {
                                _context.filters[filter].slice(0,10).map((v,i)=>{
                                    return (
                                        <p key={`${v.key}_${i}`} className="mb-2">
                                            <a
                                                className="cursor-pointer"
                                                onClick={() => {
                                                    _context.filter({
                                                        filter: `${filter}:${v.key}`,
                                                        sort: _context.jobs.current_sort,
                                                        search: _context.jobs.current_search
                                                    });
                                                }}
                                            >
                                                <span>{v.key}</span>
                                                <small className="ml-2 text-gray-400">{v.doc_count.toLocaleString()}</small>
                                            </a>
                                        </p>
                                    )
                                })
                            }
                            {
                                _context.filters[filter].length > 10 &&
                                <p className="mb-2">
                                    <a
                                        className="cursor-pointer text-blue-500"
                                        onClick={() => {
                                            _context.handleFilterModal({
                                                visibility: !_context.filterModal.visibility,
                                                name: underscore_remover(filter),
                                                raw_name: filter,
                                                items: _context.filters[filter]
                                            });
                                        }}
                                    >
                                        <span>Show more</span>
                                    </a>
                                </p>
                            }
                        </div>
                    )
                })
            }
        </div>
    );
});

export default SideBar;