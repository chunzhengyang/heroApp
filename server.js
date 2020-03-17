const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 6000;

//production mode
//if(process.env.NODE_ENV === 'production') {  

    console.log('production mode')

    app.use(express.static(path.join(__dirname, 'client/public')));

    app.get('*', (req, res) => {    
        res.sendfile(path.join(__dirname = 'client/public/index.html'));  
    })//}

//start server
app.listen(port, (req, res) => {  
    console.log( `server listening on port: ${port}`)
})