
//without callbakc
/*setTimeout(()=>
{
	console.log("2 seconds are up");
})

const names=["prerna","antima","megha"];

const shortnames=names.filter((name)=>{
	return name.length<=4
})

const geocode=(address,callback)=>
{
	const data={
		latitude:0,
		longitutde:0
	}
	return data;
}


const data=geocode('Philosophia')
console.log(data)
*/

//with settime out wiythout calbakc
/*setTimeout(()=>
{
	console.log("2 seconds are up");
})

const names=["prerna","antima","megha"];

const shortnames=names.filter((name)=>{
	return name.length<=4
})

const geocode=(address,callback)=>
{
	setTimeout(()=>
	{

	const data={
		latitude:0,
		longitutde:0
	}
	return data;
	})
}


const data=geocode('Philosophia')
console.log(data)
*/

//wih callback
setTimeout(()=>
{
	console.log("2 seconds are up");
})

const names=["prerna","antima","megha"];

const shortnames=names.filter((name)=>{
	return name.length<=4
})

const geocode=(address,callback)=>
{
	setTimeout(()=>
	{

	const data={
		latitude:0,
		longitutde:0
	}
	callback(data)
	})
}


geocode('Philosophia',(data)=>
{
	console.log(data)
})








