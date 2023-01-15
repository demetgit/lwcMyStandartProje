import { LightningElement, wire, api } from 'lwc';
import getChildAccounts from '@salesforce/apex/GetAccountContacts.getChildAccounts';
import { NavigationMixin } from 'lightning/navigation';

export default class ChildAccount extends NavigationMixin(LightningElement) {

    @api recordId;
    childAccounts;

    @wire(getChildAccounts, {
        parentAccId: '$recordId'
    }) childAccounts;

    navigateToViewAccountPage(event) {
        var recId = event.target.name
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recId,
                objectApiName: 'Account', // objectApiName is optional
                actionName: 'view'
            }
        });
    }
}