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
// divOne.style.display=("hidden");

// var divTwo = document.getElementByClass(2);
// divOne.style.display=("show");

var game = {
    calcScore: function() {

        if (stopwatch.elapsedTime < 3151 && stopwatch.elapsedTime > 2849) {
            total = (total + 100);
            document.getElementById('result').innerHTML = total;
            alert('Hey, good job that was near perfect\!');

        } else if (stopwatch.elapsedTime < 2849 && stopwatch.elapsedTime > 2500) {
            total = (total + 60);
            document.getElementById('result').innerHTML = total;
            alert('Too fast, youre making a mess kid!');
            // divOne = document.getElementById('jug' , 'vase')
            //divTwo = document.getElementByClass('X3')

        } else if (stopwatch.elapsedTime > 3151 && stopwatch.elapsedTime < 3500) {
            total = (total + 40);
            document.getElementById('result').innerHTML = total;
            alert('Too slow your gonna break something!');
            //divOne = document.getElementById('fork1', 'fork2' , 'knife1', 'knife2')
            //divTwo = document.getElementByClass('X1')

        } else if (stopwatch.elapsedTime > 3500 || stopwatch.elapsedTime < 2500) {
            total = (total - 100);
            document.getElementById('result').innerHTML = total;
            alert('I dont know if you caught a snag or what but its coming out of your check');
            //divOne = document.getElementById('fork1', 'fork2','knife1','knife2','plate1','plate2','jug','vase')
            //divTwo = document.getElementByClass('X1', 'X2' , 'X3')
        }
    }
}

if (total >= 1000) {
    alert('YOU WON IT ALL, KID!');
}

function showTotal(total) {
    ("You\'ve earned " + total + "points");

};
