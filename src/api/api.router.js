/**
 * Required External Modules and Interfaces
 */

const express = require("express");
const { getEmployees, getProtectedMessage, addNewEmployee } = require("./api.service");
const { checkJwt } = require("../authz/check-jwt");

/**
 * Router Definition
 */

const employeesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET messages/

employeesRouter.get("/", (req, res) => {
  const employees = getEmployees();
  res.status(200).send(employees);
});

employeesRouter.post("/", (req, res) => {
  const employees = getEmployees();
  res.status(200).send(employees);
});

employeesRouter.get("/protected-message", checkJwt, (req, res) => {
  const message = getProtectedMessage();
  res.status(200).send(message);
});

module.exports = {
  employeesRouter,
};
