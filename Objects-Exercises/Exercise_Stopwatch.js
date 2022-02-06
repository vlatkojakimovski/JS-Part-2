function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function() {
        if(running)
        throw new Error('Stopwatch is already started');

        running = true;

        startTime = new Date();
    };
    
    this.stop = function() {
        if(!running)
        throw new Error('Stopwatch is not started');

        running = false;

        endTime = new Date();
        console.log(endTime-startTime);
        let seconds = (endTime.getTime() - startTime.getTime()) / 1000;

        duration +=seconds;
    }
    
    this.reset = function() {
        duration = 0;
        startTime = null;
        endTime = null;
        running = false;
    }

Object.defineProperty(this, 'duration', {
    get: function() { return duration;}
});

}

let sw = new Stopwatch();