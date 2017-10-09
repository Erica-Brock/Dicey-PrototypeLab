// 1.Crate three buttons(done in HTML)

var values=[{value:1,
    image:url("dicey-images/dice-1.png")},
    {value: 2,
    image:url("dicey-images/dice-2.png")},
    {value:3,
    image:url("dicey-images/dice-3.png")},
    {value:4,
    image:url("dicey-images/dice-4.png")},
    {value:5,
    image:url("dicey-images/dice-5.jpeg")},
    {value:6,
    image:url("dicey-images/dice-6.png")}];
var newDieValues=[];
document.addEventListener("DOMContentLoaded", function(){
    var newDie=document.getElementById("new-die");
    newDie.addEventListener("click", function(){
       new Die();
    }
)
})
//2. create a constructor function()
function Die (){
    this.div= document.createElement('div');
    this.div.className="dice";
    document.body.appendChild(this.div);
}
/*Die.prototype.roll=function(){
    this.value = values[Math.floor(Math.random()*values.length)];
console.log(this.value);
}
var o= new Die(this.value);
o.roll();*/

    //it should have a value property
    //it shoulld also have a function called roll
//3.