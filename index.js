const fs = require('fs')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const inquirer = require('inquirer')
const path = require('path')
const generateCards =  require('./src/template')
const employeeArray = []

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const managerQuestions = [
    {
        type: 'input',
        message: "What is the team manager's name?",
        name: 'managerName'
    },
    {
        type: 'input',
        message: "What is the team manager's employee ID?",
        name: 'managerID'
    },
    {
        type: 'input',
        message: "What is the team manager's email?",
        name: 'managerEmail'
    },
    {
        type: 'input',
        message: "What is the team manager's office number?",
        name: 'managerOfficeNumber'
    }
];

const postManagerPrompt = [
    {
        type: 'list',
        message: "Would you like to add an Engineer or Intern?",
        choices: ['Engineer', 'Intern', 'No'],
        name: 'postManagerPrompt'
    }
]

const engineerQuestions = [
    {
        type: 'input',
        message: "What is the Engineer's name?",
        name: 'engineerName'
    },
    {
        type: 'input',
        message: "What is the engineer's employee ID?",
        name: 'engineerID'
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'engineerEmail'
    },
    {
        type: 'input',
        message: "What is the engineer's github username?",
        name: 'engineerGithub'
    }
]

const internQuestions = [
    {
        type: 'input',
        message: "What is the Intern's name?",
        name: 'internName'
    },
    {
        type: 'input',
        message: "What is the intern's employee ID?",
        name: 'internID'
    },
    {
        type: 'input',
        message: "What is the intern's email?",
        name: 'internEmail'
    },
    {
        type: 'input',
        message: "What is the intern's school?",
        name: 'internsSchool'
    }
]

//Handle responses and hold user data all together

function start() {
    inquirer.prompt(managerQuestions)
        .then((managerRes) => {
            const manager = new Manager(managerRes.managerName , managerRes.managerID , managerRes.managerEmail, managerRes.managerOfficeNumber)
            employeeArray.push(manager)
            inquirer.prompt(postManagerPrompt)
            .then((res)=>{
                nextquestion(res.postManagerPrompt)
            })
        })

}

function nextquestion(choices) {
    if (choices === 'Engineer') {
        engineerPrompt();
    } else if (choices === 'Intern') {
        internPrompt()
    } else {
        resultsPage()
    }
}

function engineerPrompt() {
    inquirer.prompt(engineerQuestions)
        .then((engineerRes)=>{
            const engineer = new Engineer(engineerRes.engineerName, engineerRes.engineerID, engineerRes.engineerEmail, engineerRes.engineerGithub)
            employeeArray.push(engineer)
            inquirer.prompt(postManagerPrompt)
            .then((res)=>{
                nextquestion(res.postManagerPrompt)
            })
        })
        
}

function internPrompt() {
    inquirer.prompt(internQuestions)
        .then((internRes)=>{
            const intern = new Intern (internRes.internName, internRes.internID, internRes.internEmail, internRes.internSchool)
            employeeArray.push(intern)
            inquirer.prompt(postManagerPrompt)
            .then((res)=>{
                nextquestion(res.postManagerPrompt)
            })
        })
}

function resultsPage() {
    //index.html needs to be written into the dist directoy. if the directory doesdnt exit we need to create it. 
    if(!fs.existsSync(path.resolve(__dirname, 'dist'))) {
       fs.mkdirSync(path.resolve(__dirname, 'dist'))
    } 
    fs.writeFileSync(path.join(path.resolve(__dirname, 'dist'), 'index.html'), generateCards(employeeArray), 'utf-8')
}



start()