
var friends = require("../data/friends");
// console.log(friends);
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {

    var ideal = {name: "", photo: "", diff: 50};

    var userInput = req.body;
    var sumOfDiff = 0;
    var k = 0;
    console.log(friends[k].scores);
    console.log('==========');
    console.log(userInput.scores)
    function run(k){
      if (k < friends.length){
          for (var i = 0; i < friends[k].scores.length; i++) {
            sumOfDiff += Math.abs(parseInt(friends[k].scores[i]) - parseInt(userInput.scores[i]));
            console.log(sumOfDiff);
            if (sumOfDiff < ideal.diff){
              ideal = {name: friends[k].name,photo: friends[k].photo, diff: sumOfDiff};
            }
        k++;
        run(k);
      }

    }
  }
  run(0);
    friends.push(userInput);
    res.json(ideal);

  });

};
