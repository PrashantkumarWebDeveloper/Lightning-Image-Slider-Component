({
    doInit : function(component, event, helper){
         //setting global id
        var g_id = component.getGlobalId();
        var myGlobalClass ='_'+ g_id.replace(/:/g,'_').replace(/;/g,'_')+'specialClass';
        component.set('v.myGlobalClass', myGlobalClass);
        
    	helper.handleAnimTypeChange(component);
        
        var defaultDirection = component.get('v.defaultDirection');
        var direction = component.get('v.'+defaultDirection);
        
        var current = component.get("v.current");
        var duration = component.get('v.duration');
        var autoMove = component.get('v.autoMove');
        
        helper.handleImageArrayChange(component);
        if(autoMove)
        {
            setTimeout(function(){
                if(current == 0) {
                    helper.moveTo(component, 1, direction);
                }
            }, duration);
        }
        
        
    },
	moveToPosition : function(component, event, helper) {
        var clickedIndex = +(event.target.id);
        var current = component.get("v.current");
        
        var prev = component.get('v.prev');
        var next = component.get('v.next');
        
        if(clickedIndex == current) {
            //do nothing
        }
        else if(clickedIndex < current) {
             helper.moveTo(component, clickedIndex, prev);
        }
        else {
            helper.moveTo(component, clickedIndex, next);
        }
       
	},
    moveToPrev : function(component, event, helper) {
       var current = component.get("v.current");
       var circular = component.get("v.circular");
       var prev = component.get('v.prev');
       
       if(current == 0) {
           if(circular == "true") {
               var arrayLength = component.get('v.imageArraySupport').length;
               helper.moveTo(component, arrayLength - 1, prev);
           }
       }
       else {
         	helper.moveTo(component, current - 1, prev);   
        }
	},
    moveToNext : function(component, event, helper) {
       var arrayLength = component.get('v.imageArraySupport').length;
       var current = component.get("v.current");
       var circular = component.get("v.circular");
       var next = component.get('v.next');
        
       if(current == (arrayLength - 1)) {
           if(circular == "true") {
               var arrayLength = component.get('v.imageArraySupport').length;
               helper.moveTo(component, 0, next);
           }
       }
       else {
         	helper.moveTo(component, current + 1, next);   
        }
	}
    
})
