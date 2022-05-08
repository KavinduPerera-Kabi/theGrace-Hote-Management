const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const mealPostRoutes = require('./routes/mealposts');
const staffPostRoutes = require('./routes/staffposts');
const eventPostRoutes = require ('./routes/eventposts');
const roomPostRoutes = require ('./routes/roomposts');
const rentPostRoutes = require('./routes/rentposts');



//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(mealPostRoutes);
app.use(staffPostRoutes);
app.use(eventPostRoutes);
app.use(roomPostRoutes);
app.use(rentPostRoutes);

const PORT = 8000;
// const DB_URL ='mongodb+srv://kavindu:kavindu2000@mernapp.yvvzq.mongodb.net/mernCrud?retryWrites=true&w=majority';
//const DB_URL ='mongodb+srv://Project12345:Project12345@mernapp.g30zk.mongodb.net/mernCrud?retryWrites=true&w=majority';
const DB_URL = 'mongodb+srv://itpm:itpm123@mernapp.eqaup.mongodb.net/itpm?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() => {
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error', err));

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});