function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    

Object.defineProperty(this, 'duration', {
    get: function() { return duration;},
    set: function(value) { duration = value;}
});
Object.defineProperty(this, 'startTime', {
    get: function() { return startTime;},
    set: function(value) { startTime = value;}
});
Object.defineProperty(this, 'endTime', {
    get: function() { return endTime;},
    set: function(value) { endTime = value;}
});
Object.defineProperty(this, 'running', {
    get: function() { return running;},
    set: function(value) { running = value;}
});

}

Stopwatch.prototype.start = function() {
    if(this.running)
    throw new Error('Stopwatch is already started');

    this.running = true;
    console.log(this.running);

    this.startTime = new Date();
    console.log(this.startTime);
};

Stopwatch.prototype.stop = function() {
    if(!this.running)
    throw new Error('Stopwatch is not started');

    this.running = false;

    this.endTime = new Date();
    console.log(this.endTime-this.startTime);
    let seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;

    this.duration +=seconds;
}

Stopwatch.prototype.reset = function() {
    this.duration = 0;
    this.startTime = null;
    this.endTime = null;
    running = false;
}

let sw = new Stopwatch();