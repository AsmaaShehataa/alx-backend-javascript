"use strict";
exports.__esModule = true;
exports.rendTable = void 0;
var student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 21,
    location: 'USA'
};
var student2 = {
    firstName: 'George',
    lastName: 'Daniel',
    age: 22,
    location: 'UK'
};
console.log(student1, student2);
var styleSheet = "\n  html {\n    margin: 0;\n    height: 100%;\n  }\n  body {\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 80%;\n    margin: 10%;\n  }\n  table {\n    border-collapse: collapse;\n  }\n  thead {\n    font-weight: bold;\n  }\n  td {\n    padding: 10px;\n    border: 1px solid gray;\n    cursor: pointer;\n  }\n  td:hover {\n    background: gainsboro;\n  }\n\n  td:nth-child(1) {\n    text-align: center;\n  }\n";
exports.rendTable = function (students) {
    var table = document.createElement('table');
    var tableHead = document.createElement('thead');
    var headRow = document.createElement('tr');
    var tableBody = document.createElement('tbody');
    headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td');
    headRow.insertAdjacentHTML('beforeend', '<td>Location</td');
    tableHead.insertAdjacentElement('beforeend', headRow);
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        var bodyRow = document.createElement('tr');
        bodyRow.insertAdjacentHTML('beforeend', "<td>" + student.firstName + "</td>");
        bodyRow.insertAdjacentHTML('beforeend', "<td>" + student.location + "</td>");
        tableBody.insertAdjacentElement('beforeend', bodyRow);
    }
    table.insertAdjacentElement('beforeend', tableHead);
    table.insertAdjacentElement('beforeend', tableBody);
    document.body.insertAdjacentElement('beforeend', table);
};
var studentsList = [student1, student2];
exports.rendTable(studentsList);
var styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
