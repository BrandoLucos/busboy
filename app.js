var lightItem = 15
var mediumItem = 20
var heavyItem = 35

// Wait for DOM to be ready
$(function() {
  stopwatch.$elapsedTime = $('#elapsedTime');
  stopwatch.$stopWatchButton = $('#stopWatchButton');
  stopwatch.reset();
});

var game = {
  calcScore: function() {
    if (stopwatch.elapsedTime < 500) {
      alert('You are fast');
    }
    else if (stopwatch.elapsedTime < 1000) {
      alert('Not bad');
    }
    else {
      alert('Too slow');
    }
  }
};

var stopwatch = {

  reset: function() {
    this.startTime = null;
    this.endTime = null;
    this.elapsedTime = 0;
    this.$stopWatchButton.text('Start');
    this.mode = 'new';
    this.render();
  },

  start: function() {
    this.$stopWatchButton.text('Stop');
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
    switch(this.mode) {
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

