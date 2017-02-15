/**
 * Created by Administrateur on 14/02/2017.
 */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var getNumber = function () {
    return(  Math.floor(101 * Math.random()));
}

const numberToFind = getNumber();
var essais = [];

var jouer = function () {

    rl.question('veuillez saisir un nombre entre 0 et 100 ou exit pour sortir du jeu', function (answer) {
        // TODO: Log the answer in a database
        if ( essais.length) {
            console.log('vous avez deja joué : ', essais.join(', '));
        }


        if (answer == 'exit') {
            rl.close();
        }
        else {
             var numberToCompare = parseInt(answer);
             if ( isNaN(numberToCompare)) {
                 console.log('Oh !! je vous ai demandé un nombre s\'il vous plait, recomencez');
                 jouer();
             } else {
                 essais.push(numberToCompare);
                 if (numberToCompare == numberToFind) {
                     rl.close();
                     console.log('Hourra ! Le nombre est trouvé');
                 } else {
                     if (numberToCompare < numberToFind) {
                         console.log('Un peu plus s\'il vous plait');
                     }
                     else {
                         console.log('Un peu moins s\'il vous plait');
                     }
                     jouer();
                 }

             }
        }
    });
};

console.log( numberToFind);
jouer();

