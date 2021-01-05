import React from "react";

function Table(props) {
    console.log(props);
    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">D.O.B</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Location</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.employeeList.length > 0 ? props.employeeList.map(
                        employee => {
                            return (
                                <tr key={employee.id}>
                                    <td>
                                        <img alt={employee.name.first} src={employee.picture.medium} />
                                    </td>
                                    <td> {employee.name.first + " " + employee.name.last} </td>
                                    <td>{employee.email}</td>
                                    <td>{employee.dob.date}</td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.location.city}</td>
                                </tr>
                            )
                        }
                    ) : (
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        )
                }


            </tbody>
        </table>
    )
}


export default Table;