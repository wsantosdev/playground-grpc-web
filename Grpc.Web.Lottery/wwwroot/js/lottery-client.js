const {PlayRequest, PlayReply} = require('./Lottery_pb.js');
const {LotteryServiceClient} = require('./Lottery_grpc_web_pb.js');

const client = new LotteryServiceClient('https://localhost:5001'); //grpc-web-lottery.azurewebsites.net

(function() {

  document.querySelector('#buttonPlay').addEventListener("click", function(event) {
    var request = new PlayRequest();
    var chosenNumbers = [];
    for(var i = 1; i<= 6; i++)
      chosenNumbers[i-1] = document.querySelector('input[name="chosen' + i + '"]').value;
  
    request.setNumbersList(chosenNumbers);
  
    client.play(request, {}, (err, response) => {
      console.log(response.getMessage());
      document.querySelector("#resultSpan").innerHTML = response.getMessage();
    });
  });

})();