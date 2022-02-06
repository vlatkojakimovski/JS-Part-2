//Factory Function

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function () {
//             console.log('draw');
//         }
//     };
// }

//#region 
/*
// const circle = createCircle(1);
// circle.draw();

// Constructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const circle1 = new Circle (10);

for (let key in circle1) {
    if(typeof circle1[key] !== 'function')
    console.log(key, circle1[key]);
}

// returns all keys from object in array
const keys = Object.keys(circle1);
console.log(keys);
 
if('radius' in circle1)
console.log('Circle has a radius');
*/
//#endregion

function Circle(radius){
    this.radius = radius;

    let defaultLocation = {x:0, y:0};

    let computeOptimumLocation = function() {
        // ...
    }

    this.draw = function () {
        computeOptimumLocation(0.1);
        // defaultLocation
        // this.radius

        console.log('draw');
    }
}

