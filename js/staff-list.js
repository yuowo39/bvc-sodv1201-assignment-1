/*
Name: Assignment 1
Course Code: SODV1201
Program Name: Software Development Diploma Program
Author: Yu
Note: the real author name is in the document submitted on D2L.
*/

// Enum of the columns of the staff dataset
const Cols = {
    FullName: 0,
    Role: 1,
    Location: 2,
    ID: 3,
    Date: 4,
    Salary: 5
}

// Enum of orders
const Orders = {
    ASC: 0,
    DESC: 1
}

// Init
initTableHeaders();

// Hash handler and form generator
getHashForOrderBy();
window.addEventListener("hashchange", getHashForOrderBy);

// Reset Filter
$("#resetFilter").click(function () {
    window.location.href = "./index.html";
});

function initTableHeaders() {
    $("#byFullName").html(`<a href="#byFullNameASC">Full Name</a>`);
    $("#byRole").html(`<a href="#byRoleASC">Role</a>`);
    $("#byLocation").html(`<a href="#byLocationASC">Location</a>`);
    $("#byID").html(`<a href="#byID-ASC">ID</a>`);
    $("#byDate").html(`<a href="#byDateASC">Date</a>`);
    $("#bySalary").html(`<a href="#bySalaryASC">Salary</a>`);
}

function fillStaffDataIntoForm(staffDataSet) {
    for (const staff of staffDataSet) {
        let staffRow = $("<tr></tr>");
        for (const data of staff) {
            let staffData = $("<td></td>");
            staffData.text(data);
            staffRow.append(staffData);
        }
        $("#staff-data").append(staffRow);
    }
}

function getHashForOrderBy() {
    let hash = window.location.hash;
    initTableHeaders();

    // Clean the table data before filling
    cleanTableData();

    switch (hash) {
        case "#byFullNameASC":
            $("#byFullName").html(`<a href="#byFullNameDESC"><strong>Full Name &#8593;</strong></a>`);
            orderBy(Cols.FullName, Orders.ASC);
            break;

        case "#byFullNameDESC":
            $("#byFullName").html(`<a href="#byFullNameASC"><strong>Full Name &#8595;</strong></a>`);
            orderBy(Cols.FullName, Orders.DESC);
            break;

        case "#byRoleASC":
            $("#byRole").html(`<a href="#byRoleDESC"><strong>Role &#8593;</strong></a>`);
            orderBy(Cols.Role, Orders.ASC);
            break;

        case "#byRoleDESC":
            $("#byRole").html(`<a href="#byRoleASC"><strong>Role &#8595;</strong></a>`);
            orderBy(Cols.Role, Orders.DESC);
            break;

        case "#byLocationASC":
            $("#byLocation").html(`<a href="#byLocationDESC"><strong>Location &#8593;</strong></a>`);
            orderBy(Cols.Location, Orders.ASC);
            break;

        case "#byLocationDESC":
            $("#byLocation").html(`<a href="#byLocationASC"><strong>Location &#8595;</strong></a>`);
            orderBy(Cols.Location, Orders.DESC);
            break;

        case "#byID-ASC":
            $("#byID").html(`<a href="#byID-DESC"><strong>ID &#8593;</strong></a>`);
            orderBy(Cols.ID, Orders.ASC);
            break;

        case "#byID-DESC":
            $("#byID").html(`<a href="#byID-ASC"><strong>ID &#8595;</strong></a>`);
            orderBy(Cols.ID, Orders.DESC);
            break;

        case "#byDateASC":
            $("#byDate").html(`<a href="#byDateDESC"><strong>Date &#8593;</strong></a>`);
            orderBy(Cols.Date, Orders.ASC);
            break;

        case "#byDateDESC":
            $("#byDate").html(`<a href="#byDateASC"><strong>Date &#8595;</strong></a>`);
            orderBy(Cols.Date, Orders.DESC);
            break;

        case "#bySalaryASC":
            $("#bySalary").html(`<a href="#bySalaryDESC"><strong>Salary &#8593;</strong></a>`);
            orderBy(Cols.Salary, Orders.ASC);
            break;

        case "#bySalaryDESC":
            $("#bySalary").html(`<a href="#bySalaryASC"><strong>Salary &#8595;</strong></a>`);
            orderBy(Cols.Salary, Orders.DESC);
            break;

        default:
            fillStaffDataIntoForm(staffData);
            break;
    }
}

function cleanTableData() {
    $("#staff-data > tr").remove();
}

function orderBy(col, order) {
    let orderedDataSet = staffData;
    if (order === Orders.ASC) {
        // Order by ASC: from small to large
        // Move the larger ones to the back of array
        for (let i = 0; i < orderedDataSet.length - 1; i++) {
            for (let j = 0; j < orderedDataSet.length - 1 - i; j++) {
                if (orderedDataSet[j][col].substring(0, 1) === "$") {
                    // for the column: Salary
                    let num1 = removeCommasAndGetNumber(orderedDataSet[j][col]);
                    let num2 = removeCommasAndGetNumber(orderedDataSet[j + 1][col]);
                    if (num1 > num2) {
                        [orderedDataSet[j], orderedDataSet[j + 1]] = [orderedDataSet[j + 1], orderedDataSet[j]];
                    }
                } else if (orderedDataSet[j][col] > orderedDataSet[j + 1][col]) {
                    // for normal columns
                    [orderedDataSet[j], orderedDataSet[j + 1]] = [orderedDataSet[j + 1], orderedDataSet[j]];
                }
            }
        }
    } else if (order === Orders.DESC) {
        // Order by DESC: from large to small
        // Move the smaller ones to the back of array
        for (let i = 0; i < orderedDataSet.length - 1; i++) {
            for (let j = 0; j < orderedDataSet.length - 1 - i; j++) {
                if (orderedDataSet[j][col].substring(0, 1) === "$") {
                    // for the column: Salary
                    let num1 = removeCommasAndGetNumber(orderedDataSet[j][col]);
                    let num2 = removeCommasAndGetNumber(orderedDataSet[j + 1][col]);
                    if (num1 < num2) {
                        [orderedDataSet[j], orderedDataSet[j + 1]] = [orderedDataSet[j + 1], orderedDataSet[j]];
                    }
                } else if (orderedDataSet[j][col] < orderedDataSet[j + 1][col]) {
                    // for normal columns
                    [orderedDataSet[j], orderedDataSet[j + 1]] = [orderedDataSet[j + 1], orderedDataSet[j]];
                }
            }
        }
    } else {
        throw "Function orderBy() Error: an unknown value used on the parameter 'order'.";
    }
    fillStaffDataIntoForm(orderedDataSet);
}

// Remove , and $ from the value of the column: Salary
// and return a number
function removeCommasAndGetNumber(numberString) {
    numberString = numberString.replaceAll("$", "");
    numberString = numberString.replaceAll(",", "");
    return parseInt(numberString, 10);
}