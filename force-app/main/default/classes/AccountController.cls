public with sharing class AccountController {
    
//6 otomatik olusan methodu silin
//7 wire decarator kullnblmek için @AuraEnabled(cacheable=true) method basına yazlmaldr
@AuraEnabled (cacheable=false)
public static List<Account> getAccounts(String filter){ //8 parametre olarak js de belrledgm filter yazlmaldr

    String keyName= '%' + filter + '%'; //wildcards (joker karakterler)kullandk %aramakelimesi%
    List<Account> accountList=[SELECT Id, Name, Phone FROM Account WHERE Name LIKE:keyName WITH SECURITY_ENFORCED];

        return accountList;
        //9 developer console da test ettk

}
}