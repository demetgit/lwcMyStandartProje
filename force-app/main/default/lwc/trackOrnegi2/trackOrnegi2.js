import { LightningElement, track } from 'lwc';

export default class TrackOrnegi2 extends LightningElement {
    
    degerler = ''; //2- girilen sayyıları yerleştireceğimiz boş alan açtık.
    @track lstValues = []; //3- girilen sayıları aktaracağımız dizi açtık. UNUTMA: Track leri unutma.

    // 4- onchangeHandler ı oluşturalım.
    onchangeHandler(event){ // event haricinde başka değişken ismi de verilebilir
        this.degerler = event.target.value;

    }

    //5- ekleHandler, sayı girilip buytona tıklanınca listeye girilen sayıyı push edecek.

    ekleHandler(event){//Parantez içine event te yazılabilir.
        this.lstValues.push( this.degerler);
    }


}