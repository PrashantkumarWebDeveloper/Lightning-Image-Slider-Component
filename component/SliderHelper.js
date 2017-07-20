({
    intervalRef: null,
    initializationHelper : function(component) {
        	var helper = this;
        	helper.handleAnimTypeChange(component);
            var defaultDirection = component.get('v.defaultDirection');
        	
            var direction = component.get('v.'+defaultDirection);
        	
            component.set("v.current", 0);
        	var current = component.get("v.current");
            var duration = component.get('v.duration');
            var autoMove = component.get('v.autoMove');
            
            helper.handleImageArrayChange(component);
        	
        	if(helper.intervalRef)
            	clearInterval(helper.intervalRef);
            
        	if(autoMove)
            {
                setTimeout(function(){
                    if(current == 0) {
                        helper.moveTo(component, 1, direction);
                    }
                }, duration);
            }
            

    },
	moveTo : function(component, moveToPos, direction) {
        var helper = this;
		var autoMove = component.get('v.autoMove');
        var imageArraySupport = component.get('v.imageArraySupport');
        var current = component.get('v.current');
        
        if(helper.intervalRef)
            clearInterval(helper.intervalRef);
        
      	helper.doMoveRelatedTask(component, imageArraySupport, current, moveToPos, direction);
        
        if(autoMove) {
            var duration = component.get('v.duration');
            var defaultDirection = component.get('v.defaultDirection');
        	var direction = component.get('v.'+defaultDirection);
            
            helper.intervalRef = setInterval(function(){
                if(moveToPos == imageArraySupport.length) {
                    var circular = component.get('v.circular');
                    if(circular)
                        moveToPos = 0;
                    else
                       clearInterval(helper.intervalRef); 
                }
                helper.doMoveRelatedTask(component, imageArraySupport, current, moveToPos, direction);
                current = moveToPos;
                moveToPos++;
            }, duration);
        }
       
	},
    doMoveRelatedTask : function(component, imageArraySupport, current, moveToPos, direction){
       
        imageArraySupport[current].active = false;
        imageArraySupport[moveToPos].active = true;
        
        for(var i in imageArraySupport){
            imageArraySupport[i].direction = 'none';
        }
        imageArraySupport[current].direction = direction+'-end';
        imageArraySupport[moveToPos].direction = direction;
        component.set('v.current', moveToPos);
        component.set("v.imageArraySupport", imageArraySupport);
    },
    handleImageArrayChange : function(component){
    	var imageArray = component.get('v.imageArray');
        var imageArraySupport = component.get('v.imageArraySupport');
        
        var showCaption = component.get('v.showCaption');
       
        for(var i in imageArray)
        {	var obj = {
            	src: imageArray[i].src,
            	direction: 'none',
            	active: false,
            	caption: ''
        	}
        	if(showCaption)
            	obj.caption = imageArray[i].caption;
            imageArraySupport[i] = obj;
        }
        imageArraySupport[0].direction = 'initial';
        imageArraySupport[0].active = true;
        component.set('v.imageArraySupport', imageArraySupport);
        
	},
    handleAnimTypeChange : function(component){
        var animType = component.get('v.animType');
        var prev,next;
        if(animType == "horizontal-slide") {
            prev = "right";
            next = "left" ;
        }
        else if(animType == "vertical-slide") {
            prev = "top";
            next = "bottom" ;
        }
        else if(animType == "fade") {
            prev = "fade";
            next = "fade";
        }
        else if(animType == "popup")
        {
            prev = "popup";
            next = "popup";
        }
        else if(animType == "merge")
        {
            prev = "merge";
            next = "merge";
        }
        component.set('v.prev', prev);
        component.set('v.next', next);
    }
})
