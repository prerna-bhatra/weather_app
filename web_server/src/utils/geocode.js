const request=require("request");
const geocode=(address,callback)=>{
	const url="https://api.mapbox.com/geocoding/v5/mapbox.places/+address+.json?access_token=pk.eyJ1IjoicHJlcm5hMTk5OCIsImEiOiJja2I4dXF6M2cwMzQ0MnRxcWExb2RqdThwIn0.XcC42mDoIJU9wU6pH5wSBg"
	request({url:url,json:true},(error,response)=>{
		if(error)
		{
			callback('unable to connect to the location',undefined)	
		}
		else if(response.body.features.length==0)
		{
			callback('unable to connect',undefined)

		}
		else
		{
			callback(undefined,{
				latitude:response.body.features[0].center[0],
				longitude:response.body.features[0].center[1],
				location:response.body.features[0].place_name
			})	

		}

	})
}

module.exports=geocode