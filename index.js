const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT ||3000;

//body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
   res.send('this is hitting message route you need to hit your details as a post request on host+/api/databanks/meter ') 
});
app.post('/api/databanks/meter',(req,res)=>{
    res.json({details:req.body});
    console.log(req.body)
});
app.get('/api/databanks/meter',(req,res)=>{
    res.json({details:req.body});
    console.log(req.body)
});

app.listen(port, () => console.log(`server is running at http://localhost:${port}`));
