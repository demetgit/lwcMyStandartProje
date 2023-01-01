import { LightningElement, wire } from 'lwc';
//2 importlari yapalm

import {CurrentPageReference} from 'lightning/navigation'
import { fireEvent } from 'c/pubsub';      // publisher tarafinda kullanilacak
//3 publisher i ,pubsub.js e baglams olduk

export default class Subscriber extends LightningElement {

    //4 sayfadaki 2 component i birbirine baglamak icin wire kullanrz

    @wire(CurrentPageReference) pageRef; //5- pageRef variable ismidr
    //pageRef, eventName, payload (pubsubdakilerle bağ kurmama yarayan kelimeler)

    //6-handleChange i olustualm

    handleChange(event){  //fire ve listener , fonksiyon icinde cagrlr
        fireEvent(
            this.pageRef,"publisher",event.target.value //girilen datayi publisher ismyle yaymladk
        )

    }
}
