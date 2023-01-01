import { LightningElement, wire } from 'lwc';
//8 - öncelkle iki tane import yapmamz gerekr
import {CurrentPageReference} from 'lightning/navigation'
import { registerListener } from 'c/pubsub'; //pubsub a bagladk
export default class Subscriber extends LightningElement {

    ismiGoster;  //9-ismiGoster degskenını olustrdk ve wire i olstrdk ilk degeri bos
    //10
    @wire(CurrentPageReference) pageRef; //publisher a bagladk
//11 üç parametreyi yazalm
//eventName, callback, thisArg

connectedCallback() {//handleChange in alıcı(subscriber) tarafndaki karsiligidr ve hazr bir fonksyndr
registerListener(
    //12-callback destek fonksyonudur,ayri tanmlanr
    //14-showDetails callback fonks olusturunca buraya geldk

    "publisher", this.showDetails,this
)

} 

//13-
showDetails(data){  //yakalanan veri bunun içinde,isigoster e yuklenecek,callback fonksyonu bu
this.ismiGoster=data;
}


}