import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    // 1-Bunu elle değil checkbox ile de yapabilirdik
    flag = false;
    display = false; // A- öncelikli değer kabul edilmedi olsun.
    //C- handleChange fonksiyonunu oluşturalım
    handleChange(event){
        this.display = event.target.checked; // checkbox larda value yerine checked kullanılır.

    }
}