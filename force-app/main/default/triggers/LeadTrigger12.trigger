trigger LeadTrigger12 on Lead (before insert) {


    if(Trigger.isBefore && Trigger.isInsert){  for(Lead w : Trigger.new){
        if(w.Status=='Open - Not Contacted' 
           && (w.Rating=='Hot' 
               || w.Rating=='Warm' 
               || String.isBlank(w.Rating))){
     w.Rating = 'Cold';
            }
        }
    }
}