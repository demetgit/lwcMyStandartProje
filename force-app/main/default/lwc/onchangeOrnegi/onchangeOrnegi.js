import { LightningElement } from 'lwc';


export default class OnchangeOrnegi extends LightningElement {

isimSoyisim;//1.bos bir degsken tanmladm

//4-

handlerOnchange(event){
this.isimSoyisim= event.target.value; //deploy et
}
}