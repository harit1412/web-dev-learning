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

console.log(obj[mysym]);
// console.log(obj.name);
// console.log(obj["name"]);


