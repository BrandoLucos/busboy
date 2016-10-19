// var game = {
//         calcScore: function() {

//             if (stopwatch.elapsedTime < 3151 && stopwatch.elapsedTime > 2849) {
//                 total = (total + 100);
//                 document.getElementById('result').innerHTML = total;
//                 alert('Hey, good job that was a near perfect pull');


                // var idsToHide = ['jug', 'vase', 'table1'];
                // idsToHide.forEach(function(id) {
                //     console.log('hiding id:', id);
                //     document.getElementById(id).style.display = 'none';
                //     // console.log('stopwatch.elapsedTime:', stopwatch.elapsedTime);
                // });
                // setTimeout(function() {
                //     idsToHide.forEach(function(id) {
                //         console.log('showing id:', id);
                //         document.getElementById(id).style.display = 'block';
                //     });
                // }, 3000);

            // document.getElementById('fork1').hidden=true;
            // document.getElementById('fork2').hidden=true;
            // document.getElementById('knife1').hidden=true;
            // document.getElementById('knife2').hidden=true;
            // document.getElementById('plate1').hidden=true;
            // document.getElementById('plate2').hidden=true;
            // document.getElementById('jug').hidden=true;
            // document.getElementById('vase').hidden=true;
            // document.getElementById('cup1').hidden=true;
            // document.getElementById('cup2').hidden=true;
            // document.getElementById('A').hidden=false;
            // document.getElementById('B').hidden=false;
            // document.getElementById('C').hidden=false;
            // document.getElementById('D').hidden=false;
            // document.getElementById('E').hidden=false;
            // document.getElementById('F').hidden=false;
            // document.getElementById('G').hidden=false;
            // document.getElementById('H').hidden=false;
            // document.getElementById('I').hidden=false;
            // document.getElementById('J').hidden=false;



//             } else if (stopwatch.elapsedTime > 3151 && stopwatch.elapsedTime < 3500) {
//                 total = (total + 40);
//                 document.getElementById('result').innerHTML = total;
//                 var idsToHide = ['fork1', 'fork2', 'knife1', 'knife2', 'table1'];
//                 idsToHide.forEach(function(id) {
//                     console.log('hiding id:', id);
//                     document.getElementById(id).style.display = 'none';
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
//                 //divTwo = document.getElementById('A','B','C','D','E','F','G','H','I','J')
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



//if timer is greater than 1.15 seconds varlightItems will spill

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
 // document.getElementById('jug').hidden=true;
            // document.getElementById('vase').hidden=true;
            // document.getElementById('I').hidden=false;
            // document.getElementById('J').hidden=false;
            // document.getElementById('F').hidden=false;
            // document.getElementById('B').hidden=false;






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
