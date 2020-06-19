console.log('client side')
fetch('http://puzzle.mead.io/puzzle').then((response)=>
{
	response.json().then((data)=>
	{
		console.log(data)
	})
})
const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const msg1=document.querySelector('#msg-1')
const msg2=document.querySelector('#msg-2')
weatherForm.addEventListener('submit',(e)=>
{
	e.preventDefault()
	const loc=search.value;
	console.log(loc)
	console.log('Testing')
	fetch('http://localhost:3000/weather?address'+location).then((response)=>
{
	response.json().then((data)=>
	{
		msg1.textContent=data.forecast
		msg1.textContent=data.location
		console.log(data.forecast)
		console.log(data.location)
	})
})
})

//msg2.textContent='From'