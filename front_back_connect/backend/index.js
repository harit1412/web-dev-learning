import express from 'express'
const app = express()

app.get('/',(req,res)=>{
    res.send('Server is Ready');
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id : 0,
            joke : "this is joke"
        },
        {
            id : 1,
            joke : "this is also joke"
        },
        {
            id : 2,
            joke : "this is also joke hahahha"
        }
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000

app.listen(port , ()=>{
    console.log(`Server listening at ${port}`);
})