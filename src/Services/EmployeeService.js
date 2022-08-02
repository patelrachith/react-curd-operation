import axios from 'axios';

const apiURL = 'https://fakestoreapi.com/users';

class EmployeeService {
  getEmployees() {
    return axios.get(apiURL);
  }
}
