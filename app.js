// var lightItem = 15
// var mediumItem = 20
// var heavyItem = 35
stockPricesYesterday = [];



$(function() {
    stopwatch.$elapsedTime = $('#elapsedTime');
    stopwatch.$stopWatchButton = $('#stopWatchButton');
    stopwatch.reset();
});


var stopwatch = {

    reset: function() {
        this.startTime = null;
        this.endTime = null;
        this.elapsedTime = 0;
        this.$stopWatchButton.text('Start then stop on "3"');
        this.mode = 'new';
        this.render();
    },

    start: function() {
        this.$stopWatchButton.text('Pull');
        this.mode = 'started';
        this.startTime = Date.now();
        var that = this;
        this.interval = setInterval(function() {
            that.update();
        }, 10);
    },

    stop: function() {
        this.$stopWatchButton.text('Reset');
        this.mode = 'stopped';
        clearInterval(this.interval);
        this.interval = null;
        game.calcScore();
    },

    update: function() {
        this.elapsedTime = Date.now() - this.startTime;
        this.render();
    },

    render: function() {
        this.$elapsedTime.text(this.elapsedTime / 1000);
    },

    dispatch: function() {
        switch (this.mode) {
            case 'new':
                this.start();
                break;
            case 'started':
                this.stop();
                break;
            case 'stopped':
                this.reset();
                break;
            default:
                alert('We are in a broken mode: ' + this.mode);
        }
    }
};
var total = 0;

// var divOne = document.getElementById(2);
// divOne.style.display='hidden';

// var divTwo = document.getElementByClass(2);
// divOne.style.display='show';

function wonItAll() {
    if (total >= 500) {
        alert('YOU WON IT ALL, KID!');
    }
};

var game = {
    calcScore: function() {

        if (stopwatch.elapsedTime < 3151 && stopwatch.elapsedTime > 2849) {
            total = (total + 100);
            document.getElementById('result').innerHTML = total;
            alert('Hey, good job that was a near perfect pull');
            wonItAll();

        } else if (stopwatch.elapsedTime < 2849 && stopwatch.elapsedTime > 2500) {
            total = (total + 60);
            document.getElementById('result').innerHTML = total;
            // divOne = document.getElementById('jug' , 'vase')
            //divTwo = document.getElementByClass('X3')
            alert('Too fast, youre making a mess kid!');
            wonItAll();

        } else if (stopwatch.elapsedTime > 3151 && stopwatch.elapsedTime < 3500) {
            total = (total + 40);
            document.getElementById('result').innerHTML = total;
            //divOne = document.getElementById('fork1', 'fork2' , 'knife1', 'knife2')
            //divTwo = document.getElementByClass('X1')
            alert('Too slow your gonna break something!');
            wonItAll();
        } else if (stopwatch.elapsedTime > 3500 || stopwatch.elapsedTime < 2500) {
            total = (total - 100);
            document.getElementById('result').innerHTML = total;
            //divOne = document.getElementById('fork1', 'fork2','knife1','knife2','plate1','plate2','jug','vase')
            //divTwo = document.getElementByClass('X1', 'X2' , 'X3')
            alert('I dont know if you caught a snag or what but its coming out of your check');
            wonItAll();
        }
    }
}

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
//         // this.document.getElementById("table").style.background-color = "white";
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
