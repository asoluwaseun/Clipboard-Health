import React from "react";
import { context } from "../providers/AppProvider";

const FilterModal = () => {
    const _context = React.useContext(context);
    return (
       _context.filterModal.visibility ?
            <div
            className="absolute flex h-screen w-full flex-grow bg-black bg-opacity-25" 
        >
            <div className="fixed flex h-screen w-full justify-center items-center">
                <div className="flex flex-col w-9/12 bg-white rounded shadow-sm">
                    <div className="flex justify-between items-center p-4">
                        <span className="">{_context.filterModal.name}</span>
                        <button
                            onClick={() => _context.handleFilterModal(!_context.filterModal.visibility)}
                            className="w-3 h-4 focus:outline-none"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357">
                                <path d="M357 35.7L321.3 0 178.5 142.8 35.7 0 0 35.7l142.8 142.8L0 321.3 35.7 357l142.8-142.8L321.3 357l35.7-35.7-142.8-142.8z" />
                            </svg>
                        </button>
                    </div>
                    <div className="border-b border-gray-200" />
                    <div className="flex flex-wrap">
                        {_context.filterModal.items.map((v, i) => {
                            return (
                            <p key={`${v.key}_${i}`} className="w-3/12 m-3">
                                <a
                                    className="cursor-pointer text-sm"
                                    onClick={() => {
                                        _context.handleFilterModal({
                                            ..._context.filterModal,
                                            visibility: false
                                        })
                                        _context.filter({
                                            filter: `${_context.filterModal.raw_name}:${v.key}`,
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
                    </div>
                </div>
            </div>
        </div>
        : <div></div>
    );
}
export default FilterModal;