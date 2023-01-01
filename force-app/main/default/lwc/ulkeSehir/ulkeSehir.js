import { LightningElement } from 'lwc';

export default class UlkeSehir extends LightningElement {
    //2-
    ulke;
    sehir;
    unlu;

    handlerUlke(event){
        this.ulke= event.target.value;
    }
    handlerSehir(event){
        this.sehir= event.target.value;
    }
    neyiUnlu(event){
        this.unlu= event.target.value;
    }
}