/*
Name: Assignment 1
Course Code: SODV1201
Program Name: Software Development Diploma Program
Author: Yu
Note: the real author name is in the document submitted on D2L.
*/

function footer() {
    let copyrightEle = $("<p></p>");

    // Get the current year
    let year = new Date().getFullYear();

    copyrightEle.text("© Yu " + year);
    $("footer").append(copyrightEle);
}

export {footer}