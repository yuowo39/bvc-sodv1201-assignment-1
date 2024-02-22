/*
Name: Assignment 1
Course Code: SODV1201
Program Name: Software Development Diploma Program
Author: Yu
Note: the real author name is in the document submitted on D2L.
*/

let pictureInfo = $("<p></p>");
pictureInfo.html(`Drawn by <a href="https://twitter.com/yosihiki" target="_blank">牛木義隆</a>, used by Yu under the author's permission. `);

// After 10 seconds, show the information of the picture
setTimeout(() => {
    $("main > picture").append(pictureInfo);
}, 10000);