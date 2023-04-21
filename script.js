console.log('hello')
const peopleBMI1 =[["Sione", 78, 1.69], ["Tualele", 62, 1.55]];
const peopleBMI2 =[["Sione", 95, 1.88], ["Tualele", 85, 1.66]];
var highestBMI = 0;
var highestName = "";
//line 5 highestName is a string in this instance
for (let index = 0; index < peopleBMI1.length; index++) {
    var element = peopleBMI1[index];
    //line 8 is a pointer to a particular record in the array
    var BMI = element[1] / element[2]**2;
    //calculation for BMI
    console.log ("BMI calculation: Name(",element[0],") Mass(",element[1],") Height(",element[2],") BMI(",BMI,")");
    if(BMI>highestBMI) {
        highestName= element[0];
        highestBMI=BMI;
        //lines 13-15 (boolean evaluation) identify whether element is the highest BMI and store value and name
    }
}
console.log ("highest name: ", highestName, " BMI = ", highestBMI);
//highest name: Bob, BMI: value
for (let index = 0; index < peopleBMI2.length; index++) {
    var element = peopleBMI2[index];
    var BMI = element[1] / element[2]**2;
    console.log ("BMI calculation: Name(",element[0],") Mass(",element[1],") Height(",element[2],") BMI(",BMI,")");
    if(BMI>highestBMI) {
        highestName= element[0];
        highestBMI=BMI;
    }
}
console.log ("highest name: ", highestName, " BMI = ", highestBMI);
//BMI = mass / height**2

//TEST DATA: Take2 scores 96, 108 and 89. RUSH scores 88, 91 and 110.
//TEST DATA BONUS 1: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 123.
//TEST DATA BONUS 2: Take2 scores 97, 112 and 101. RUSH scores 109, 95 and 106.


// function averageScore(){
//     const score1 = 96
//     const score2 = 108
//     const score3 = 89
//     const total = score1 + score2 + score3
//     const average = total / 3
//     return average
// }
// console.log(averageScore())


// --------- OUR DATA --------------

const Take2scoreTest =[96, 108, 89];
const RUSHscoreTest =[88, 91, 110];

const Take2scoreBonus1 =[97, 112, 101];
const RUSHscoreBonus1 =[109, 95, 123];

const Take2scoreBonus2 =[97, 112, 101]
const RUSHscoreBonus2 =[109, 95, 106]

// ---------- FIND THE AVERAGE ----------

function averageScore (scores) {
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
      total += scores[i];
    }
    const average = total / scores.length;
    console.log("the average is: ", average)
    return average;
}

const Take2averageScore = averageScore(Take2scoreTest)
const RUSHaverageScore = averageScore(RUSHscoreTest)

const take2Bonus1average = averageScore(Take2scoreBonus1)
const rushBonus1average = averageScore(RUSHscoreBonus1)

const take2Bonus2average = averageScore(Take2scoreBonus2)
const rushBonus2average = averageScore(RUSHscoreBonus2)

// ------------- FIND THE TEST DATA WINNER ---------

function testDataWinner (take2score, rushScore) {
    if (take2score > rushScore) {
        console.log("Winner is Take2: ", take2score)
        } else if (rushScore > take2score) {
            console.log("Winner is RUSH: ", rushScore)
        } else {
            console.log("The teams have drawn")
        }
}

testDataWinner(Take2averageScore, RUSHaverageScore)


// ---------- FIND THE WINNER OF BONUS 1 (OVER 100) ----------- 

function bonusOneWinner (take2score, rushScore) {
    if (take2score > rushScore && take2score > 100) {
        console.log("Winner is Take2: ", take2score)
        } else if (rushScore > take2score && rushScore > 100) {
            console.log("Winner is RUSH: ", rushScore)
        } else if (rushScore == take2score){
            console.log("The teams have drawn")
        } else {
            console.log("There is no winner")
        }
}

bonusOneWinner(take2Bonus1average, rushBonus1average)

// ----------- DETERMINE WHETHER WINNER BONUS 2 ----------

function bonusTwoWinner (take2score, rushScore) {
    if (take2score > rushScore && take2score > 100) {
        console.log("Winner is Take2: ", take2score)
        } else if (rushScore > take2score && rushScore > 100) {
            console.log("Winner is RUSH: ", rushScore)
        } else if (rushScore == take2score && rushScore > 100){
            console.log("The teams have drawn")
        } else {
            console.log("There is no winner")
        }
}

bonusTwoWinner(take2Bonus2average, rushBonus2average)

// let dinnerPrice = 200
// let tip
// function tipCalculator (dinnerPrice) {
//     if (dinnerPrice < 50 && dinnerPrice > 300) {
//         let tip = dinnerPrice * 0.20
//     } else {
//         let tip = dinnerPrice * 0.15
//     }
//     }
//     console.log(tip)

    let bill = 200
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15
    } else {
        tip = bill * 0.20
    }
    console.log(tip)

    // ----------challenge 4----------- 

      const calcAverage = (score1, score2, score3) => {
        const sum = score1 + score2 + score3
        const avg = sum / 3
        return avg
    }

    const take2AverageScore1 = calcAverage(44, 23, 71)
    console.log("take2AverageScore1: ", take2AverageScore1)
    const rushAverageScore1 = calcAverage(65, 54, 49)
    console.log("rushAverageScore1: ", rushAverageScore1)

    const take2AverageScore2 = calcAverage(85, 54, 41)
    console.log("take2AverageScore2: ", take2AverageScore2)
    const rushAverageScore2 = calcAverage(23, 34, 27)
    console.log("rushAverageScore2: ", rushAverageScore2)
   
    const CheckWinner = (take2AverageScore1, rushAverageScore1) => {
        const winningScore = 30
        if (take2AverageScore1 >= winningScore && take2AverageScore1 > rushAverageScore1) {
            console.log(`take2 wins (${take2AverageScore1} vs ${rushAverageScore1})`)

        } else if (rushAverageScore1 >= winningScore && rushAverageScore1 > take2AverageScore1) {
            console.log(`rush wins (${rushAverageScore1} vs ${take2AverageScore1})`)
        } else {
            console.log("No winner")
        }
    }

CheckWinner(take2AverageScore1, rushAverageScore1)
CheckWinner(take2AverageScore2, rushAverageScore2)

// A new season has begun for the tech league.

// This time around

// Create an arrow function 'CalcAverage' to calculate the average of 3 scores
// Use the function to calculate the average for both teams.
// Create a function 'CheckWinner' that takes teh average score of each team as parameters ('avgTake2', 'avgRush'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Take2 win (30 vs 13)".
// use the 'checkWinner' function to determine the winner for both Data 1 and Data 2.
// Ignore draws this time.
// TEST DATA 1: TAKE2 SCORE 44, 23, AND 71. RUSH SCORE 65, 54, AND 49

// TEST DATA 2: TAKE2 SCORE 85, 54, 41. RUSH SCORE 23, 34, 27.
    
 
// A named function 

function weight (weight) { 
  if (weight<=70) {
    console.log("underweight")
  } else {
    console.log("overweight")
  }
}
weight(80)

// An anonymous function 

// function (weight1) {
//     if (weight1<=70) {
//      console.log("underweight")
//     } else {
//     console.log("overweight")
//     }
//     }
  
// // An anonymous function assigned to a variable 

let divide = function (x) {
    return x / 2
}
console.log(divide(10))

// // // An anonymous fat arrow function assigned to a variable

let divide1 = (x) => {
    return x / 2
}
console.log(divide1(10))

let cars = ["Tesla", "BMW", "Rolls Royce"]
for(let i=0; i<cars.length; i++) {
    console.log(cars[i])
}
