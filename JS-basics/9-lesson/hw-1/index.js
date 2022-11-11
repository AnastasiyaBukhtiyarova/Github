"use strict";

function sendEmail(userName) {
  console.log("Gromcode party invitation was sent to " + userName + "!");
}

/**
 * @param {string[]} userNames
 * @return {undefined}
 */
function sendEmailList(userNames = ["a", "b", "c"]) {
  // hint: you should use sendEmail function inside sendEmailList function
  // put your code here
  for (let el of userNames) {
    sendEmail(el);
  }
}
sendEmailList();
