/**
 * Created by Administrateur on 14/02/2017.
 */

// module  par fichier qui créée une portée de fichier
//IIFE Immediately Invoked Function Expression
(function () {

    var sum = function(a, b) {
        return a+b;
    } ;

    console.log(sum(1,2)); // 3

}());