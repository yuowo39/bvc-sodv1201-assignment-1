/*
Name: Assignment 1
Course Code: SODV1201
Program Name: Software Development Diploma Program
Author: Yu
Note: the real author name is in the document submitted on D2L.
*/

import {mainURL, navData} from "./nav-data.js";

function nav() {
    let listEle = $("<ul></ul>");
    $("nav").append(listEle);

    for (const link of navData) {
        let linkEle = $("<li></li>");

        // Set links of the navigation from navData
        linkEle.html(`<a href="${mainURL + link[0]}">${link[1]}</a>`);

        $("nav > ul").append(linkEle);
    }
}

export {nav}