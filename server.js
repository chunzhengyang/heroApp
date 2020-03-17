const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

console.log(process.env.NODE_ENV)

if(process.env.NODE_ENV === 'Development') {  

    console.log('Development mode')

    app.use(express.static('client/public'))

    app.get('*', (req, res) => {    
        res.sendfile('client/public/index.html')
    })

} else{

    console.log('Production mode')

    app.use(express.static(path.join(__dirname, 'client/public')));

    app.get('*', (req, res) => {    
        res.sendfile(path.join(__dirname = 'client/public/index.html'));  
    })
}

//start server
app.listen(port, (req, res) => {  
    console.log( `server listening on port: ${port}`)
})