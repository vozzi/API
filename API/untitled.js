function getGifs(){
	const api = "http://api.giphy.com/v1/gifs/search?q=";
	const key = "&api_key=BxwJ3eR4OtyThIdIJO6ZKQCQ876aDinZ&limit=18";
	var a = document.querySelector('input').value;
	fetch(api+a+key) 
	.then(response => {
	return response.json();
	})
	.then( responseJSON => {		 		
	var gifs =responseJSON.data;
	document.querySelector('div').innerHTML=" ";
	for (i in gifs){
	document.querySelector('div').innerHTML+=("<img src='" + gifs[i].images.original.url+"' style ='height:180px; width:180px; margin:20px; border: solid 2px black;'/>")}
	})
	}
