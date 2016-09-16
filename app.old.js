
// var elms = document.getElementsById("toggleButton");
// for (var i = 0; i < 5000; i++) {
//     for (var j = 0, length = elms.length; j < length; j++) {
//     }
// }

// console.timeEnd("Loop time");

// var $button = $("#toggleButton")
// $button.click(startTimer)


// document.getElementById("toggleButton").onclick = function()
// {function onFirstClick() {
//    if (timer === 0) {
//     timer = setInterval(3000);
//    .toggleButton.text('Stop');
//       }else {
//         clearInterval(timer);
//     timer = null;
//    .toggleButton.text('Start');
//   }
//   }
// }
//onSecondClick stop timer
//if timer is .85 - 1.15 seconds.
//noitemsSpilled

//if timer is less than .85 seconds
//var heavyItems spill

//if timer is greater than 1.15 seconds
//varlightItems will spill

//if timer is greater than 2 seconds
//all items will spill

//if timer is less than .25 seconds all items will spill
//else all items spill

//onsecond click
//switch table state
//total items
//log total score to score board
//log message
//







// addEventListener function(onClick) {
//   console.log(GO!);
// }

// function myFunction() {
//     alert('Hello');
// }

// toggleTimer function() {}


// scoreBoard function() {}

// togglePlayer: function() {
//   this.currentPlayer = this.currentPlayer === '1' ? '2' : '1';
// };

// function goToNextState() {
//   table1.nextState();
// }

/*var game = {
#table1 [],
currentPlayer: '1',

togglePlayer: function() {
  this.currentPlayer = this.currentPlayer === '1' ? '2' : '1';
};

showCurrentPlayer: function() {
  this.$statusMessage.text('Current Player: ' + this.currentPlayer);

}

































buildGameBoard: function() {

  this.$statusMessage = $("#statusMessage");
  this.showCurrentPlayer();


  for (var r = 0; r < 3; r++) {
    var $row = $("<div class='row'></div");
    var row = [];
    for (var c = 0; c < 3; c++) {
      var $button = $('<button class="btn-lg cell" onClick=game.move(' +
                     r + ',' + c + ')></button>');
      row.push($button);
      $row.append($button);
  }
  this.board.push(row);
  $("#board").append($row);
 }
};

reset: function() {
  $('.cell').text('?').removeClass()
}



/*var table =
var c=document.getElementById("myTable");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(100,75,100,0,2*Math.PI);
ctx.stroke();*/
