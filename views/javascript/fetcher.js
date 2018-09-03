	'use strict';
	const request = require('request');
	const https = require('https');



function getData(){

	//const api = 'https://api.sportradar.us/soccer-t3/eu/fr/tournaments/sr:tournament:8/standings.json?api_key=myjru2suj5mcbs7fjduvxx2f';

	request(api, function (err, res, body) {
	  if (err) {
	    console.log(err)
	    return
	  }
	  let jsonData = JSON.parse(body);
	  console.log(jsonData);
	 	//return jsonData;
	});
}
exports.getData = getData;


//  'https://api.sportradar.us/soccer-t3/eu/fr/tournaments/sr:tournament:8/standings.json?api_key=myjru2suj5mcbs7fjduvxx2f'
