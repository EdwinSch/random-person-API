/* ---- TARGETS && INITIALIZERS ---- */

import getElement from "./getElement.js";

const url = "https://randomuser.me/api/";

const userImg = getElement(".user-img");
const userTitle = getElement(".user-title");
const userValue = getElement(".user-value");
const randomBtn = getElement(".btn");
// Get all icons nodelist and spread to array
const icons = [...document.querySelectorAll(".icon")];

/* ---- FUNCTIONS ---- */

// Get random user from API
const getUser = async () => {
  const response = await fetch(url);
  // console.log(response);
  const data = await response.json();
  // console.log(data);

  // destructure the incoming object
  const person = data.results[0];
  const { phone, email } = person;
  const { large: img } = person.picture;
  const { password } = person.login;
  const { first, last } = person.name;
  const { age } = person.dob;
  const {
    street: { number, name },
  } = person.location;
  // Return a new object with destructerd values
  return {
    phone,
    email,
    img,
    password,
    age,
    street: `${number} ${name}`,
    name: `${first} ${last}`,
  };
};

// Show user function
const showUser = async () => {
  // await the async promise from getUser
  const newPerson = await getUser();
  // display user in DOM
};

// ON Page Load: trigger show user
window.addEventListener("DOMContentLoaded", showUser);
// ON Button Click: trigger show user
randomBtn.addEventListener("click", showUser);
