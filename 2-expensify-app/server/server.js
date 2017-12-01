const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
//heroku if Heroku supply port use it, if not use port 3000
const port = process.env.PORT || 3000;

//middleware - code that runs for each request
    //app will use files from public dir
app.use(express.static(publicPath));

//setting up server with react-router
    //so when user enters router url browser wont make http get request from server
    //if user request something that is not in public folder - send him back index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
});

