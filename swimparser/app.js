var sucker = require('./sucker.js');
// var MongoClient = require('mongodb').MongoClient;
let inspect = require('eyes').inspector({maxLength: false})
//
// var mongoHost = '130.51.29.155',
//     mongoPort = 5255,
//     mongoUser = 'svrwmongod',
//     mongoPwd = 'popcorn456',
//     mongoDB = 'CEP',
//     mongoAuthDB = 'admin',
//     mongoCollection = 'TESTSCRAPE',
//     mongoMaxResult = 200
//
// var   mongoOptions = {};
// var   mongoURI = "mongodb://"+mongoUser+":"+mongoPwd+"@"+mongoHost+":"+ mongoPort+"/"+mongoDB+"?authMechanism=SCRAM-SHA-1&authSource="+mongoAuthDB

//let url = 'mongodb://localhost:27017/siriusxm';

let url = "https://www.swimmingresults.org/individualbest/personal_best.php?back=showmeets&targetyear=2017&masters=0&pgm=1&meetcode=10225&targetAZ=C&pgs=1&tiref=1168208&mode=A"

sucker(url).then(function(swims) {
  let toProcess = swims.length;
  console.log('got my result, size is '+toProcess);
  inspect(swims);
});

// MongoClient.connect(mongoURI).then(function(db) {
// 	console.log('connected like a boss');
//
// 	var data = db.collection('data');
//
// 	sucker(url).then(function(swims) {
// 		let toProcess = swims.length;
// 		let done = 0;
// 		let inserted = 0;
// 		console.log('got my result, size is '+toProcess);
//     inspect(swims);
// 		/*
// 		so the logic is as follows:
// 			iterate over each result
// 			look for a match w/n a 3 minute time frame
// 		*/
// 		//let dateFilter = new Date(new Date().getTime() - 5*60000);
//
// 		// swims.forEach(function(swim) {
//     //   //inspect(swim)
// 		// 	//swim.dateCollected = new Date();
// 		// 	//console.log(channel);
//     //
// 		// 	// data.find({
// 		// 	// 	'title':channel.title,
// 		// 	// 	'channel':channel.channel,
// 		// 	// 	'artist':channel.artist,
// 		// 	// 	'timestamp':{
// 		// 	// 		'$gte':dateFilter
// 		// 	// 	}
// 		// 	// }).toArray(function(err, docs) {
// 		// 	// 	if(err) console.log('Err', err);
// 		// 	// 	if(docs && docs.length === 0) {
// 		// 	// 		data.insert(channel, function(err, result) {
// 		// 	// 			if(err) throw(err);
// 		// 	// 			if(!err) {
// 		// 	// 				inserted++;
// 		// 	// 				done++;
// 		// 	// 				if(done === toProcess) {
// 		// 	// 					db.close();
// 		// 	// 					console.log('Total inserted: ',inserted);
// 		// 	// 				}
// 		// 	// 			}
// 		// 	// 		});
// 		// 	// 	} else {
// 		// 	// 		//console.log('not inserting');
// 		// 	// 		done++;
// 		// 	// 		if(done === toProcess) {
// 		// 	// 			db.close();
// 		// 	// 			console.log('Total inserted: ',inserted);
// 		// 	// 		}
// 		// 	// 	}
// 		// 	// });
//     //
// 		// });
// 	}).catch(function(err) {
// 		console.log('unhandled error', err);
// 		db.close();
// 	});
//
// }).catch(function(err) {
// 	console.log('mongodb err', err);
// })
