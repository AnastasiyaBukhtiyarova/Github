"use strict";

function sendEmail() {
  console.log("Gromcode party invitation was sent!");
}

function sendEmailList() {
  // hint: you should use sendEmail function inside sendEmailList
  // put your code here
  for (let invitations = 1; invitations <= 30; invitations =invitations+ 1)
 sendEmail();

}
sendEmailList();
