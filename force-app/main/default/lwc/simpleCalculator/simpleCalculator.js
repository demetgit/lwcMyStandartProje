import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    number1 = 0;
    number2 = 0;
    result = 0;
    @track gecmisDegerler=[];
    eskiDeger = false;

    number1Handler(event){
        this.number1 = event.target.value;
    }
    number2Handler(event){
        this.number2 = event.target.value;
    }

    toplama(){
        this.gecmisDegerler.push(this.result);// geçmiş değeri array a push ettik.
        this.result = parseInt(this.number1) + parseInt(this.number2);
    }
    cikarma(){
        this.gecmisDegerler.push(this.result);// geçmiş değeri array a push ettik.
        this.result= this.number1 - this.number2;
    }
    carpma(){
        this.gecmisDegerler.push(this.result);// geçmiş değeri array a push ettik.
        this.result= this.number1 * this.number2;
    }
    bolme(){
        this.gecmisDegerler.push(this.result);// geçmiş değeri array a push ettik. //deploy
        this.result= this.number1 / this.number2;
    }
    eskiDegerHandler(event){
            this.eskiDeger = event.target.checked;
    }



}