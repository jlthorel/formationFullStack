/**
 * Created by Administrateur on 15/02/2017.
 */

import  moment from 'moment';
export default class Horloge {
    constructor( containerElt) {
        this.containerElt = containerElt;
    }

    update() {
       this.containerElt.innerHTML = moment().format('hh:mm:ss')

    }

    start() {
        setInterval(this.update.bind(this) , 1000);
    }
}
