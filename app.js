$(function() {
    stopwatch.$elapsedTime = $('#elapsedTime');
    stopwatch.$stopWatchButton = $('#stopWatchButton');
    stopwatch.reset();
});

  // stopwatch with start, stop, reset, update and render functions

var stopwatch = {

    reset: function() {
        this.startTime = null;
        this.endTime = null;
        this.elapsedTime = 0;
        this.$stopWatchButton.text('Start then stop on "3" secs');
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

    // Stopwatch mode switch

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

// Actual game, prompts, and score calculator

var game = {
    calcScore: function() {

        // BIG OL IF FUNCTION
        //onSecondClick stop timer if timer is 3.151 - 2.849 seconds. **noitemsSpilled

        if (stopwatch.elapsedTime < 3151 && stopwatch.elapsedTime > 2849) {
            total = (total + 100);
            document.getElementById('result').innerHTML = total;
            alert('Hey, good job that was near perfect\!');

            //if timer is less than 2.849 seconds and greater than 2.500 seconds var heavyItems spill

        } else if (stopwatch.elapsedTime < 2849 && stopwatch.elapsedTime > 2500) {
            total = (total + 60);
            document.getElementById('result').innerHTML = total;

            var idsToHide = ['jug', 'vase'];
            idsToHide.forEach(function(id) {
                console.log('hiding id:', id);
                document.getElementById(id).style.display = 'none';
            });
            setTimeout(function() {
                idsToHide.forEach(function(id) {
                    console.log('showing id:', id);
                    document.getElementById(id).style.display = 'block';
                });
            }, 3000);
            var idsToShow = ['C', 'B'];
            idsToShow.forEach(function(id) {
                console.log('showing id:', id);
                document.getElementById(id).style.display = 'block';
            });
            setTimeout(function() {
                idsToShow.forEach(function(id) {
                    console.log('hiding id:', id);
                    document.getElementById(id).style.display = 'none';
                });
            }, 3000);
            alert('Too fast, youre making a mess kid!');

            //if timer is greater than 3.15 seconds and less than 3.500 seconds varlightItems spill

        } else if (stopwatch.elapsedTime > 3151 && stopwatch.elapsedTime < 3500) {
            total = (total + 40);
            document.getElementById('result').innerHTML = total;

            var idsToHide = ['fork1', 'fork2', 'knife1', 'knife2'];
            idsToHide.forEach(function(id) {
                console.log('hiding id:', id);
                document.getElementById(id).style.display = 'none';
            });
            setTimeout(function() {
                idsToHide.forEach(function(id) {
                    console.log('showing id:', id);
                    document.getElementById(id).style.display = 'block';
                });
            }, 3000);
            var idsToShow = ['J', 'C', 'G', 'H'];
            idsToShow.forEach(function(id) {
                console.log('showing id:', id);
                document.getElementById(id).style.display = 'block';
            });
            setTimeout(function() {
                idsToShow.forEach(function(id) {
                    console.log('hiding id:', id);
                    document.getElementById(id).style.display = 'none';
                });
            }, 3000);
            alert('Too slow, your gonna break something!');


        } else if (stopwatch.elapsedTime > 3500 || stopwatch.elapsedTime < 2500) {
            total = (total - 100);
            document.getElementById('result').innerHTML = total;

            var idsToHide = ['fork1', 'fork2', 'knife1', 'knife2', 'cup1', 'cup2', 'vase', 'jug', 'plate1', 'plate2'];
            idsToHide.forEach(function(id) {
                console.log('hiding id:', id);
                document.getElementById(id).style.display = 'none';
            });
            setTimeout(function() {
                idsToHide.forEach(function(id) {
                    console.log('showing id:', id);
                    document.getElementById(id).style.display = 'block';
                });
            }, 3000);
            var idsToShow = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
            idsToShow.forEach(function(id) {
                console.log('showing id:', id);
                document.getElementById(id).style.display = 'block';
            });
            setTimeout(function() {
                idsToShow.forEach(function(id) {
                    console.log('hiding id:', id);
                    document.getElementById(id).style.display = 'none';
                });
            }, 3000);
            alert('I dont know if you caught a snag or what but its coming out of your check');
        }
    }
}

if (total >= 1000) {
    alert('YOU WON IT ALL, KID!');
};
