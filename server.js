const express = require('express');
const app = express();

const mockUserData = [
    {name:'Mark'},
    {name:'Jill'}
]
app.get('/users/:id',function (req,res){
    console.log(req.params.id)
    const user = mockUserData.filter((user)=>user.name === req.params.id)
    res.json({
        success:true,
        message:'got one user',
        users:user[0]
    })
})


app.listen(8000,function (){
    console.log('server is listening')
})