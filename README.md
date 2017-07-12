# Lightning-Image-Slider-Component

Check out the demo here: [Demo](https://prashantmeandev-developer-edition.ap2.force.com/)

## Available options:
### Name: imageArray ### 

 **Type:** sObject[]

 **Required:** Yes

 **Default Value:** Not Available

 **Description:** An array containing object with properties 'src'(Hyperlink of the images) and 'caption'(Caption for the image). 
```html5
Example:
[
  {src: 'path/to/image1', caption: 'First Image'}, 
  {src: 'path/to/image2', caption: 'Second Image'}
]
```

### Name: duration ###
 **Type:** Integer

 **Required:** No

 **Default Value:** 3000

 **Description:** Duration in milliseconds.

### Name: animType ### 
 **Type:** String

 **Required:** No

 **Default Value:** 'horizontal-slide'

 **Description:** Type of animation for slider. 

**Possible values are:** 'horizontal-slide', 'vertical-slide', 'fade', 'popup', 'merge'.

### Name: showCaption ### 
 **Type:** Boolean

 **Required:** No

 **Default Value:** true

 **Description:** Controls caption visibility.

### Name: height ### 
 **Type:** sObject

 **Required:** No

 **Default Value:** { 'large' : '600px', 'medium': '400px', 'small' : '300px' }

 **Description:** Height of slider in pixels for large device(min-width:992px), medium device(min-width: 768px) and (max-width: 992px), small dvices(max-width: 768px).

### Name: autoMove ### 
 **Type:** Boolean

 **Required:** No

 **Default Value:** true

 **Description:** Controls auto sliding after provided duration.
### Name: circular ### 
 **Type:** Boolean

 **Required:** No

 **Default Value:** true

 **Description:** Controls whether slides will go to the first slide after reaching the end.

### Name: circular ### 
 **Type:** Boolean

 **Required:** No

 **Default Value:** true

 **Description:** Controls whether slides will go to the first slide after reaching the end or not.

### Name: defaultDirection ### 
 **Type:** String

 **Required:** No

 **Default Value:** 'next'

 **Description:** Controls whether slides will move in the direction of next button or previous button during auto move.

 **Possible values are:** 'next', 'prev'.
### Name: navigation ### 
**Type:** String

 **Required:** No

 **Default Value:** 'horizontal'

 **Description:** Controls whether navigation button should be horizontal or vertical.

 **Possible values are:** 'horizontal', 'vertical'.

