/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;
let age = 17;
if(age > votingAge) 
{
    console.log(true);
}
else {
    console.log(false);
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let num1 = 10;
let num2 = 15;
if(num1 > num2)
{
    num1++;
}
else {
    num1 = num2;
}



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let x = Number('1999');
console.log(x);



//Task d: Write a function to multiply a*b 

const multiply = function(a,b) 
{
    console.log(a*b);
}

multiply(2,5);


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

const humanToDog = (age) =>
{
    return age*7;
}

console.log(humanToDog(2));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(age, weight)
{
    if(age >= 1)
    {
        if(weight <= 5)
        {
            return weight*0.05;
        }
        else if(weight > 5 && weight <= 10)
        {
            return weight*0.04;
        }
        else if(weight > 10 && weight <= 15)
        {
            return weight*0.03;
        }
        else 
        {
            return weight * 0.02;
        }
    }
    else
    {
        if(age >= (2/12) && age <= (4/12))
        {
            return weight*0.10;
        }
        else if(age > (4/12) && age <= (7/12))
        {
            return weight*0.05;
        }
        else if(age > (7/12) && age < 1){
            return weight * 0.04;
        }
    }
}

console.log(dogFeeder(1, 15));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

function rockPaperScissors(choice)
{
    let picks = ['rock','paper','scissors'];
    let compchoice = picks[Math.floor(Math.random()*3)];
    if(choice === compchoice)
    {
        return "draw";
    }
    else
    {
        if(choice === 'rock')
        {
            if(compchoice === 'paper')
            {
                return 'you lose, paper beats rock';
            }
            else 
            {
                return 'you win, rock beats scissors';
            }
        }
        else if(choice === 'paper')
        {
            if(compchoice === 'scissors')
            {
                return 'you lose, scissors beats paper';
            }
            else 
            {
                return 'you win, paper beats rock';
            }
        }
        else if(choice === 'rock')
        {
            if(compchoice === 'paper')
            {
                return 'you lose, paper beats rock';
            }
            else 
            {
                return 'you win, rock beats scissors';
            }
        }
    }
}

console.log(rockPaperScissors("rock"));
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km)
{
    return (km/1.609);
}

console.log(kmToMiles(3.218));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCm(ft)
{
    return (ft*30.48);
}

console.log(feetToCm(2));


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
const annoyingSong = function(num)
{
    for(let i=num; i>0; i--)
    {
        console.log(i+' bottles of soda on the wall, '+i+' bottles of soda, take one down pass it around '+(i-1)+' bottles of soda on the wall');
    }
}

annoyingSong(10);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeCalculator(num){
    if(num>=90)
    {
        return 'A';
    }
    else if(num>=80)
    {
        return 'B';
    }
    else if(num>=70)
    {
        return 'C';
    }
    else if(num>=60)
    {
        return 'D';
    }
    else
    {
        return 'F';
    }
}

console.log(gradeCalculator(84));
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

function countVowels(word)
{
    let count = 0;
    let vowels = "aeiouAEIOU";
    for(let i=0;i<word.length;i++)
    {
        if(vowels.includes(word.charAt(i)))
        {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hEllo"));

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

function rockPaperScissors(choice)
{
    let picks = ['rock','paper','scissors'];
    let compchoice = picks[Math.floor(Math.random()*3)];
    if(choice === compchoice)
    {
        return "draw";
    }
    else
    {
        if(choice === 'rock')
        {
            if(compchoice === 'paper')
            {
                return 'you lose, paper beats rock';
            }
            else 
            {
                return 'you win, rock beats scissors';
            }
        }
        else if(choice === 'paper')
        {
            if(compchoice === 'scissors')
            {
                return 'you lose, scissors beats paper';
            }
            else 
            {
                return 'you win, paper beats rock';
            }
        }
        else if(choice === 'rock')
        {
            if(compchoice === 'paper')
            {
                return 'you lose, paper beats rock';
            }
            else 
            {
                return 'you win, rock beats scissors';
            }
        }
    }
}

let choice = prompt('rock, paper, or scissors?');

console.log(rockPaperScissors(choice));



