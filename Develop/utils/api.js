const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const index = require("../index");

const queryUrl = `https://api.github.com/users/${answers.username}?access_token=19a9f5bc0f822f24338518a1cf74e029c8df67f1`

const api = {
  
  getUser(username) {
    axios
      .get(queryUrl)
      .then(username)

  }
};

module.exports = api;
