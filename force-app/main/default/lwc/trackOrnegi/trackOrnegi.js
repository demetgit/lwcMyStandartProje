import { LightningElement, track } from 'lwc'; // 1- Reaktif olması için @track ekledik

export default class TrackOrnegi1 extends LightningElement {
   @track customer ={   // 1- Reaktif olması için @track ekledik
        adi : "Ali", 
        soyadi : "Can",
        yasi : 35

    }
    //3-
    trackOrnek(event){
        this.customer.adi=event.target.value;

    }
}