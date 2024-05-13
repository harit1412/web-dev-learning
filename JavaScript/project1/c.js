buttons = document.querySelectorAll(".button");
console.log(buttons);
buttons.forEach((button,index)=>{
    console.log(button);
    buttons[index].addEventListener('click' , function(event){
        console.log(event.target);
        document.body.style.backgroundColor = event.target.id;
    })
});