function BrowserInfo(){
	this.baseBrowser = "";
	this.result = false;
	this.resultMessage = function(){
		if(this.result){
			return "OK";
		}else{
			return "NG";
		}
	};
	var agt=navigator.userAgent.toLowerCase();
	
	this.checkBaseBrowser = function(){
		
		this.baseBrowser = "";		
		
		if(agt.indexOf("edge")!=-1){
			this.baseBrowser = "edge";
		}else if(agt.indexOf("chrome")!=-1){
			this.baseBrowser = "chrome";
		}else if(agt.indexOf("safari")!=-1){
			this.baseBrowser = "safari";
		}else if(agt.indexOf("firefox")!=-1){
			this.baseBrowser = "firefox";
		}else if(agt.indexOf("opera")!=-1){
			this.baseBrowser = "opera";
		}else if(agt.indexOf("lunascape")!=-1){
			this.baseBrowser = "lunascape";
		}else if(agt.indexOf("netscape")!=-1){
			this.baseBrowser = "netscape";
		}else if(agt.indexOf("sleipnir")!=-1){
			this.baseBrowser = "sleipnir";
		}else if(agt.indexOf("msie")!=-1){
			this.baseBrowser = "ie";
		}else if(agt.indexOf("trident")!=-1){
			this.baseBrowser = "ie";
		}

	};
	
	this.checkChromeBrowser = function(){			
		this.checkBaseBrowser();
		if(this.baseBrowser == "chrome"){
			this.result = true;
		}else {
			this.result = false;
		}
	};	
	
}

WebcamInfo = function (){
	this.key = "webcamcheck";
	this.okValue = "true";
	this.result=false;
	this.cameraElementId = "my_camera";
	
	this.resultMessage = function(){
		if(this.result){
			return "OK";
		}else{
			return "NG";
		}
	};
	
	this.init = function(){
		var self = this;
		Webcam.set({
			// live preview size
			width: 320,
			height: 240,
			
			// device capture size
			dest_width: 320,
			dest_height: 240,
			
			// final cropped size
			crop_width: 240,
			crop_height: 240,
			
			// format and quality
			image_format: 'jpeg',
			jpeg_quality: 90,
			
			force_flash: false
		});	
		Webcam.on( 'load', function() {
			// library is loaded			
		} );
		
		Webcam.on( 'live', function() {
			// camera is live, showing preview image
			console.log(this);
			self.result=true;
			self.webcamOnLive();
		} );
		
		Webcam.on( 'error', function(err) {
			// an error occurred (see 'err')
			console.log(err);
			self.result=false;
			self.webcamOnError(err);;
		} );
				
		Webcam.attach('#'+this.cameraElementId);
	}
	
	this.webcamOnLive=function(){
		console.log("inside function live old");
	}
	this.webcamOnError=function(err){
		console.log("inside function error old");
	}
	this.isWebCamEnabled = function(){
		return this.result;
	}
	
	this.checkWebCam = function(){	
		return this.isWebCamEnabled();
	}
	
	
}
