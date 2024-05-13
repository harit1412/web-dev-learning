// function User(username , loginCount , isLoggedIn)
// {
//     this.username = username
//     this.loginCount = loginCount
//     this.isLoggedIn=isLoggedIn
//     return this
// }

// const user1 = User("Harit",2,true)
// // console.log(user1);
// const user2 = User("Manav" , 3 , false);
// // console.log(typeof user1);

// const user3 = new User("vraj" , 4,true);
// console.log(typeof user3);
// console.log(user3.username);


function multiplyby5(num){
    return num*5;
}

multiplyby5.power = (2)
// console.log(multiplyby5(5));
// console.log(multiplyby5.power);
// console.log(multiplyby5.prototype);

function createuser(username,score){
    this.username = username
    this.score = score
}

createuser.prototype.increment = function(){
    this.score++;
}
createuser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createuser("chai",25);
const tea = new createuser("tea" ,250)
chai.printMe()