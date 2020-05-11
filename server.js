const express = require('express');
const app = express();

const mockUserData = [
    {name: 'Mark'},
    {name: 'Jill'}
]

app.get('/users', function(req, res){
    res.json(
        {
            success: true,
            message: 'successfully got users. Nice!',
            users: mockUserData
        }
    )
})

app.listen(8000, function(){
    console.log("")
    console.log("Server is running... press Ctrl-C to stop.")
    //console.log("If server script is changed, server is automatically restarted by nodemon.")
})