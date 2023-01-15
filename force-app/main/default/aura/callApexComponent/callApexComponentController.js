({
    getMessageHandler : function(component, event, helper) {

        let action = component.get("c.getApexMessage"); //get'in icine class'taki methodun ismi yazilir.

        action.setCallback(this,function(response){
            let state = response.getState(); // gelen cevabi yerel bir degiskene atadik
            if(state==='SUCCESS'){ //SUCCESS gelen cevabin icinde vardir.
                component.set("v.message",response.getReturnValue());
            }else{
                console.log("Islem basarisiz");
            }
        });

    }
})