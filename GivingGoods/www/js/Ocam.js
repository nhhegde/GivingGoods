	var pictureSource;   // picture source
    var destinationType; // sets the format of returned value 
    document.addEventListener("deviceready",onDeviceReady,false);

    // Cordova is ready to be used!
    //
    function onDeviceReady() {
    	console.log("onDeviceReady has been called")
        
    }

    function onPhotoDataSuccess(imageData) {
      // Uncomment to view the base64 encoded image data
      // console.log(imageData);

      // Get image handle
      //
      var photoButton = document.getElementById('photoButton');

      // Unhide image elements
      //
      photoButton.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      photoButton.src = "data:image/jpeg;base64," + imageData;
    }

    // Called when a photo is successfully retrieved
    //
    function onPhotoURISuccess(imageURI) {
      // Uncomment to view the image file URI 
      // console.log(imageURI);

      // Get image handle
      //
      var largeImage = document.getElementById('largeImage');

      // Unhide image elements
      //
      largeImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      largeImage.src = imageURI;
    }

    // A button will call this function
    //
    function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      cameraPic.src = "images/list1.jpg";
      
      
      var options = { quality: 50, 
      					destinationType: Camera.DestinationType.DATA_URL,sourceType:
      					 Camera.PictureSource.SAVEDPHOTOALBUM};

 		navigator.camera.getPicture(onSuccess, onFail, options);
    //  $("#takePhotoButton").remove();
    //  navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
      //  destinationType: destinationType.DATA_URL });
      //jnavigator.camera.getPicture(uploadPhoto, null, {sourceType:1,  quality: 50});
    }


    function uploadPhoto(data) {
      cameraPic.src = "data:image/jpeg;base64," + data;
    }
    // A button will call this function
    //
    function capturePhotoEdit() {
      // Take picture using device camera, allow edit, and retrieve image as base64-encoded string  
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
        destinationType: destinationType.DATA_URL });
    }

    // A button will call this function
    //
    function getPhoto(source) {
      // Retrieve image file location from specified source
      pictureSource=navigator.camera.PictureSourceType;
    	destinationType=navigator.camera.DestinationType;
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50, destinationType: Camera.DestinationType.FILE_URI }); 


    }

    // Called if something bad happens.
    // 
    function onSuccess(imageData) {

    	var cameraPic = document.getElementByID("cameraPic");
 	   cameraPic.src = imageData;
	}

	function onFail(message) {
    	alert('Failed because: ' + message);
	}
