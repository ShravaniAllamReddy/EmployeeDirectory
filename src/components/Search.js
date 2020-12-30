
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
        employeeList: []

    }

    componentDidMount() {
        this.fetchEmployeeDetails();
    }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
        console.log(value);


    }

    handleFormSubmit = event => {
        // call fetch Employees
        event.preventDefault();

    }

    fetchEmployeeDetails() {
        getEmployeeDetails().then(res => {

            this.setState({ employeeList: res.data.results })
        })
    }


    render() {
        return (
            <>
                <div className="row">
                    <div className="col">
                        <SearchForm
                            handleInputChange={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            searchTerm={this.searchTerm}
                            options={this.state.employeeList}
                        />

                    </div>
                </div>
                <br />
                <Table
                    employeeList={this.state.employeeList}
                />

            </>
        )
    }
}

export default Search;