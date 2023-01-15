import { LightningElement, wire, api } from 'lwc';
import getRelatedContacts from '@salesforce/apex/GetAccountContacts.getRelatedContacts';
import { NavigationMixin } from 'lightning/navigation';

export default class ChildContact extends NavigationMixin(LightningElement) {

    @api accId;
    relatedContacts;

    @wire(getRelatedContacts, {
        childAccId: '$accId'
    }) relatedContacts;

    navigateToViewContactPage(event) {
        var recId = event.target.name
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recId,
                objectApiName: 'Contact', // objectApiName is optional
                actionName: 'view'
            }
        });
    }
}