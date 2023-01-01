import { api, LightningElement } from 'lwc';

export default class SetterChild1 extends LightningElement {
    //a-
    calculatedAge;

    @api //customerAge i parentta kullanabilmek için yazdık.
    get customerAge(){
        return this.calculatedAge;
    }
    //e- 
    set customerAge(data){
        this.calculatedAge = data * 2;
    }
}