const express=require("express");
const bodyParser=require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.use(express.static("public"));
let items=[];


app.get("/",function(req,res){
    var today=new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var day  = today.toLocaleDateString("en-US",options);
    res.render("list",{
        kindOfDay:day,
        newListItems:items
    });



});
app.post("/",function(req,res){
    var item=req.body.newitem;
    items.push(item);
    res.redirect("/");
});

app.listen(3000,function(){
    console.log("server started");
});