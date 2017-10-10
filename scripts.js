// 1.Create three buttons(done in HTML)
var sum;
var values = [{ value: 1, image: "url('dicey-images/dice-1.png')" },
{ value: 2, image: "url('dicey-images/dice-2.png')" },
{ value: 3, image: "url('dicey-images/dice-3.png')" },
{ value: 4, image: "url('dicey-images/dice-4.png')" },
{ value: 5, image: "url('dicey-images/dice-5.jpeg')" },
{ value: 6, image: "url('dicey-images/dice-6.png')" }];
var newDieValues = [];
document.addEventListener("DOMContentLoaded", function () {
    var newDie = document.getElementById("new-die");
    var totalDice = document.getElementById("sum");
    var roll = document.getElementById("roll");
    newDie.addEventListener("click", function () {
        newDieValues.push(new Die());
    })
    totalDice.addEventListener("click", function () {
        sumOf()
    })
    roll.addEventListener("click", function () {
        rollAll();
    })
})
//2. create a constructor function()
function Die() {
    this.div = document.createElement('div');
    this.div.className = "dice";
    document.body.appendChild(this.div);
    this.info = random();
    //attach the random image to the background
    this.div.style.backgroundImage = this.info.image;
    //remove the die from the page when double clicked
    this.div.addEventListener("dblclick", this.removeOne.bind(this))
    //make the value, and image change when clicked
    this.div.addEventListener("click", this.rollOne.bind(this))                              
}
//rolling the die
Die.prototype.rollOne = function () {
    this.info = random();
    this.div.style.backgroundImage = this.info.image;
}
Die.prototype.removeOne = function () {
    var remove = newDieValues.indexOf(this);
    newDieValues.splice(remove, 1);
    console.log(this.div);
    document.body.removeChild(this.div);
    console.log(newDieValues);
}
function rollAll() {
    for (var i = 0; i < newDieValues.length; i++) {
        newDieValues[i].rollOne()
    }
}
//get the sum of the newDieValues array
function sumOf() {
    sum = newDieValues.reduce(function (a, b) {
        return a + b.info.value;
    }, 0);
    alert("Sum of dice equals: " + sum);
    console.log(newDieValues);
}
//get a random die from the array
function random() {
    return values[Math.floor(Math.random() * values.length)];
}

