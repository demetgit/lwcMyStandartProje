import { LightningElement } from 'lwc';

export default class Odev extends LightningElement {

    copyObject; //input'tan degisiklik gelmesi ihtimaline karsi, calisilacak veri,copy'de koruma altina alinir

    eventObject = {
        wherearefrom: '',
        city:''
    }

    handleFirstName(event){
        this.eventObject.wherearefrom = event.detail.value;
    }

    handleLastName(event){
        this.eventObject.city = event.detail.value;
    }

    handleClick3(){
        this.copyObject = Object.assign({},this.eventObject); //shallow copy syntax'i

        const myEvent4 = new CustomEvent('clicked4',{detail:this.copyObject});
        this.dispatchEvent(myEvent4);
    }
}