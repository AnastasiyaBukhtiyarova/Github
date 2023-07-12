"use strict";

/**
 * @param {number[]} points - очки всех команд
 * @param {number} homeTeam - № в таблице хозяина поля
 * @param {number} awayTeam - № в таблице гостевой команды
 * @param {string} result - win,lose,draw
 * @return {number[]}
 
 */
function addPoints(points, homeTeam, awayTeam, result) {
  // put your code here
  let copyPoints = points.slice();
  if ( result === 'win') {
   copyPoints[homeTeam-1] += 3;
  } else if (result === 'lose') {
   copyPoints[awayTeam - 1] += 3;
  } else if (result === 'draw') {
    copyPoints[homeTeam - 1] += 1;
    copyPoints[awayTeam - 1] += 1;
  }
  return copyPoints;
}


console.log(addPoints([8, 6, 4, 1], 1, 2, "win")); // returns ==> [11, 6, 4, 1]
console.log(addPoints([18, 15, 8, 2, 1, 0], 1, 4, "lose")); // returns ==> [18, 15, 8, 5, 1, 0]
console.log(addPoints([18, 15, 8, 2, 1, 0], 5, 6, "draw")); // returns ==> [18, 15, 8, 2, 2, 1]
