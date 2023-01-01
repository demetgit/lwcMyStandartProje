import { LightningElement } from 'lwc'; //a1-- wire'ı sil
import getAccounts from '@salesforce/apex/AccountController1.getAccounts'; //2-AccountController adında bir Class ve getAccounts adında bir method oluşturmalıyım.

export default class imperativeOrnek extends LightningElement { 
    filterWorld = "";
    accounts;//a2
    error;//a-2
     // 3-
    //@wire(getAccounts, {filter: '$filterWorld'}) accounts; //a-2 wire yapısını yoruma düşürelim
    //4- wire Yapısı = method, methodun içinde yapılacak filtreleme, sonucu içine alacak bir variable(property)
    //4.1- filter kelimesi apex methodunun parametre adı olmalıdır. 
    //4.2- filterworld un başına dinamik hale getirmek için $ işareti konur. 
    //5- Classımızı VsCode üzerinden oluşturalım.

    handleInput(event){ //10
        this.filterWorld = event.target.value

    }
    //b
    handleGetAccount(){
        getAccounts({filter: this.filterWorld }) // c- $ işareti ve '' lar yok. çünkü dinamik olayacak butona basılınca accountlar gelecek.
            .then((result) => { //d- wireın 3. bölümünü dağıtıyoruz
            this.accounts = result;
            this.error = undefined; // accountlar geldiyse hata boştur. Yani yoktur.

            })
            .catch((error) =>{
                this.error = error;
                this.accounts = undefined;
            }); //e- onclick i oluşturmak için HTML e gidelim.
    }

}