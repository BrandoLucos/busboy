
//var scoreboard=




// $(function() {
//     stopwatch.$elapsedTime = $('#elapsedTime');
//     stopwatch.$stopWatchButton = $('#stopWatchButton');
//     stopwatch.reset();
// });


// var stopwatch = {

//     reset: function() {
//         this.startTime = null;
//         this.endTime = null;
//         this.elapsedTime = 0;
//         this.$stopWatchButton.text('Start then stop on "3"');
//         this.mode = 'new';
//         this.render();
//         // this. $ ("table").style.background-color = "white";
//     },

//     start: function() {
//         this.$stopWatchButton.text('Pull');
//         this.mode = 'started';
//         this.startTime = Date.now();
//         var that = this;
//         this.interval = setInterval(function() {
//             that.update();
//         }, 10);
//     },

//     stop: function() {
//         this.$stopWatchButton.text('Reset');
//         this.mode = 'stopped';
//         clearInterval(this.interval);
//         this.interval = null;
//         game.calcScore();
//         // this.document.getElementById("table").style.background-color = "black";
//     },

//     update: function() {
//         this.elapsedTime = Date.now() - this.startTime;
//         this.render();
//     },

//     render: function() {
//         this.$elapsedTime.text(this.elapsedTime / 1000);
//     },

//     dispatch: function() {
//         switch (this.mode) {
//             case 'new':
//                 this.start();
//                 break;
//             case 'started':
//                 this.stop();
//                 break;
//             case 'stopped':
//                 this.reset();
//                 break;
//             default:
//                 alert('We are in a broken mode: ' + this.mode);
//         }
//     }
// };
// var total = 0;

// // var divOne = document.getElementById(2);
// // divOne.style.display='hidden';

// // var divTwo = document.getElementByClass(2);
// // divOne.style.display='show';



// var game = {
//         calcScore: function() {

//             if (stopwatch.elapsedTime < 3151 && stopwatch.elapsedTime > 2849) {
//                 total = (total + 100);
//                 document.getElementById('result').innerHTML = total;
//                 alert('Hey, good job that was a near perfect pull');
//             } else if (stopwatch.elapsedTime < 2849 && stopwatch.elapsedTime > 2500) {
//                 total = (total + 60);
//                 document.getElementById('result').innerHTML = total;
//                 var idsToHide = ['jug', 'vase', 'table1'];
//                 idsToHide.forEach(function(id) {
//                     console.log('hiding id:', id);
//                     document.getElementById(id).style.display = 'none';
//                     // console.log('stopwatch.elapsedTime:', stopwatch.elapsedTime);
//                 });

//                 alert('Too fast, youre making a mess kid!');

//                 setTimeout(function() {
//                     idsToHide.forEach(function(id) {
//                         console.log('showing id:', id);
//                         document.getElementById(id).style.display = 'block';
//                     });
//                 }, 3000);

//                 wonItAll();
//             } else if (stopwatch.elapsedTime > 3151 && stopwatch.elapsedTime < 3500) {
//                 total = (total + 40);
//                 document.getElementById('result').innerHTML = total;
//                 var idsToHide = ['fork1', 'fork2', 'knife1', 'knife2', 'table1'];
//                 idsToHide.forEach(function(id) {
//                     console.log('hiding id:', id);
//                     document.getElementById(id).style.display = 'none';
//                     alert('Too slow your gonna break something!');
//                 });



//                 setTimeout(function() {
//                     idsToHide.forEach(function(id) {
//                         console.log('showing id:', id);
//                         document.getElementById(id).style.display = 'block';
//                     });
//                 }, 3000);

//                 wonItAll();
//             } else if (stopwatch.elapsedTime > 3500 || stopwatch.elapsedTime < 2500) {
//                 total = (total - 100);
//                 document.getElementById('result').innerHTML = total;
//                 var idsToHide = ['table1', 'fork1', 'fork2', 'knife1', 'knife2', 'plate1', 'plate2', 'jug', 'vase', 'cup1', 'cup2'];
//                 idsToHide.forEach(function(id) {
//                     console.log('hiding id:', id);
//                     document.getElementById(id).style.display = 'none';
//                 });
//                 //divTwo = document.getElementByClass('X1', 'X2' , 'X3')
//                 alert('I don\'t know if you caught a snag or what but its coming out of your check');
//                 setTimeout(function() {
//                         idsToHide.forEach(function(id) {
//                             console.log('showing id:', id);
//                             document.getElementById(id).style.display = 'block';
//                         });
//                     },
//                 }

//             }
//         }
//         function wonItAll() {
//             if (total >= 500) {
//                 alert('YOU WON IT ALL, KID!');
//             }
//         };
//         //var scoreboard=
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
