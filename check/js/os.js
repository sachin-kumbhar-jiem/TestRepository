function OsInfo(){

	this.baseOs = "";
	this.os = "";
	this.version = 0;

	var agt=navigator.userAgent.toLowerCase();

	var BASE_OS_LIST = {
		'win' : 'Windows',
		'mac' : 'Macintosh',
		'ipod' : "iPod",
		'ipad' : "iPad",
		'iphone' : "iPhone",
		'android' : "Android",
		'blackberry' : "BlackBerry",
		'symbian' : "Symbian"
	};

	var OS_LIST = {
		'win_phone' : "Windows Phone",
		'win_95' : "Windows 95",
		'win_98' : "Windows 98",
		'win_ME' : "Windows ME",
		'win_NT4' : "Windows NT4.0",
		'win_2000' : "Windows 2000",
		'win_XP' : "Windows XP",
		'win_S2003' : "Windows Server 2003/XP x64",
		'win_Vista' : "Windows Vista",
		'win_7' : "Windows 7",
		'win_8' : "Windows 8",
		'win_81' : "Windows 8.1",
		'win_NT10' : "Windows 10.0",
		'mac_x' : "Mac OS X",
		'iOS2' : "iOS2",
		'iOS3' : "iOS3",
		'iOS4' : "iOS4",
		'iOS5' : "iOS5",
		'iOS6' : "iOS6"
	};

	this.checkbaseOs = function(){

		this.baseOs = "";
		
		if((agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) ){
			this.baseOs = "win";
		}else if(agt.indexOf("mac")!=-1){
			if(agt.indexOf("ipad")!=-1){
				this.baseOs = "ipad";
			}else if(agt.indexOf("ipod")!=-1){
				this.baseOs = "ipod";	
			}else if(agt.indexOf("iphone")!=-1){
				this.baseOs = "iphone";		
			}else{
				this.baseOs = "mac";
			}
		}else if(agt.indexOf("android")!=-1){
			this.baseOs = "android";
		}else if(agt.indexOf("blackberry")!=-1){
			this.baseOs = "blackberry";
		}else if(agt.indexOf("symbian")!=-1){
			this.baseOs = "symbian";
		}
	};

	this.checkOS = function(){
		
		this.os = "";

		if(this.baseOs == "win"){
			if(agt.indexOf("windows phone")!=-1){
				this.os = "windows phone";
			}else if((agt.indexOf("win95")!=-1) || (agt.indexOf("windows 95")!=-1)){
				this.os = "win_95";
				this.version = 3;
			}else if((agt.indexOf("win98")!=-1) || (agt.indexOf("windows 98")!=-1)){
				if(agt.indexOf("9x 4.90")!=-1){
					this.os = "win_ME";
					this.version = 3;
				}else{
					this.os = "win_98";
					this.version = 3;
				}
			}else if((agt.indexOf("winnt")!=-1) || (agt.indexOf("windows nt")!=-1)){
				if(agt.indexOf("nt 4")!=-1){
					this.os = "win_NT4";
					this.version = 4;
				}else if(agt.indexOf("nt 5.0")!=-1){
					this.os = "win_2000";
					this.version = 5;
				}else if(agt.indexOf("nt 5.1")!=-1){
					this.os = "win_XP";
					this.version = 5.1;
				}else if(agt.indexOf("nt 5.2")!=-1){
					this.os = "win_S2003";
					this.version = 5.2;
				}else if(agt.indexOf("nt 6.0")!=-1){
					this.os = "win_Vista";
					this.version = 6;
				}else if(agt.indexOf("nt 6.1")!=-1){
					this.os = "win_7";
					this.version = 6.1;
				}else if(agt.indexOf("nt 6.2")!=-1){
					this.os = "win_8";
					this.version = 6.2;
				}else if(agt.indexOf("nt 6.3")!=-1){
					this.os = "win_81";
					this.version = 6.3;
				}else if(agt.indexOf("nt 10.0")!=-1){
					this.os = "win_NT10";
					this.version = 10;
                                        
				}
			}

		}
		
		if(this.baseOs == "mac"){
			if((agt.indexOf("macintosh")!=-1) && (agt.indexOf("mac os x")!=-1)){
				this.os = "mac_x";
			}

		}
		
		if(this.baseOs == "ipod" || this.baseOs == "iphone"){
			if(agt.indexOf("iphone os 2")!=-1){
				this.os = "iOS2";
			}else if(agt.indexOf("iphone os 3")!=-1){
				this.os = "iOS3";
			}else if(agt.indexOf("iphone os 4")!=-1){
				this.os = "iOS4";
			}else if(agt.indexOf("iphone os 5")!=-1){
				this.os = "iOS5";
			}
		}

		if(this.baseOs == "ipad"){
			if(agt.indexOf("cpu os 3")!=-1){
				this.os = "iOS3";
			}else if(agt.indexOf("cpu os 4")!=-1){
				this.os = "iOS4";
			}else if(agt.indexOf("cpu os 5")!=-1){
				this.os = "iOS5";
			}
		}
	};

	this.getbaseOsName = function(){
		var osName = BASE_OS_LIST[this.baseOs];
		if(osName){
			return osName;
		}else{
			return "荳肴�";
		}
	};
	
	this.getOsName = function(){
		var osName = OS_LIST[this.os];
		if(osName){
			return osName;
		}else{
			return "荳肴�";
		}
	};

	this.checkbaseOs();
	this.checkOS();

	//for debug
	this.setAgt = function(value){
		agt = value.toLowerCase();
	};
}