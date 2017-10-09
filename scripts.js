// 1.Crate three buttons(done in HTML)
var sum;
var values=[{value:1,
    image:"url('dicey-images/dice-1.png')"},
    {value: 2,
    image:"url('dicey-images/dice-2.png')"},
    {value:3,
    image:"url('dicey-images/dice-3.png')"},
    {value:4,
    image:"url('dicey-images/dice-4.png')"},
    {value:5,
    image:"url('dicey-images/dice-5.jpeg')"},
    {value:6,
    image:"url('dicey-images/dice-6.png')"}];
var newDieValues=[];
document.addEventListener("DOMContentLoaded", function(){
    var newDie=document.getElementById("new-die");
    var totalDice=document.getElementById("sum");
    var roll=document.getElementById("roll");
    newDie.addEventListener("click", function(){
       new Die();
    },
    totalDice.addEventListener("click", function(){
        sumOf()
   })
)
})
//2. create a constructor function()
function Die (){
    this.div= document.createElement('div');
    this.div.className="dice";
    document.body.appendChild(this.div);
    this.value= random();
    //attach the random image to the background
    this.div.style.backgroundImage=this.value.image;
    newDieValues.push(this.value.value);
    console.log(newDieValues);
}
//get the sum of the newDieValues array
function sumOf(){
    sum = newDieValues.reduce(add, 0);
function add(a, b) {
    return a + b;
}
console.log(sum);
alert("Sum of dice equals: "+sum);

 }

//get a random die from the array
function random(){ 
   return values[Math.floor(Math.random()*values.length)];
}

