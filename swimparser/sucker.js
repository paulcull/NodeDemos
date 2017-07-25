
let cheerio = require('cheerio');
let ctp = require('cheerio-tableparser');
let request = require('request');
let inspect = require('eyes').inspector({maxLength: false})
let _ = require('underscore');
let moment = require('moment');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


function getData(url) {
    return new Promise(function(resolve, reject) {
        request(url, function(err, response, body) {
            if(err) reject(err);
            if(response.statusCode !== 200) {
                reject('Invalid status code: '+response.statusCode);
            }
            let $ = cheerio.load(body);
            let swimLists = $('table#rankTable');
            //console.log("****",channelList);

            let swims=[];

            for(let i=0;i<swimLists.length;i++) {
                // get the table
                let t = swimLists.get(i);

                // convert table to array
                ctp($)
                let data = $(t).parsetable(true,true,true);

                // manipulate array
                for(let j=0;j<data[0].length;j++) {

                  if(j>0){
                  var swim = {
                    course:i===0? 'LC':'SC',
                    stroke:data[0][j],
                    timeDate:moment(data[3][j],'DD/MM/YY').toDate(),
                    timeString:data[1][j],
                    dateAndTime:moment(data[3][j]+'-'+data[1][j],'DD/MM/YY-mm:ss.SSS').toObject(),
                    finaPts:data[2][j],
                    meet:data[4][j],
                    venue:data[5][j],
                    license:data[6][j],
                    level:data[7][j],
                    dateCollected: new Date()
                    }
                  swims.push(swim);
                  }
                }
            }
            resolve(swims);
        });
    });
}

module.exports = getData;
