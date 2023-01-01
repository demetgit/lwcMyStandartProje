import { LightningElement } from 'lwc';

export default class ButtonBasic extends LightningElement {
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }
    handleClick1(event){
        alert('child butona tiklandi');  //window.alert seklnde de yazilablrdi
    }
    handleClick2(){
        alert('handle 2 fonksyonu calisti');
        //renderedCallback fonksiyonu kullanlmadlidir.Bu fonksiyon child daki event
        //parent a baglamak icin kullanlr
       
    }
    renderedCallback(){
        this.template.querySelector('c-event-child1').addEventListener ("click",this.handleClick2)     //html e ye yazamadmz template i yazyrz
    }
}
