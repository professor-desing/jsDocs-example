/**
 * Class to create a Programmer
 * @example
 * const newProgrammer = new programmer({fullname: 'npt'}, "Go");
 * newProgramer.getInfo();
 * @see https://www.youtube.com/
 * @todo Implement the resto of the methods.
 * @tutorial firstTutorial
 */

class programmer{
    /**
     * @param {{fullname: string}} user Use's Information
     * @param {string} Lenguage A programing Lenguage
     */
    constructor(user, Lenguage){
        this.fullname = user.fullname;
        this.lenguage = Lenguage;
    }
    /**
     * Get programmer informaation
     * @returns {void}
     */
    getInfo(){
        console.log(`I'm ${this.fullname} and my favorite programing Lenguage is ${this.lenguage}`);
    }

}

/**
 * Know more in {@link programmer}
 */
const p1 = new programmer({fullname: 'npm'}, "Js"); 
const p2 = new programmer({fullname: 'npx'}, "Ts"); 

p1.getInfo();
p2.getInfo();