// node modules beings used
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");


// inquirer questions to gather data for readme
inquirer.prompt([{
    type: "input",
    message: "What is your Git username?",
    name: "userName"
},
{
    type: "input",
    message: "What are you good at?",
    name: "good"
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
}
])
// after prompting user, run AXIOS API call and generate markdown
.then(function(answers){

    axios.get(`https://api.github.com/users/${answers.userName}?access_token=eaf146335ab28170b2afb28155f6f651540b29f7`).then(function(response){
    generateMarkdown(answers, response);
    console.log(response.data.avatar_url);   
    });
       
})

