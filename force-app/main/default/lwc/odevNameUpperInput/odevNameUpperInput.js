import { LightningElement } from 'lwc';

export default class OdevNameUpperInput extends LightningElement {
    fName = '';
    lName = '';

    get fullName(){
        return `${this.fName.toLocaleUpperCase()} ${this.lName.toLocaleUpperCase()}`;
    }

    handlefName(event){
        this.fName = event.target.value;
    }

    handlelName(event){
        this.lName = event.target.value;
    }


}