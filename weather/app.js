//asynchronous

/*console.log("start")

setTimeout(()=>{
	console.log("2 sec")
},2000)

setTimeout(()=>{
	console.log("0 sec")
},0)

console.log("stop")

//op=start,stop,0,2  it is example of call stack ,Node  APi,Callback queue
//call stcak understanding
//he Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, it will take the first event from the queue and will push it to the Call Stack, which effectively runs it. Such an iteration is called a tick in the Event Loop. Each event is just a function callback.
/*const listloc=(locations)=>
{
	
}*/


/*
//start app
const request=require("request");
const url="http://api.weatherstack.com/current?access_key=b7dcb1a32b9fd91a6034a6f3da6b4f1c&query=37.8267,122.4233"
request({url:url,json:true},(error,response)=>{
	//console.log(response)

	//const data=JSON.parse(response.body)
	//console.log(response.body.current)
console.log(response.body.current.weather_descriptions[0]+"  degree out and feels like "+response.body.current.feelslike+"  degree out")

})

const geocode="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHJlcm5hMTk5OCIsImEiOiJja2I4dXF6M2cwMzQ0MnRxcWExb2RqdThwIn0.XcC42mDoIJU9wU6pH5wSBg"

request({url:geocode,json:true},(error,response)=>
{
	const latitude=response.body.features[0].center[1]
	const longitude=response.body.features[0].center[0]
	console.log(latitude,longitude)
})
*/
const request=require("request");
const geocode=require("./utils/geocode")
const forecast=require("./utils/forecast")
const address=process.argv[2] //input from cmd from user
console.log(process.argv)
geocode(address,(error,data)=>{
	if(error)
	{
		//return error;
		console.log("Error",error)
	}
	
	console.log("Data",data)
	forecast(data.latitude,data.longitude, (error, data) => {
		if(error)
		{
			 	console.log('Error', error)
		}
 
  	console.log('Data', data)
})


})













