var number = 15;

var myNumber = prompt(" can you guess the secret number");
var myNum = Number(myNumber);

if (myNum === number) {
    alert("you have selected right number!");

}

else if (myNum < number){
    alert("Guess higher please");
}
else {
    alert("Guess lower please")
}