<aura:application extends="force:slds">

    <div class="slds-grid slds-wrap">
        <div class="slds-size--1-of-1 slds-medium-size_1-of-2 slds-p-around_large">
            <c:Slider height="{
                              'large' : '600px',
                              'medium': '400px',
                              'small' : '300px'
                              }" 
                      duration="3000" 
                      showCaption="true" 
                      circular="true" 
                      autoMove="true" 
                      animType="horizontal-slide" 
                      navigation="horizontal" 
                      imageArray="[
                                  {src: '/resource/images/car1.jpg', caption:'caption1'},
                                  {src: '/resource/images/car2.jpg', caption:'caption2'},
                                  {src: '/resource/images/car3.jpg', caption:'caption3'},
                                  {src: '/resource/images/car4.jpg', caption:'caption4'}
                                  ]"/>
        </div>
    </div>

</aura:application>