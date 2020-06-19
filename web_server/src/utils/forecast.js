const request=require("request")
const forecast=((latitude,longitude,callback)=>{
		const url="http://api.weatherstack.com/current?access_key=b7dcb1a32b9fd91a6034a6f3da6b4f1c&query="+latitude+','+longitude+','+'&units=m'
		request({url:url,json:true},(error,response)=>
		{
			if(error)
			{

				callback("unable to connect",undefined)
			}
			else if(response.body.error)
			{
				callback("unable to find",undefined)
			}
			else
			{
				callback(undefined,{
			//placename   : response.body.daily.data[0].summary,
           	temperature : response.body.current.temperature,
           	Rainchance  :  response.body.current.precip
          })
			}
		})
})
module.exports=forecast