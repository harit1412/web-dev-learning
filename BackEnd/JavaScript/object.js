// obj litterals
mysym = Symbol("key1")
const obj = {
    name : "harit",
    "full name" : "harit rajkotiua",
    age : 20,
    [mysym] : "mykey1",
    location:"rajkot",
    email : "harit@gogle.com",
    islogin : false,
    lastLogin : ["monday","tuesday"]
}
// Object.freeze(obj)
obj.name = "yash"
// console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);

// 3:56:00


const JsUser = {
    name : "Harit",
    "full name "  : "harit rajkotiya",
    [mysym] : "key1",
    age : 18,
    location : "Rajkot",
    email : "harit@gmail.com",
    isloggedin : false,
    lastLogin : ["monday","tuesday"]
}


JsUser.greeting =  function(){
    console.log("Hello jsUser");
}

JsUser.greeting2 = function(){
    console.log(`hello ${this["full name "]}`);
}

// console.log(JsUser);

// JsUser.greeting2();

const tinderUser = new Object();
tinderUser.id = "123abc"
tinderUser.name = "harit"
tinderUser["full name"] = "harit rajkotiya"
tinderUser.isloggedin = false

const regularuser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "harit",
            lastname : "rajkotiya"
        },
    },
}

tinderUser.regularuserr = regularuser

// console.log(tinderUser.regularuserr);
// console.dir(tinderUser,{depth : null}) //to print full depth obj

// console.log(regularuser);
// console.log(regularuser.userfullname);


const obj3 = {1:"a",2:"b"}
const obj4 = {3:"c",4:"d"}
// let obj5 = {obj3,obj4} // true but not work as we want

let obj5 = {...obj3,...obj4} // true
// let obj6 = Object.assign({},obj3,obj4) 
let obj6 = Object.assign({},obj3,obj4) 
// console.log(obj3);

// console.log(obj5);


const user = [
    {
        id : 1,
        email : "abc@email.com"
    },
    {
        id : 2,
        email : "efg@email.com"
    }
]
// console.log(`name : ${user[1].id} \nemail : ${user[1].email}`);
// console.log(Object.keys(tinderUser.regularuserr));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('sssd'));


const course = {
    courname : "js",
    price : 199,
    instructor : "harit"
}
course.instructor;

let  {courname:cname,instructor:insct} = course
console.log(cname);
console.log(insct);


// 

