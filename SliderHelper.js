({
    intervalRef: null,
	moveTo : function(component, moveToPos, direction) {
        var objRef = this;
		var autoMove = component.get('v.autoMove');
        console.log('autoMove: ',autoMove);
        var imageArraySupport = component.get('v.imageArraySupport');
        var current = component.get('v.current');
        
        if(objRef.intervalRef)
            clearInterval(objRef.intervalRef);
        
      	objRef.doMoveRelatedTask(component, imageArraySupport, current, moveToPos, direction);
        
        if(autoMove == "true") {
            var duration = component.get('v.duration');
            var defaultDirection = component.get('v.defaultDirection');
        	var direction = component.get('v.'+defaultDirection);
            
            objRef.intervalRef = setInterval(function(){
                console.log('duration: ', duration);
                if(moveToPos == imageArraySupport.length) {
                    var circular = component.get('v.circular');
                    if(circular == "true")
                        moveToPos = 0;
                    else
                       clearInterval(objRef.intervalRef); 
                }
                objRef.doMoveRelatedTask(component, imageArraySupport, current, moveToPos, direction);
                current = moveToPos;
                moveToPos++;
            }, duration);
        }
       
	},
    doMoveRelatedTask : function(component, imageArraySupport, current, moveToPos, direction){
       
        imageArraySupport[current].active = "false";
        imageArraySupport[moveToPos].active = "true";
        
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
            	active: 'false',
            	caption: ''
        	}
        	if(showCaption == "true")
                obj.caption = imageArray[i].caption;
            imageArraySupport[i] = obj;
        }
        imageArraySupport[0].direction = 'initial';
        imageArraySupport[0].active = 'true';
        component.set('v.imageArraySupport', imageArraySupport);
        console.log('imageArraySupport: ',imageArraySupport);
	},
    handleAnimTypeChange : function(component){
        var animType = component.get('v.animType');
        var defaultDirection = component.get('v.defaultDirection');
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
