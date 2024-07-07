const express=require ('express')
const app=express()
app.get('/shampoo',function(req,res){
    res.send("shampoo product data");
})
app.get('/clothes',function(req,res) {
    res.send("clothes product data")
})
app.get('/honey',function(req,res) {
    res.send("honey product data")
})

app.listen(8086)