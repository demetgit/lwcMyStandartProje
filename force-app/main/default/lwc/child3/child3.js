import { LightningElement } from 'lwc';

export default class Child3 extends LightningElement {
    copyObject; //input'tan degisiklik gelmesi ihtimaline karsi, calisilacak veri,copy'de koruma altina alinir

    eventObject = {
        isim:'',
        soyisim:''
    }

    handleFirstName(event){
        this.eventObject.isim = event.detail.value;
    }

    handleLastName(event){
        this.eventObject.soyisim = event.detail.value;
    }

    handleClick3(){
        this.copyObject = Object.assign({},this.eventObject); //shallow copy syntax'i

        const myEvent3 = new CustomEvent('clicked3',{detail:this.copyObject});
        this.dispatchEvent(myEvent3);
    }
}