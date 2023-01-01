import { LightningElement } from 'lwc';

export default class NameUpper extends LightningElement {
    fName = "john";
    lName = "conner";

    get fullUpper(){  // GET fonksiyonu
        //return this.fName.toUpperCase() +' '+ this.lName.toUpperCase();
        return`Isim Soyisim : ${this.fName.toLocaleUpperCase()} ${this.lName.toLocaleUpperCase()}`;

    }
}