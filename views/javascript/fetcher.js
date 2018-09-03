	'use strict';
	const request = require('request');

	const url = 'https://api.sportradar.us/soccer-t3/eu/fr/tournaments/sr:tournament:8/standings.json?api_key=myjru2suj5mcbs7fjduvxx2f';

function getData(){
	request.get({
	    url: url,
	    json: true,
	    headers: {'User-Agent': 'request'}
	  }, (err, res, data) => {
	    if (err) {
	      console.log('Error:', err);
	    } else if (res.statusCode !== 200) {
	      console.log('Status:', res.statusCode);
	    } else {
	      // data is already parsed as JSON:
	      return data;
	    }
	});
}

exports.getData = getData;
// request('https://api.sportradar.us/soccer-t3/eu/fr/tournaments/sr:tournament:8/standings.json?api_key=myjru2suj5mcbs7fjduvxx2f', { json: true }, (err, res, body) => {
// 	if (err) { return console.log(err); }
// 	console.log(body.url);
// 	console.log(body.explanation);
// });


//  'https://api.sportradar.us/soccer-t3/eu/fr/tournaments/sr:tournament:8/standings.json?api_key=myjru2suj5mcbs7fjduvxx2f'
