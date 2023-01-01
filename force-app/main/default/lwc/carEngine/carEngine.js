import { api, LightningElement } from 'lwc';

export default class CarEngine extends LightningElement {
   @api motorModeli = "3.0 Turbo";  // 2- bunu HTML den dinamik olarak çağıralım.
    /* Api iki yere yazılmalı biri property nin önüne, diğeri ilk satırdaki import un içine */
}   /* @api yazıldıktan sonra enter tuşuna basılırsa otomatiik olarak import bölümüne api eklenir */
