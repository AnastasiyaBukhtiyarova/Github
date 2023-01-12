"use strict";

/**
 * @param {object[]} players
 * @return {object[]}
 */
function getGoalsStat(players) {
  // put your code here
  let res = [];
  for (let i = 0; i < players.length; i++) {
    let el = players[i];
    // console.log(el); // 4 объекта
    /**   for (const keys of players) {
    console.log(keys);
  } **/
    //  console.log(Object.keys(el));
    // for (const key in el) {
    // console.log(key);
    //  }
    let newObj = {}; // новый массив в которой выведу имя,команду,голы
    newObj.name = el.name;
    newObj.team = el.team;
    newObj.goals = el.goals;
     res.push(newObj);
    
  } return res;
}
// examples
const players = [
  {
    name: "Jason Mount",
    birthdate: "19.12.1993",
    country: "Deutschland",
    number: "21",
    team: "Manchester United",
    position: "MF",
    goals: 4,
  },
  {
    name: "Jason Mount",
    birthdate: "01.01.2001",
    country: "Deutschland",
    number: "16",
    team: "Manchester United",
    position: "MF",
    goals: 0,
  },
  {
    name: "Finne Bard",
    birthdate: "13.02.1995",
    country: "Norwegen",
    number: "26",
    position: "FW",
    team: "Fulham United",
    goals: 1,
  },
  {
    name: "Gerhardt Yannick",
    birthdate: "13.03.1994",
    country: "Deutschland",
    number: 31,
    position: "MF",
    team: "Liverpool",
    goals: 8,
  },
];

console.log(getGoalsStat(players));

// ===>
// [
//   { name: 'Jason Mount', team: 'Manchester United', goals: 4 },
//   { name: 'Jason Mount, team: 'Manchester United', goals: 0 },
//   { name: 'Finne Bard', team: 'Fulham United', goals: 1 },
//   { name: 'Gerhardt Yannick', team: 'Liverpool', goals: 8 },
// ];
