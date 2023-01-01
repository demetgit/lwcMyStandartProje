import { LightningElement } from 'lwc'; /* 2 */

export default class Child1 extends LightningElement {
    
    handleClick (){
const myEvent = new CustomEvent('clicked');
this.dispatchEvent (myEvent); //dispatchEvent, olustdgmuz custom event olan clicked i gorunur ve kullanlblr yapar
    }
}