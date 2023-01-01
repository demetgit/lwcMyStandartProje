import { LightningElement } from 'lwc';


export default class OninputOrnegi extends LightningElement {
//1.degsken olustur
isim = "Veli";

//3.methodu yani fonksiyonu tanmlayalm 
handleInput(event){
this.isim = event.target.value;
console.log("Degsklk var");

}
}