const employee = require('./lib/employees')
const manager = require('./lib/manager');
const intern = require('./lib/intern');
const engineer = require('./lib/engineer');
var inquirer = require('inquirer');
var fs = require('fs');
var currentMember;
var responses = [];

populateMarkdown = function(name, type, id, email, employeeSpecific) {
    if(type == 'Manager') {
        return `<div><h2>${name}</h2><h3>${type}</h3><ul><li>ID: ${id}</li><li><a href="mailto:${email}">${email}</a></li><li>Office Number: ${employeeSpecific}</li></div>`;
    }
    else if(type == 'Intern') {
        return `<div><h2>${name}</h2><h3>${type}</h3><ul><li>ID: ${id}</li><li>Email: ${email}</li><li>School: ${employeeSpecific}</li></div>`;
    }
    else if(type == 'Engineer') {
        return `<div><h2>${name}</h2><h3>${type}</h3><ul><li>ID: ${id}</li><li>Email: ${email}</li><li>Github: ${employeeSpecific}</li></div>`;
    }
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(err) => {
        if (err) {
            throw err;
        } 
        else {
            return console.log("Successfully Generated HTML FIle")
        }
    })
}

insertMarkdownData = function (responses) {
    var totalMarkdownData ='';
    for(i=0;i<responses.length;i++) {
        var z = responses[i];
        var y  = z[Object.keys(z)[Object.keys(z).length -1]];
        totalMarkdownData += populateMarkdown(responses[i].getName(),responses[i].getRole(),responses[i].getId(),responses[i].getEmail(), y);
    }
    return totalMarkdownData
}

generateMarkdown = function (responses) {
    var htmlString ='';
    if(!responses.length == 0) {
        htmlString  = `<link rel = "stylesheet" href = "styles.css"/><div class = 'divFlex'> ${insertMarkdownData(responses)}</div>`;
        writeToFile("./dist/index.html",htmlString);
    }
    else {
        return console.log('No members have been added yet! Please add at least one member.'), teamRole();
    }
}

teamRole = function() {
    inquirer
    .prompt ([
        {
            type: "list",
            message: "Which team member role are you inputting?",
            name: "teamRole",
            choices: [
                'Manager',
                'Engineer',
                'Intern',
                'No more members!',
            ]
        },
    ])

    .then((res) => {
        if(res.teamRole === 'No more members!') {
            generateMarkdown(responses);
        }
        else {
            global[`${res.teamRole.toLowerCase()}Questions`]();
            currentMember = res.teamRole.toLowerCase();
        }
    })

}

teamRole();

managerQuestions = function() {
    inquirer
    .prompt ([
        {
            type: "input",
            message: "What is the team-manager's name?",
            name: "Name"
        },

        {
            type: "input",
            message: "What is the team-manager's ID number?",
            name: "Id"
        },

        {
            type: "input",
            message: "What is the team-manager's e-mail address?",
            name: "Email"
        },

        {
            type: "input",
            message: "What is the team-manager's office number?",
            name: "OfficeNumber"
        },
    ])

    .then((res) => {
        managerDetails = new manager(res.Name,res.Id,res.Email,res.OfficeNumber);
        responses.push(managerDetails);
        teamRole();
    })
}

engineerQuestions = function() {
    inquirer
    .prompt ([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "Name"
        },

        {
            type: "input",
            message: "What is the Engineer's ID number?",
            name: "Id"
        },

        {
            type: "input",
            message: "What is the engineer's e-mail address?",
            name: "Email"
        },

        {
            type: "input",
            message: "What is the engineer's Github username?",
            name: "Github"
        },
    ])

    .then((res) => {
        engineerDetails = new engineer(res.Name,res.Id,res.Email,res.Github);
        responses.push(engineerDetails);
        console.log(responses);
        teamRole();
    })
}

internQuestions = function() {
    inquirer 
    .prompt ([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "Name"
        },

        {
            type: "input",
            message: "What is the intern's ID number?",
            name: "Id"
        },

        {
            type: "input",
            message: "What is the intern's e-mail address?",
            name: "Email"
        },

        {
            type: "input",
            message: "What school is the intern from?",
            name: "School"
        },
    ])

    .then((res) => {
        internDetails = new intern(res.Name,res.Id,res.Email,res.School);
        responses.push(internDetails);
        console.log(responses);
        teamRole();
    })
}
