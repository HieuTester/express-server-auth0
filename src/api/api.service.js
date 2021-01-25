/**
 * Service Methods
 */
// import {data} from '../data/data.js'
const data = require("../data/data")

const getEmployees = () => {
  return data
};

const genNewId = () => Math.random().toString(36).substr(2, 23)

const addNewEmployee = (newEmployee) => {
  if(newEmployee) {
    newEmployee.id = genNewId();
    data.employees.push(newEmployee)
    return newEmployee
  }
};

const getProtectedMessage = () => {
  return {
    message: "The API successfully validated your access token.",
  };
};

module.exports = {
  getEmployees,
  getProtectedMessage,
  addNewEmployee,
};
