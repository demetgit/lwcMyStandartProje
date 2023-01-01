import { LightningElement } from 'lwc';

export default class OdevDallasChild extends LightningElement {

    cityName;
    handleCityChange(event){
    this.cityName=event.target.value;
    this.dispatchEvent(
    new CustomEvent('getcityvalue', { detail: this.cityName } 
    ));

}
}
