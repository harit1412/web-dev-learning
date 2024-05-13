const form = document.querySelector('form')

form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    const weight = parseInt(document.querySelector('#weight').value);
    const hieght = parseInt(document.querySelector('#height').value);
    const result =  document.querySelector('#results');
    console.log(weight,hieght);
    if(hieght == '' || hieght <= 0 || isNaN(hieght))
    {
        result.innerHTML="Enter valid hieght";
    }
    else if(weight === '' || hieght<=0 || isNaN(weight))
    {
        result.innerHTML="Enter valid wieght";
    }
    else
    {
        let ans = (weight/((hieght**2)/1000)).toFixed(3)
        result.innerHTML = `Your BMI is ${ans}`
    }
})