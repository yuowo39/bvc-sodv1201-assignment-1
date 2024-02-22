/*
Name: Assignment 1
Course Code: SODV1201
Program Name: Software Development Diploma Program
Author: Yu
Note: the real author name is in the document submitted on D2L.
*/

function header() {
    // Get the current document's title
    let title = $(document).attr('title');

    let titleEle = $("<h1></h1>");
    titleEle.text(title);
    $("header").append(titleEle);
}

export {header}