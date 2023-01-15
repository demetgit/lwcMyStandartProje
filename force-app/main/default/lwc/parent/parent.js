import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    eventName1;
    eventName2;
    eventName3;
    eventName4;

    handleButtonClick(){
        this.eventName1 = "Child butonuna tiklandi";
    }

    handleButtonClick2(event) {
        this.eventName2 = event.detail; //input verisi child'dan geldigi icin detail yazilir
    }

    handleButtonClick3(event) {
     this.eventName3 = event.detail.isim + ' ' + event.detail.soyisim;
    }
    handleButtonClick4(event) {
        this.eventName4 = event.detail.isim + ' ' + event.detail.soyisim;
       }
   }
