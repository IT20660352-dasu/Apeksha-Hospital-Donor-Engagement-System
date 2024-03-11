import React, { useState, useEffect, useContext } from "react";
import ItemContext from "../../contexts/ItemContext";
import Chart from "chart.js/auto";

const StaffEssentialItems = () => {
    const { items } = useContext(ItemContext);
    const [showAll, setShowAll] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState('');
    const [displayedItems, setDisplayedItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (showAll) {
            setDisplayedItems(items);
        } else {
            if (selectedMonth) {
                const filteredItems = items.filter(item => item.Month === selectedMonth);
                setDisplayedItems(filteredItems);
            } else {
                setDisplayedItems(items.slice(0, 20));
            }
        }
    }, [items, showAll, selectedMonth]);

    const handleSeeMore = () => {
        setShowAll(true);
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
        setShowAll(false);
    };

    return (
        <>


            <label
                className="mx-auto mt-28 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
                htmlFor="search-bar"
            >
                <input
                    id="search-bar"
                    placeholder="Search Items by name"
                    className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white"
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <button className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
                    <div className="relative">
                        <div className="flex items-center justify-center h-3 w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all">
                            <svg
                                className="opacity-0 animate-spin w-full h-full"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle className="opacity-25" cx={12} cy={12} r={10} stroke="currentColor" strokeWidth={4} />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                            </svg>
                        </div>
                        <div className="flex items-center transition-all opacity-1 valid:">
                            <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">Search</span>
                        </div>
                    </div>
                </button>
            </label>
            <div className="flex justify-end pr-12">
                <label htmlFor="monthSelect">Filter by Month: </label>
                <select
                    id="monthSelect"
                    onChange={handleMonthChange}
                    value={selectedMonth}
                    className="ml-2 px-2 py-1 border rounded-md"
                >
                    <option value="">All</option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>

                </select>
            </div>

            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10 mt-4">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Item Name</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Item Code</th>
                            <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold">Predicted Value</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {displayedItems.filter((val) => {
                            if (searchTerm === "") {
                                return val;
                            } else if (val.ItemName.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val;
                            }
                        })
                            .map((elem, index) => (
                                <tr key={index}>
                                    <td className="py-4 px-6 border-b border-gray-200">{elem.ItemName}</td>
                                    <td className="py-4 px-6 border-b border-gray-200 truncate">{elem.Month}</td>
                                    <td className="py-4 px-6 border-b border-gray-200">{elem.Prediction}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
                {!showAll && (
                    <div className="mx-auto mt-4">
                        <button
                            onClick={handleSeeMore}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            See More
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default StaffEssentialItems;