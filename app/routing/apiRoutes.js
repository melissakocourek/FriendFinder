var path = require("path");
var friends = require('../data/friends.js')
module.exports = function(app){


    app.get('/api/friends', function(req, res){
        res.json(friends)
    })

    app.post('/api/friends', function(req, res){
        var totalDifference;
        var lowestTotalDifference = 41;
        var match;
        var currentUser = req.body
        // loop through the array of friends objects
        for(var i in friends){
            totalDifference = 0;
            // loop through the scores array within each object
            for(var j in friends[i].scores){
                // calculate total difference in scores
                totalDifference += Math.abs(friends[i].scores[j] - currentUser.scores[j])
            }
            // save the lowest total difference / match before moving on to the next friend
            if(totalDifference < lowestTotalDifference){
                lowestTotalDifference = totalDifference;
                match = friends[i]
            }
        }
        // add the current user object to the friends array
        friends.push(currentUser)
        res.send([match, lowestTotalDifference])
    })
}