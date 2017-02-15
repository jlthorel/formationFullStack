/**
 * Created by Administrateur on 15/02/2017.
 */

export default class Horloge {
    constructor( containerElt) {
        this.containerElt = containerElt;
    }

    update() {
        let now = new Date();
        let h = now.getHours();
        let m = now.getMinutes();
        let s = now.getSeconds();

        this.containerElt.innerHTML =  `${h}:${m}:${s}`;
    }

    start() {
        setInterval(this.update.bind(this) , 1000);
    }
}
