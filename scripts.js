// 1.Crate three buttons(done in HTML)

var values=[1,2,3,4,5,6];
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