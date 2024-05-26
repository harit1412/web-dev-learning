// const prom1 = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Async1 completed");
//         resolve();
//     },1000)
// })

// prom1.then(()=>{
//     console.log("prom1 completed");
// })

// prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Data Fetched");
//     resolve({ username: "Harit", id: 202103039 });
//   }, 1000);
// });

// prom1.then((user) => {
//   console.log(user);
// });

prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    error = false;
    if (error) {
      reject("Data Not fatched Something went wrong");
    }
    else {
        console.log("Data Facthed");
        resolve({username : "Harit" , id:202103039});
    }
  }, 1000);
});

prom2.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{console.log(error);})
