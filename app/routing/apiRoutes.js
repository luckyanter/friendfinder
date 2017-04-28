
var friends = require("../data/friends");
// console.log(friends);

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });


  app.post("/api/friends", function(req, res) {

    var ideal = {name: "", photo: "",total: "", number: 50};
    var userInput = req.body;
    userInput.total = 0;
    for (var i = 0; i < userInput.scores.length; i++) {
      var number = [];
      number[i] = parseInt(userInput.scores[i]);
      userInput.total += number[i];
    }
    var bestNumber = 0;
    console.log(userInput.scores)
    for (var k = 0; k < friends.length; k++) {
        bestNumber = Math.abs(friends[k].total - userInput.total);
        console.log(bestNumber);
        if (bestNumber < ideal.number){
            ideal = {name: friends[k].name, photo: friends[k].photo,total:friends[k].total,
              number: bestNumber};
            // console.log(ideal);
        }
    }

     
    friends.push(userInput);
    res.json(ideal);

  });

};
