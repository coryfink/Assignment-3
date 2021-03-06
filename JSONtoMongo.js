'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */
 mongoose.connect(config.db.uri);
var listings = require('./listings.json').entries;
for (var i = 0; i < listings.length; i++) {
    var item = Listing(listings[i]);
    item.save(function(err) {
        if (err) throw err;

        console.log("Listing created..");
});
}
/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
