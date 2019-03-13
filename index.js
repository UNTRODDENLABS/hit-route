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


app.post('/api/databanks/meter',(req,res)=>{
    res.json({details:req.body});
    console.log(req.body)
})

app.listen(port, () => console.log(`server is running at http://localhost:${port}`));
