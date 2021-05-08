'use strict';
var inquirer = require('inquirer');
var fs = require('fs');
var Intern = require('./lib/Intern');
var Engineer = require('./lib/Engineer');
var Manager = require('./lib/Manager');
var employees = [];

function getPrompts(employeeType) {
var extraText;

switch (employeeType) {
case 'Team Manager':
  extraText = 'Office Number';
break;
case 'Intern':
  extraText = 'School';
break;
case 'Engineer':
  extraText = 'Github';
break;
default:
extraText = '';
break;
}
return [
    {
      type: 'input',
      name: 'name',
      message: "Enter " + employeeType + "'s Name "
    },
    {
      type: 'input',
      name: 'id',
      message: "Enter "+ employeeType + "'s ID "
    },
    {
      type: 'input',
      name: 'email',
      message: "Enter "+ employeeType + "'s Email "
    },
    {
      type: 'input',
      name: 'extraInfo',
      message: "Enter "+ employeeType + "'s " + extraText + " "
    },
{
type: 'rawlist',
name: 'employeeType',
message: 'Select employee type, or Exit',
choices: ['Engineer', 'Intern', 'Exit'],
},
    ];
}
function getEmployeeData(employeeType) {
  inquirer
    .prompt(getPrompts(employeeType)).then( function(answer) {
switch (employeeType) {
case 'Team Manager':
employees.push(new Manager(answer.name, answer.id, answer.email, answer.extraInfo));
break;
case 'Engineer':
employees.push(new Engineer(answer.name, answer.id, answer.email, answer.extraInfo));
break;
case 'Intern':
employees.push(new Intern(answer.name, answer.id, answer.email, answer.extraInfo));
break;
default:
break;
}
if (answer.employeeType == 'Exit') {
var lines = getHtml();
var fileName = './dist/output.html';

writeLinesFromArray(fileName, lines);
} else getEmployeeData(answer.employeeType);
});
}
function writeLinesFromArray(path, lines) {
fs.unlink(path, (err) => {
 if (err) {
 console.log(path + ' was deleted');
 throw err;
 }
});
lines.forEach(function(line) {
fs.appendFileSync(path, line+'\n', (err) => {
    if (err) throw err;
    console.log('Error writing file!');
});
});
}
function getHtml() {
var html = [];

employees.sort(function(a, b){
        return a.getId() - b.getId();
});
html.push("<html>");
html.push("   <head>");
html.push("      <link rel = \"stylesheet\" type = \"text/css\" href = \"./employee.css\">");
html.push("   </head>");
html.push("   <body>");
html.push("      <div class=\"myTeamHeading\">");
    html.push("         <div class=\"center\">");
    html.push("            <p>My Team</p>");
    html.push("         </div>");
    html.push("      </div>");
    html.push("      <div class=\"body\">");
    var gotStartRow = false;
    var cellLocation = 'left';
for (var i = 0; i < employees.length; i++) {
if ((i % 3) == 0) {
html.push("         <div class=\"row\">");
}
html.push("            <div class=\"" + cellLocation + "\">");
html.push("               <div class=\"head\">");
html.push("                  <div>" + employees[i].getName() + "</div>");
html.push("                  <div>" + employees[i].getRole() + "</div>");
html.push("               </div>");
html.push("               <div>");
html.push("                  <div>ID: " + employees[i].getId() + "</div>");
html.push("                  <div>Email: <a href=\"mailto:" + employees[i].getEmail() + "\">" + employees[i].getEmail() + "</a></div>");
switch(employees[i].getRole()) {
case 'Intern':
html.push("                  <div>School: " + employees[i].getSchool() + "</div>");
break;
case 'Manager':
html.push("                  <div>Office number: " + employees[i].officeNumber + "</div>");
break;
case 'Engineer':
html.push("                  <div>GitHub: <a href=\"https://github.com/" + employees[i].getGithub() + "\" target=\"_blank\">" + employees[i].getGithub() + "</a></div>");
break;
}

html.push("               </div>");
if ((i % 3)==2 || (i+1)==employees.length) {
html.push("            </div>");
}
html.push("         </div>");
if (cellLocation == 'left')
  cellLocation == 'middle';
else if (cellLocation == 'middle')
  cellLocation == 'right';
else cellLocation = 'left';
}
    html.push("      </div>");
html.push("   </body>");
html.push("</html>");

return html;
}
getEmployeeData('Team Manager');