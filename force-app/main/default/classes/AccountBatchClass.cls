public class AccountBatchClass implements Database.Batchable<sObject>{
    
    public Database.QueryLocator start(Database.BatchableContext bc){
        
       return Database.getQueryLocator('SELECT Id,Name,Number_of_Contacts__c,(SELECT Id FROM Contacts) FROM Account') ;
        
    }
    
    public void execute (Database.BatchableContext bc,List<Account> accList){
        for(Account w:accList){
            if(w.Contacts != null){
                w.Number_of_Contacts__c=w.Contacts.size();
                System.debug('Account Name:'+ w.Name);
            }
        }
        update accList;
    }
    
    
    public void finish (Database.BatchableContext bc){
        AsyncApexJob myJob=[SELECT Id,Status,NumberofErrors,TotalJobItems FROM AsyncApexJob WHERE Id=:bc.getJobId()];
    }
    
    
}