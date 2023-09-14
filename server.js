require('dotenv').config();
const express = require('express');
const app = express();
PORT = process.env.PORT || 3000;
const morgan = require('morgan');
const cheeseController = require('./controller/cheeseController');


//MIDDLEWARE
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true})); //allows form data -- posts from Postman will populate in console instead of showing as "undefined"
app.use(express.json()); //allows us to to create key/values in Postman in an object forman in the "raw" section - DOUBLE QUOTES MUST BE USED FOR JSON

app.get('/', (req, res) => {
    res.send("Sanity Check");
});

app.use("/cheese", cheeseController);

app.listen(PORT, () => console.log("give me the love on port, " + PORT));