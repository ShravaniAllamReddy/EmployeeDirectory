import axios from 'axios';

export function getEmployeeDetails(){
    return axios.get('https://randomuser.me/api/?results=100')
}



