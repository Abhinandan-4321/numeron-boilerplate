// Iteration 2: Generate 2 random numbers and display them on the screen
let number1 = document.querySelector('#number1');
let number2 = document.querySelector('#number2');
let num1, num2; // Declare these variables

forGettingRandomNumber()
function forGettingRandomNumber(){
    num1 = Math.ceil(Math.random() * 100);
    number1.innerHTML = num1;

    num2 = Math.ceil(Math.random() * 100);
    number2.innerHTML = num2;
}


// Iteration 3: Make the options button functional
let score = 0;

let greater = document.querySelector("#greater-than");
greater.addEventListener("click", () => {
    if (num1 > num2) {
        score++;
        forGettingRandomNumber();
        resettimer(timerun);
    } else {
        location.href = "./gameover.html";
    }
});

let less = document.querySelector("#lesser-than");
less.addEventListener("click", () => {
    if (num1 < num2) {
        score++;
        resettimer(timerun);
        forGettingRandomNumber();
    } else {
        location.href = "./gameover.html";
    }
});

let equal = document.querySelector("#equal-to");
equal.addEventListener("click", () => {
    if (num1 == num2) {
        score++;
        resettimer(timerun);
        forGettingRandomNumber();
    } else {
        location.href = "./gameover.html";
    }
});

// Iteration 4: Build a timer for the game
var timer = document.querySelector("#timer");
let time = 5;
let timerun;

function timestarts() {
    timer.innerHTML = time;
    timerun = setInterval(function ()
    {
        time--;
        if (time == 0) 
        {
            location.href = "./gameover.html";
        }
        timer.innerHTML = time;
    }, 1000);
    localStorage.setItem("score", score)
}

function resettimer(timetracking) {
    clearInterval(timetracking);
    time = 5; // Reset the time to the initial value
    timestarts();
}

// Initial start of the timer
timestarts();
