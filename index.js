const inquirer = require("inquirer");
const fs = require('fs')
const htmlGen = require("./createHTML");

class Manager{
    constructor(id, name, type, email, git, work){
        this.id = id
        this.name = name
        this.type = type
        this.email = email
        this.git = git
        this.work = work
    }
}

class Intern {
    constructor(id, name, type, email, git, work){
        this.id = id
        this.name = name
        this.type = type
        this.email = email
        this.git = git
        this.work = work 
    }
}

class Engineer{
    constructor(id, name, type, email, git, work){
        this.id = id
        this.name = name
        this.type = type
        this.email = email
        this.git = git
        this.work = work 
    }
}


const managerQuestions = [
    {

        type: 'input',
        message: 'What is your ID number?',
        name: 'id'

    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'

    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'

    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'git'

    },
    {
        type: 'input',
        message: 'What is your work number?',
        name: 'work'

    },
  
   {
        type: 'list',
        message: 'What would you like to do?',
        name: 'employeeChoice',
        choices:['Intern', 'Engineer', 'DONE' ]


    }
   
];

const employeeQuestions = [
    {
    
        type: 'input',
        message: 'What is your ID number?',
        name: 'id'

    },
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'

    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'

    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'git'

    },
    {
        type: 'input',
        message: 'What is your work number?',
        name: 'work'

    },
    
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'employeeChoice',
        choices:['Intern', 'Engineer', 'DONE' ]


    }
    
];


function makeFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("File Made");
    })
}



async function start() {
    const database = []
    const response = await inquirer.prompt(managerQuestions)
    const user = new Manager(response.id, response.name, "Managaer", response.email, response.work )
    database.push(user)


if(response.employeeChoice === 'Intern'  || response.employeeChoice === 'Engineer'){
    newEmployee(response, response.employeeChoice)
}
else if (response.employeeChoice === 'DONE'){
    makeFile('index.html', htmlGen(database))
}


function addAnother(tester, newName) {
    console.log('add Another')
      newEmployee(tester, newName)
      

  }

async function newEmployee(data, name){
    let userData = await inquirer.prompt(employeeQuestions)
    if(name === 'Intern') {
        let employee = new Intern (userData.id, userData.name, name, userData.email , userData.git, userData.work  )
        database.push(employee)
    }

    else if(name === 'Engineer') {
        let employee = new Engineer (userData.id, userData.name, name, userData.email, userData.git, userData.work )
        database.push(employee)
    }


    if(userData.employeeChoice === 'DONE'){
        makeFile('index.html', htmlGen(database))
    }
    else addAnother(userData, userData.employeeChoice)
} 
}
start();




module.exports = Manager
module.exports = Intern
module.exports = Engineer
