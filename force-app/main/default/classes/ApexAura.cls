public with sharing class ApexAura {
    @AuraEnabled(cacheable=true)
    public static String getApexMessage(){
        return 'Bu mesaj Apex den gelmektedir';
    }
}