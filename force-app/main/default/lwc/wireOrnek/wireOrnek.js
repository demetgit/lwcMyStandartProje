import { LightningElement, wire } from 'lwc';// 1- wire ekleyelim //a1-- wire'ı sil
import getAccounts from '@salesforce/apex/AccountController.getAccounts'; //2-AccountController adında bir Class ve getAccounts adında bir method oluşturmalıyım.

export default class WireOrnek extends LightningElement { 
    filterWorld = ""; // 3-
    @wire(getAccounts, {filter: '$filterWorld'}) accounts; 
    //4- wire Yapısı = method, methodun içinde yapılacak filtreleme, sonucu içine alacak bir variable(property)
    //4.1- filter kelimesi apex methodunun parametre adı olmalıdır. 
    //4.2- filterworld un başına dinamik hale getirmek için $ işareti konur. 
    //5- Classımızı VsCode üzerinden oluşturalım.

    handleInput(event){ //10
        this.filterWorld = event.target.value

    }

}