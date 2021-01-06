import React from "react";
import { Component } from 'react';
import { getEmployeeDetails } from '../utils/API';
import SearchForm from './SearchForm';
import Table from "./Table";

// Search for a Employee
// hit the API
// Show the Employee records
class Search extends Component {
    state = {
        searchTerm: "",
        employeeList: [],
        originalList: [],
        sortedType: "ascend"
    }
    
    //default method when page loads
    componentDidMount() {
        this.fetchEmployeeDetails();
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
        console.log(value);

        // filters the employeelist by name
        const filteredEmployeeList = this.state.originalList.filter(employee => {
            return (employee.name.first.toLowerCase() + " " + employee.name.last.toLowerCase()).includes(value.toLowerCase()) || employee.name.first.toLowerCase().includes(value.toLowerCase()) ||
                employee.name.last.toLowerCase().includes(value.toLowerCase());
        })
        //console.log(filteredEmployeeList);

        this.setState({
            employeeList: filteredEmployeeList
        });

    }

    // sorts the table by name in ascending and descending order
    handleSort = () => {
        let sortedTypeVal = this.state.sortedType;
        let sortedEmployeeList;
        if (sortedTypeVal === "ascend") {

            sortedTypeVal = "descend"
            sortedEmployeeList =
                this.state.employeeList.sort(function (a, b) {

                    var nameA = a.name.first.toLowerCase() + " " + a.name.last.toLowerCase()
                    var nameB = b.name.first.toLowerCase() + " " + b.name.last.toLowerCase();
                    return nameA.localeCompare(nameB);


                })

        }
        else {
            sortedTypeVal = "ascend"
            sortedEmployeeList =
                this.state.employeeList.sort(function (a, b) {

                    var nameA = a.name.first.toLowerCase() + " " + a.name.last.toLowerCase()
                    var nameB = b.name.first.toLowerCase() + " " + b.name.last.toLowerCase();
                    return nameB.localeCompare(nameA);
                })
        }

        console.log(sortedTypeVal);
        this.setState({
            sortedType: sortedTypeVal,
            employeeList: sortedEmployeeList
        });

    }

    // fetches employee details
    fetchEmployeeDetails() {
        getEmployeeDetails().then(res => {

            this.setState({ employeeList: res.data.results, originalList: res.data.results })
        })
    }

    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <SearchForm
                            handleInputChange={this.handleInputChange}
                            searchTerm={this.searchTerm}
                            employee={this.state.employeeList}
                        />
                    </div>
                </div>
                <br />
                <Table
                    handleSort={this.handleSort}
                    employeeList={this.state.employeeList}
                />
            </>
        )
    }
}

export default Search;