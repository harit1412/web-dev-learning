let selectednumber = parseInt(Math.random()*100)
console.log(selectednumber);

let remaining_guess = 10
let previous_guesses = []
const form = document.querySelector('form')

form.addEventListener('submit',(event)=>{
    if(remaining_guess > 0)
    {
        event.preventDefault();
        const guessed_byUser = parseInt(document.querySelector('#guessField').value);
        // console.log(guessed_byUser);
        const res = document.querySelector('.result')
        const prvguess = document.querySelector('.guesses')
        const rem = document.querySelector('.lastResult')

        if(selectednumber===guessed_byUser)
        {
            res.innerHTML=`Guess is Correct`
            selectednumber = parseInt(Math.random()*100);
            console.log(selectednumber);
            remaining_guess = 10
            previous_guesses = []
            prvguess.innerHTML = ""
            rem.innerHTML=`${remaining_guess}`
        }
        else
        {
            res.innerHTML=`Guess is Incorrect`
            remaining_guess-=1;
            rem.innerHTML=`${remaining_guess}`
            previous_guesses.push(guessed_byUser)
            let str = ""
            for(let i = 0 ; i < previous_guesses.length ; i++)
                {
                    console.log((previous_guesses[i]));
                    str += previous_guesses[i].toString();
                    str += " , ";
                }
            prvguess.innerHTML = str
        }
    }
    
})