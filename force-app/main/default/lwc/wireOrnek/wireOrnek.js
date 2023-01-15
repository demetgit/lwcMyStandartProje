import { LightningElement} from 'lwc'; //1-wire ekleyelim //a1 -imperatively hale getirmek icin wire'i sil
import getAccounts from '@salesforce/apex/AccountController.getAccounts'; //2-AccountController adinda bir class ve getAccounts adinda bir method olusturmaliyim

export default class WireOrnek extends LightningElement {
    filterWord = ""; //3-
    accounts; //a2
    error;  //a2
    //@wire(getAccounts, {filter: '$filterWord'}) accounts; //a2- wire yapisini yoruma dusurelim 
    //4- wire yapisi = (method, methodun icinde yapilacak filtreleme) sonucu icine alacak variable;
    //4-1- filter kelimesi Apex method'unun parametre adi olmalidir
    //4-2- filterWord'un basina dinamik hale getirmek icin $ isareti konulur.
    //5-class'imizi VsCode uzerinden olusturalim.

    handleInput(event) { //10
        this.filterWord = event.target.value;
    }

    //b
    handleGetAccount() {
        getAccounts({ filter: this.filterWord }) //c- $ isareti olmayacak cunku dinamik omayacak, butona basilinca account'lar gelecek
            .then((result) => { //d- wire'in 3. bolumunu dagitiyoruz
                this.accounts = result;
                this.error = undefined; //account'lar geldiyse hata bostur, yoktur
            })
            .catch((error) => {
                this.error = error;
                this.accounts = undefined;
            }); //e-onclick'i olusturmak icin html'e gidelim
    }
}