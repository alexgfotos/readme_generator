const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer.prompt([{
    type: "input",
    message: "What is your Git username?",
    name: "userName"
},
{
    type: "input",
    message: "What is the title of your project?",
    name: "title"
},
{
    type: "input",
    message: "Describe your project",
    name: "description"
},
{
    type: "input",
    message: "What is the installation process?",
    name: "install"
},
{
    type: "input",
    message: "What is the intended usage?",
    name: "usage"
},
{
    type: "input",
    message: "Whose name is this licensed under? Provide your full name please",
    name: "license"
},
{
    type: "input",
    message: "Who are the contributors?",
    name: "contributors"
},
{
    type: "input",
    message: "What are the tests?",
    name: "tests"
},


])
.then(function(answers, data){
    axios.get(`https://api.github.com/users/${answers.username}?access_token=08a667f2fa139c0b261cef5364c5b33b43751a6e`).then(function(data){
    generateMarkdown(answers, data);
    // console.log(data);   
    });
       
})




function init() {

}

init();
