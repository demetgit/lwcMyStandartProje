({
    onclickHandler : function(component, event, helper) {
        var eventValue = component.getEvent("myEvent"); //3-getEvent icine,register olunurken girilen variable yazilir
        eventValue.fire(); //4- event gonderildi.
    }
})