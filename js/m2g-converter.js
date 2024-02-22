/*
Name: Assignment 1
Course Code: SODV1201
Program Name: Software Development Diploma Program
Author: Yu
Note: the real author name is in the document submitted on D2L.
*/

$("#markConvert").click(function () {
    let markInput = $("#markInput").val();
    if (markInput.length === 0) {
        $("#converterOutput").text("Input Error: the input should not be empty.");
        return;
    }
    if (isNaN(Number(markInput, 10))) {
        $("#converterOutput").text("Input Error: the input should not have any character.");
        return;
    }

    let mark = Number(markInput, 10);

    if (mark >= 90 && mark <= 100) {
        $("#converterOutput").text("Grade: A");
    } else if (mark >= 80 && mark < 90) {
        $("#converterOutput").text("Grade: B");
    } else if (mark >= 70 && mark < 80) {
        $("#converterOutput").text("Grade: C");
    } else if (mark >= 50 && mark < 70) {
        $("#converterOutput").text("Grade: D");
    } else if (mark >= 0 && mark < 50) {
        $("#converterOutput").text("Grade: F");
    } else {
        $("#converterOutput").text("Input Error: the input should be in the range from 0 to 100.");
    }
});
