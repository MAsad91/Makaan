import React, { useState, useEffect } from "react";
import axios from "axios";
import CardCarousel from "./CardCarousel";

function Search() {
  const [property, setProperty] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/property/");
      setProperty(data);
    };

    fetchData();
  }, []);

  const handleSearchChange = (e) => {
    if (!e.target.value) {
      setSearchResults(property);
      return;
    }

    const resultsArray = property.filter((property) =>
      Object.values(property).some((value) =>
        String(value).toLowerCase().includes(e.target.value.toLowerCase())
      )
    );

    setSearchResults(resultsArray);
  };

  const handleLocationChange = (e) => {
    if (!e.target.value) {
      setSearchResults(property);
      return;
    }

    const resultsArray = property.filter((property) =>
      property.propertylocation.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setSearchResults(resultsArray);
  };

  return (
    <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: "35px", backgroundColor: "#00B98E" }}>
      <div className="container">
        <div className="row g-2">
          <div className="col-md-10">
            <div className="row g-2">
              <div className="col-md-4">
                <input
                  type="text"
                  className="search__input form-control border-0 py-3"
                  placeholder="Search Keyword"
                  id="search"
                  onChange={handleSearchChange}
                />
              </div>
              <div className="col-md-4">
                <select className="form-select border-0 py-3" onChange={handleSearchChange}>
                  <option selected>Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="plot">Plot</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="search__input form-control border-0 py-3"
                  placeholder="Location"
                  id="location"
                  onChange={handleLocationChange}
                />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <button style={{ backgroundColor: "#00b98e" }} className="search__button btn btn-dark border-0 w-100 py-3">
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <CardCarousel property={searchResults} />
      </div>
    </div>
  );
}

export default Search;
