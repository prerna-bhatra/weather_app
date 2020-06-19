const http=require("http")
const url="http://api.weatherstack.com/current?access_key=b7dcb1a32b9fd91a6034a6f3da6b4f1c&query=45,-75&units=f"

const request =http.request(url,(response)=>
{
	let data=''
	//register handler
	response.on('data',(chunk)=>
	{
		data=data+chunk.toString()	
		console.log(chunk)
	})
	response.on('end',()=>
	{
		const body=JSON.parse(data)
		console.log(body)

	})
})

request.end()