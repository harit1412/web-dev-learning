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
Object.freeze(obj)
obj.name = "yash"
console.log(obj);
// console.log(obj.name);
// console.log(obj["name"]);

// 3:56:00



