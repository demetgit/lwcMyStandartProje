import { LightningElement } from 'lwc';

export default class GetterPractice extends LightningElement {
    //1
    num1 = 10;
    num2 = 5;
    result = this.num1 + this.num2; // bu şekilde de olabilirdi ama getter kullanalım.
    isimListesi =['Ali', 'Veli', 'Ayşe','Fatma','Hüseyin', 'Kutay', 'Doğa', 'Nurcan', 'Levent'];
    index = 0;

    //---------------------------------------

    get toplama(){ // get methodda return vardır.
        return this.num1 + this.num2;

    }
    get cikarma(){ // get methodda return vardır.
        return this.num1 - this.num2;

    }
    get carpma(){ // get methodda return vardır.
        return this.num1 * this.num2;

    }
    get bolme(){ // get methodda return vardır.
        return this.num1 / this.num2;

    }

    get ilkIsim(){
        return this.isimListesi[0];

    }
    get sonIsim(){
        return this.isimListesi[this.isimListesi.length-1];
    }
    //--------------------------------------

    handleBlur(event){
        this.index = event.target.value;

    }
    get girilenIndex(){
        if(this.index>=0 && this.index<this.isimListesi.length){
            return this.isimListesi[this.index];

        }else{
            alert("Lütfen 0-8 arası bir numara giriniz");

        }
    }

}