const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json())

app.use(express.urlencoded({extended: false}))
app.get('/*pp*', (req,res) => {
    res.send('good')
})
app.get('/users/:userID/color/:color/:school/:from.:to', (req,res) => {
    let id = req.params.userID;
    let color = req.params.color;
    let from = req.params.from;
    let to = req.params.to;
    console.log(req.params);
    res.send(`your user id is ${id} ${color}`)
}
)

app.route('/route')
.get((req,res) => {
    res.send('from a get request');
}
).post((req, res) => {
    let count = req.body.count;
    let color = req.body.color;
    res.send(`from a post request ${color} ${count}`);
});


app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});
