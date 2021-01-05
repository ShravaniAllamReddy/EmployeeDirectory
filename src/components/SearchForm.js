import React from "react";

function SearchForm(props) {
    const { searchTerm, handleInputChange, employee } = props;
    return (<>
        <form>
            <div className="form-group">
                <br />
                <input
                    className="form-control"
                    name="searchTerm"
                    list="employee"
                    type="text"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder={`Search`}
                />
                <datalist id="employee">
                    {employee && employee.length > 0 ? employee.map(emp => (
                        <option value={emp.name.first + " " + emp.name.last} key={emp.id} />
                    )) : <></>}
                </datalist>

            </div>
        </form>
    </>
    )
}

export default SearchForm;