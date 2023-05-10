const express = require('express');
const app = express();
const PORT = 1987;
const {faker} = require('@faker-js/faker');

// creates a random "fake" new user
const createUser = () => {
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.database.mongodbObjectId()
  };
  return newUser;
};

const newUserObj = createUser();

// creates a random "fake" new company
const createCompany = () => {
  const newCompany = {
    _id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCodeByState(),
      country: faker.address.country()
    }
  };
  return newCompany;
};

const newCompanyObj = createCompany();

// gets just the the user "data"
app.get('/api/users/new', (req, res) => {
  res.json(newUserObj);
})

// gets just the company "data"
app.get('/api/companies/new', (req, res) => {
  res.json(newCompanyObj);
})

// gets both the user and company "data"
app.get('/api/user/company', (req, res) => {
  const userAndCompany = [
    newUserObj, 
    newCompanyObj
  ];
  res.json(userAndCompany);
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))