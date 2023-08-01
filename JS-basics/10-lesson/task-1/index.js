/**
 * @param {string} userName
 * @param {string} email
 * @param {number} tasksCount
 * @return {string}
 */
const getMessage = (userName, email, tasksCount) => {
  // put your code here
  return `Hello again, ${userName}. Your email is ${email}. You have ${tasksCount} tasks for today`;
};
getMessage("Sheldi", "sheldi@gmail.com", 3);
