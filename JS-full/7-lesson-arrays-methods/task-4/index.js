const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  return allStudentsList
    .filter((name) => !studentsForRetake.includes(name))
    .map((student) => 'Good job, ' + student);
};
// eslint-disable-next-line prettier/prettier
const allStudents = ['Ann', 'Kate', 'Ed', 'Sheld', 'Tom', 'Li'];
// eslint-disable-next-line prettier/prettier
const failedStudents = ['Ann', 'Kate'];
console.log(getMessagesForBestStudents(allStudents, failedStudents));
