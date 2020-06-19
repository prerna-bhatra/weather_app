const express=require('express');
const path=require('path');
const hbs=require('hbs')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
const app=express()
const publicpath=path.join(__dirname,'../public')
//const viewspath=path.join(__dirname,'../templates/views')
const partialspath=path.join(__dirname,'./partial')
const req=require("request");
const address=process.argv[2] //input from cmd from user
console.log(process.argv)
app.set('view engine','hbs')
//app.set('views',viewspath)
hbs.registerPartials(partialspath)
app.use(express.static(publicpath))

app.get('',(req,res)=>
{
	res.render('index',{
		title:'weather',
		name:'prerna'
	});
})

app.get('/weather',(req,res)=>
{
/*	res.render('index',{
		title:'weather',
		name:'prerna'
	})*/

	geocode(req.query.address,(error,{latitude,longitude,location})=>{
	if(error)
	{
		//return error;
		//console.log("Error",error)
		return res.send({error})
	}
	
	forecast(latitude,longitude,(error,data)=>
	{
		if(error)
	{
		//return error;
		//console.log("Error",error)
		return res.send({error})
	}
	res.send(
	{
		forecast:data,
		location,
		address:req.query.address
	})
	})
})
})



/*
geocode(req.query.address,(error,{latitude,longitude,location})=>
{

})*/
app.get('/help',(req,res)=>
{
	res.render('help',{
		title:'Help',
		name:'prerna'
	});
})
app.get('/about',(req,res)=>
{
	res.render('about',{
		title:'About Me',
		name:'prerna'
	});
})

//use hbs

app.listen(3000,()=>{
	console.log("server is  on port 3000");
})