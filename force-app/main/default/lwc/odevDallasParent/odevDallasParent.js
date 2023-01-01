import { LightningElement } from 'lwc';

export default class OdevDallasParent extends LightningElement {
    eventName;

    handleClick(event){
this.eventName='City entered:' +  event.detail}
}