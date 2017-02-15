/**
 * Created by Administrateur on 14/02/2017.
 */
var sum = function(a, b) {
    return a+b;
} ;

console.log(sum(1,2)); // 3
console.log(sum('1',2)); // '12'
console.log (sum(1,2,3));  //3
console.log(sum(1)); // NaN

var sum = function(a,b) {

    if ( a === undefined  || b === undefined) {
        throw new Error('a et b obligatoire');
    }
    return a +b;
};

try {
    sum(1);
}
catch (e) {
    console.error(e.message);
}
finally {

}

var sum = function(a, b) {
    console.log(arguments);
    var result = a+b;
    for ( var i =2; i < arguments.length; i++) {
        result = result+ arguments[i];
    }
    return result;
} ;

console.log (sum(1,2,3));  //6

var sum = function(a, b) {
    b = b || 0;
    return a+b;
} ;

console.log (sum(1));  //1





// closure

var logclosure = function (msg) {
    return function() {
        console.log(msg);
    };

};

var logHello = logclosure('Hello la belle closure');
logHello();



for (var i=0; i<3; i++) {
    setTimeout( function ()  {
        console.log(i);
    }, 1000)

}



for (var i=0; i<3; i++) {
    setTimeout( logclosure(i), 1000)

}