const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

function getTasksList() {
  // put your code here
  fetch(baseUrl)
    .then((baseUrl) => baseUrl.json())
    .then((baseUrl) => console.log(baseUrl));
}

export const getTaskById = (taskId) =>
  fetch(`${baseUrl}/${taskId}`).then((response) => response.json());

/* first option */

export const getTaskById1 = (taskId) =>
  getTasksList().then((userData) => userData.find((el) => el.id === taskId));
/* second option */

// examples
getTasksList().then((tasksList) => {
  console.log(tasksList); // ==> [ {'id':'1', 'isDone':false ... }, {'id':'2', 'isDone':false ... }, ...]
});

getTaskById('2').then((taskData) => {
  console.log(taskData); // ==> { 'id': '2', 'text': 'District Communications Specialist', 'isDone': false, 'createdDate': 1651499052, 'finishedDate': 1651499052 }
});
