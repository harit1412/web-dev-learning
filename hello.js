// Time :- 00:00:00
;"use strict"
const AccountID = 123;
let accountEmail = "harit@google.com";
var accountpassword = "12345";
// accountCity = "Jaipur";
// console.log(AccountID);
// console.table([AccountID,accountEmail,accountpassword,accountCity])

let a = 4;
if (true) {
  let a = 5;
}
// console.log(a);

let accountstate;
// console.log(accountstate);





// DATA TYPES

// alert("hello")  // we are using nodejs , not browser

// console.log(1 + 2);

// console.log("ss");

a = "aaa"
let num = Number(a)
// console.log(num);
// console.log(typeof num);

//

// Time :- 1:14:50

let value = 3;
let negval = -value
// console.log(negval);


let s1 = "hello";
let s2 = " harit"
// console.log(s1+s2);

// console.log("1" + 1);
// console.log("1"+2+2);
// console.log(2+"1");
// console.log(2+2+"1");

// console.log(+true);
// console.log(true+true+true);
// console.log(true+3);
// console.log(+"");

let num1 , num2 , num3;
num1 = num2 = num3 = 4;
// console.log(num1);


// console.log("2">1);
// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined>=0);

// console.log("2"==2);
// console.log(2==="2");

// const id1 = Symbol("123")
// const id2 = Symbol("123")
// console.log(id1==id2);

const bif = 3243543553535345435355345345n

const heros = ["12","323","3232"]

let myobj = {
  name : "hitesh",
  age : 22,
}


// 1:52:11

let user1  = {
  email : "harit@gmail.com",
  upi : 123
}

user2 = user1 // assigning non-premitive data used referencing in heap memory change in one will change in another also
user2.upi = 124
// console.log(user1)
// console.log(user2) // non-previmitve use heap memory , 

//
// console.log(`hello my name is ${myobj.name} and my email id is ${user1.email}`)

const s = new String("harit")
// console.log(s.indexOf(''));

// console.log(s.slice(-4,-1));

const news = "    hdhsdsd     "
// console.log(news)
// console.log(news.trim())

const url = "harit%20rajkotiya.com"
// url.replace(" ","-")
// console.log(url.replace("%20","-"));

// console.log(url.includes('harit'))


z = "a-b-c-d-e-f-g-h-i-j"
z = z.split('-')
// console.log(z);

const hundr = 1000000
// console.log(hundr.toLocaleString('en-US'));

///


let myDate = new Date()
// let newdate = new Date(2023,0,23)
// let newdate = new Date(2023,0,23,5,12,32,1000)
let newdate = new Date()
// console.log(newdate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(newdate.getTime());
// console.log(Math.floor(Date.now()/1000));

// console.log(newdate)
// console.log(newdate.getMonth()+1)
// console.log(newdate.getDay())

// newdate.toLocaleString('defualt' , {weekday : "short"})

// console.log(newdate);

///


const myarr = [1,2,3,4,5]
const heroes = ["shaktiman","harit"]

const myarr2 = new Array(1,2,3,4)
// console.log(myarr2)
;

myarr.push(6)
myarr.push(7)
myarr.pop()
// myarr.unshift(0)
// myarr.unshift(-1)

myarr.shift()

// console.log(myarr.includes(3));

const newarr = myarr.join()
// console.log(typeof newarr);
// console.log( newarr);
// console.log(myarr);

let myn1 = myarr.slice(1,3)

// console.log(myn1);

let myn2 = myarr.splice(1,3)

// console.log(myarr); // 1 to 3 indx element will be removed
// console.log(myn2);

// myn1.push(myn2)

// const all = myn1.concat(myn2)
// console.log(all);

const all_new_heroes = [...myn1,...myn2]
// console.log(all_new_heroes);


const ano_arr = [1,2,3,[4,5,6],7,[4,[1,2,3]]]

// const real_ano = ano_arr.flat(Infinity)
// console.log(real_ano)

// console.log(Array.isArray("Hitest"));
// console.log(Array.from("Hitest"));
// console.log(Array.from({name : "hitesh"}));

// let sc1 = 100
// let sc2 = 200
// let sc3 = 300

// console.log(Array.of(sc1,sc2,sc3));




