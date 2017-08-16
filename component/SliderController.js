({
    doInit : function(component, event, helper){
        //setting global id
        var g_id = component.getGlobalId();
        var myGlobalClass ='_'+ g_id.replace(/:/g,'_').replace(/;/g,'_')+'specialClass';
        component.set('v.myGlobalClass', myGlobalClass);
        
        if(component.get('v.imageArray').length == 0){
            console.log('Image Array has length 0, i.e. No limage links found!');
        }
        else{
            helper.initializationHelper(component);
        }
        
    },
    moveToPosition : function(component, event, helper) {
        if(component.get('v.imageArray').length == 0){
            console.log('Image Array has length 0, i.e. No limage links found!');
        }
        else{
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
        }
        
        
    },
    moveToPrev : function(component, event, helper) {
        if(component.get('v.imageArray').length == 0){
            console.log('Image Array has length 0, i.e. No limage links found!');
        }
        else{
            var current = component.get("v.current");
            var circular = component.get("v.circular");
            var prev = component.get('v.prev');
            
            if(current == 0) {
                if(circular == true) {
                    var arrayLength = component.get('v.imageArraySupport').length;
                    helper.moveTo(component, arrayLength - 1, prev);
                }
            }
            else {
                helper.moveTo(component, current - 1, prev);   
            }
        }
        
    },
    moveToNext : function(component, event, helper) {
        if(component.get('v.imageArray').length == 0){
            console.log('Image Array has length 0, i.e. No limage links found!');
        }
        else{
            
            var arrayLength = component.get('v.imageArraySupport').length;
            var current = component.get("v.current");
            var circular = component.get("v.circular");
            var next = component.get('v.next');
            
            if(current == (arrayLength - 1)) {
                if(circular == true) {
                    var arrayLength = component.get('v.imageArraySupport').length;
                    helper.moveTo(component, 0, next);
                }
            }
            else {
                helper.moveTo(component, current + 1, next);   
            }
        }
        
    },
    handleChange : function(component, event, helper) {
        if(component.get('v.imageArray').length == 0){
            console.log('Image Array has length 0, i.e. No limage links found!');
        }
        else{
            helper.initializationHelper(component);
        }
        
    },
    touchstart : function(component, event, helper) {
        helper.swipeObject.start.x = event.touches[0].pageX;
        helper.swipeObject.start.y = event.touches[0].pageY;
    },
    touchend : function(component, event, helper) {
        var obj = helper.swipeObject;
        var navigation = component.get('v.navigation');
        
        if(navigation == 'horizontal'){
            if((obj.end.x - obj.start.x)>0){
                component.movePrev(); 
            }
            else if((obj.end.x - obj.start.x)<0){
                component.moveNext();
            }
        }
        if(navigation == 'vertical'){
            if((obj.end.y - obj.start.y)>0){
                component.moveNext();
            }
            else if((obj.end.y - obj.start.y)<0){
                component.movePrev();
            }
        }
        
        helper.swipeObject.start.x = null;
        helper.swipeObject.start.y = null;
        helper.swipeObject.end.x = null;
        helper.swipeObject.end.y = null;
    },
    touchmove : function(component, event, helper) {
        helper.swipeObject.end.x = event.touches[0].pageX;
        helper.swipeObject.end.y = event.touches[0].pageY;
    },
    touchcancel : function(component, event, helper) {
        helper.swipeObject.start.x = null;
        helper.swipeObject.start.y = null;
        helper.swipeObject.end.x = null;
        helper.swipeObject.end.y = null;
        
    }
    
})
