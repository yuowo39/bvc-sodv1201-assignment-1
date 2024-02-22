/*
Name: Assignment 1
Course Code: SODV1201
Program Name: Software Development Diploma Program
Author: Yu
Note: the real author name is in the document submitted on D2L.
*/

function f2c(f) {
    return (f - 32) * 5 / 9;
}

function f2k(f) {
    return f2c(f) + 273.15;
}

$("#convertTemp").click(function () {
    let f = $("#fahrenheit").val();

    if (f.length === 0) {
        $("#celsius").text("");
        $("#kelvin").text("");
        return;
    }
    if (isNaN(Number(f, 10))) {
        $("#celsius").text("NULL");
        $("#kelvin").text("NULL");
        return;
    }

    f = Number(f, 10);
    $("#celsius").text(f2c(f).toFixed(2));
    $("#kelvin").text(f2k(f).toFixed(2));
});