/* eslint-disable */

if (true) console.log("I'm in")

if (false) {
  console.log("I'm not in")
}

if ("text") {
  console.log("Yes")
}

if (null) {
  console.log("Yes")
} else {
  console.log("Else")
}

// create age variable here
const age = 20
if (age < 16) {
  console.log("Too young")
} else if (age >= 16 && age < 18) {
  console.log("Almost ready") // одно из условий false
} else if (age >= 18 && age < 65) {
  console.log("Ready") // оба условия true
} else {
  console.log("Else")
}

const price = 20
if (price < 16) {
  console.log("Not enough") // одно из условий false
} else if (age >= 16 || age < 18) {
  console.log("Still not enough") // одно из условий true
} else if (age >= 18 || age < 65) {
  console.log("Ready")
} else {
  console.log("Else")
}


// Тернаный оператор ? : ( const result = условие ? значение1 : значение2; )

// create amount variable here
const amount = 15
const result = amount > 17 ? "full" : "empty"
