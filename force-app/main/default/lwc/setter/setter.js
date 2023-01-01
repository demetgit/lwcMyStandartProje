import { LightningElement } from 'lwc';

export default class Setter extends LightningElement {
    
    name = "Cat";
    age = 2; // Yeni yaş girildiğinde bu variable a atanacak
    newAge = 0;

    customerDetail = {
        name : 'Tim',
        age : 30
    }

    // c-
    parentAge = 24;

    updateAge(event){
        this.newAge = event.target.value; // inputtan girilen yaş hemen Age e atanmayacak butona tıklanınca atanacak.
    }
    updateOrginalAge(){
        this.age1 = this.newAge;
    }
    //----------------------------------------
    //1- get kullanalım.
    get age1(){
        return parseInt(this.age) + 1;
    }
    set age1(value){
        if (value<0){ // Negatif yaş girilme ihtimaline karşı
            alert('Geçerli bir sayı giriniz');
            console.error('Geçersiz Yaş Girildi');

        }else{
            this.age = value;
        }

        
    }
}