import React from 'react'

function Search({property, setSearchResults}) {
    const handleSubmit = (e) => e.preventDefault()

    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(property)

        const resultsArray = property.filter(property => property.propertypurpose.includes(e.target.value) || property.propertytype.includes(e.target.value) || property.propertysubtype.includes(e.target.value) || property.propertysize.includes(e.target.value) || property.propertysizetype.includes(e.target.value) || property.propertyprice.includes(e.target.value) || property.propertytitle.includes(e.target.value) || property.propertydescription.includes(e.target.value))

        setSearchResults(resultsArray)
    }
    const handleLocationChange = (e) => {
        if (!e.target.value) return setSearchResults(property)

        const resultsArray = property.filter(property => property.propertylocation.includes(e.target.value))

        setSearchResults(resultsArray)
    }

    return (
        <div class="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: "35px" , backgroundColor:"#00B98E" }}>
            <div class="container">
                <div class="row g-2">
                    <div class="col-md-10">
                        <div class="row g-2">
                            <div class="col-md-4">
                                <input type="text" class="search__input form-control border-0 py-3" placeholder="Search Keyword" id='search' onChange={handleSearchChange} />
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0 py-3" onChange={handleSearchChange}>
                                    <option selected>Property Type</option>
                                    <option value="residential">Residential</option>
                                    <option value="plot">Plot</option>
                                    <option value="commercial">Commercial</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <input type='text' class="search__input form-control border-0 py-3" placeholder='Location' id='location' onChange={handleLocationChange} />
                                {/* <select class="form-select border-0 py-3">
                                    <option selected>Location</option>
                                    <option value="1">Location 1</option>
                                    <option value="2">Location 2</option>
                                    <option value="3">Location 3</option>
                                </select> */}
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button style={{backgroundColor:"#00b98e"}} class="search__button btn btn-dark border-0 w-100 py-3">Search</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Search
