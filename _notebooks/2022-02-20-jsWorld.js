const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f0aeb431bamshc18b522b64e7383p102f67jsnea4673acfc55',
		'X-RapidAPI-Host': 'world-population.p.rapidapi.com'
	}
};

fetch('https://world-population.p.rapidapi.com/worldpopulation', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));