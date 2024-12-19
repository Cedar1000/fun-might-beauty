"use client";

import React, { useState } from "react";
import axios from "@/utils/axios";

const SearchModal = ({ isVisible, onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query) => {
    setSearchQuery(query);
    if (!query) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(`/products/search/${query}`);
      const results = Array.isArray(response.data.doc) ? response.data.doc : [];
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]); 
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setSearchQuery(""); 
    setSearchResults([]); 
    onClose(); 
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-3/4 md:w-1/2 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-2xl text-gray-500"
        >
          &times;
        </button>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search for products..."
          className="w-full p-2 mt-6 border border-gray-300 rounded-md"
        />
        {isLoading ? (
          <p className="text-center mt-4">Loading...</p>
        ) : (
          <ul className="mt-4">
            {searchResults.length > 0 ? (
              searchResults.map((result) => (
                <li
                  key={result.id}
                  className="p-2 border-b flex items-center gap-4"
                >
                  <img
                    src={result.images[0]?.url || ""}
                    alt={result.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-bold">{result.name}</p>
                    <p className="text-sm text-gray-500">
                      {result.description}
                    </p>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-center text-gray-500 mt-4">
                No results found {searchQuery}.
              </p>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchModal;
