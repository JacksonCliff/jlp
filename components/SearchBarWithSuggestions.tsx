import React, { useState, useEffect, useRef } from "react";
import {wholeMenu} from "../Constant/UIDatas";

type SearchBarProps = {
    suggestions: { name: string }[];
    onSearch: (query: string) => void;
    placeholder?: string;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    setData : React.Dispatch<React.SetStateAction<object[]>>;

};

const SearchBarWithSuggestions: React.FC<SearchBarProps> = ({
                                                                suggestions,
                                                                onSearch,
                                                                placeholder = "Search...",
                                                                show,
                                                                setShow,
                                                                setData
                                                            }) => {
    const [query, setQuery] = useState("");
    const [filtered, setFiltered] = useState<{ name: string }[]>([]);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setShow(false);
            }
            setData(wholeMenu)
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        if (query.trim() === "") {
            setFiltered(suggestions);
        } else {
            const matches = suggestions.filter((item) =>
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setFiltered(matches);
        }
    }, [query, suggestions]);

    useEffect(() => {
        if (show) {
            setQuery(""); // clear input text when mother shows the search
        }
    }, [show]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim() !== "") {
            onSearch(query.trim());
            setShow(false);
        }
    };

    const handleSelect = (value: string) => {
        setQuery(value);
        setShow(false);
        onSearch(value);
    };

    return (
        <div ref={wrapperRef} className="relative w-full max-w-md mx-auto">
            <form
                onSubmit={handleSubmit}
                className="flex items-center bg-white border border-gray-300 rounded-full shadow-sm overflow-hidden"
            >
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setShow(true);
                    }}
                    placeholder={placeholder}
                    className="flex-grow px-4 py-2 outline-none text-gray-700"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-r-full hover:bg-blue-700 transition"
                >
                    Search
                </button>
            </form>

            {show && filtered.length > 0 && (
                <ul className="absolute left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {filtered.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(item.name)}
                            className="px-4 py-2 hover:bg-blue-50 cursor-pointer text-sm text-gray-700"
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchBarWithSuggestions;
