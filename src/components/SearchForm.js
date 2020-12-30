import React from "react";

function SearchForm(props) {
    const { searchTerm, handleInputChange, handleFormSubmit, options } = props;
    return (<>
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <br /> 
                <input
                    className="form-control"
                    name="searchTerm"
                    list="options"
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder={`Search`}
                />
                <datalist id="options">
                    {options && options.length > 0 ? options.map(option => (
                        <option value={option.name.first + " " + option.name.last} key={option.id} />
                    )) : <></>}
                </datalist>

            </div>
            <button type="submit" className="btn btn-primary">Search</button>
        </form>
    </>
    )
}

export default SearchForm