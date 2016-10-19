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
        document.getElementById('table').hidden=false;
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

// Actual game, prompts, and score calculator

var game = {
    calcScore: function() {

        if (stopwatch.elapsedTime < 3151 && stopwatch.elapsedTime > 2849) {
            total = (total + 100);
            document.getElementById('result').innerHTML = total;
            $.notify('Hey, good job that was near perfect\!');

        } else if (stopwatch.elapsedTime < 2849 && stopwatch.elapsedTime > 2500) {
            total = (total + 60);
            document.getElementById('result').innerHTML = total;
            document.getElementById('jug').hidden=true;
            document.getElementById('vase').hidden=true;
            document.getElementById('I').hidden=false;
            document.getElementById('J').hidden=false;
            document.getElementById('F').hidden=false;
            document.getElementById('B').hidden=false;
            alert('Too fast, youre making a mess kid!');

        } else if (stopwatch.elapsedTime > 3151 && stopwatch.elapsedTime < 3500) {
            total = (total + 40);
            document.getElementById('result').innerHTML = total;
            document.getElementById('fork1').hidden=true;
            document.getElementById('fork2').hidden=true;
            document.getElementById('knife1').hidden=true;
            document.getElementById('knife2').hidden=true;
            document.getElementById('A').hidden=false;
            document.getElementById('C').hidden=false;
            document.getElementById('E').hidden=false;
            document.getElementById('H').hidden=false;
            alert('Too slow your gonna break something!');


        } else if (stopwatch.elapsedTime > 3500 || stopwatch.elapsedTime < 2500) {
            total = (total - 100);
            document.getElementById('result').innerHTML = total;
            document.getElementById('fork1').hidden=true;
            document.getElementById('fork2').hidden=true;
            document.getElementById('knife1').hidden=true;
            document.getElementById('knife2').hidden=true;
            document.getElementById('plate1').hidden=true;
            document.getElementById('plate2').hidden=true;
            document.getElementById('jug').hidden=true;
            document.getElementById('vase').hidden=true;
            document.getElementById('cup1').hidden=true;
            document.getElementById('cup2').hidden=true;
            document.getElementById('A').hidden=false;
            document.getElementById('B').hidden=false;
            document.getElementById('C').hidden=false;
            document.getElementById('D').hidden=false;
            document.getElementById('E').hidden=false;
            document.getElementById('F').hidden=false;
            document.getElementById('G').hidden=false;
            document.getElementById('H').hidden=false;
            document.getElementById('I').hidden=false;
            document.getElementById('J').hidden=false;
            alert('I dont know if you caught a snag or what but its coming out of your check');
        }
    }
}

if (total >= 1000) {
    alert('YOU WON IT ALL, KID!');
};
