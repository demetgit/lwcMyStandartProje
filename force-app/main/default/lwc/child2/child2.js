import { LightningElement } from 'lwc';

export default class Child2 extends LightningElement {

inputValue;
handleChange2(event){
    this.inputValue= event.detail.value;  //input child da oldugu için ve parentta yazdrlacagi icin target degil detail yazıyoruz


}

handleClick2(){
    const myEvent2 = new CustomEvent('clicked2',{detail:this.inputValue}); //yeni bilgi custom event cift parametre alacak
    this.dispatchEvent(myEvent2);  
    //detail, input degerine gore degsr ve inputa girilen degeri tıklanma anında parent a tasr
//default olarak null dir.
}


}