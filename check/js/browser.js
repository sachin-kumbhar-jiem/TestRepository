function BrowserInfo(){

	this.baseBrowser = "";
	this.browser = "";
	this.version = 0;

	var agt=navigator.userAgent.toLowerCase();

	var BASE_BROWSER_LIST = {
		'ie' : 'Internet Explorer',
		'chrome' : 'Google Chrome',
		'safari' : "Safari",
		'firefox' : "Firefox",
		'opera' : "Opera",
		'lunascape' : "Lunascape",
		'netscape' : "Netscape",
		'sleipnir' : "Sleipnir"
	};

	var BROWSER_LIST = {
		'ie3' : 'Internet Explorer 3',
		'ie4' : 'Internet Explorer 4',
		'ie5' : 'Internet Explorer 5',
		'ie55' : 'Internet Explorer 5.5',
		'ie6' : 'Internet Explorer 6',
		'ie7' : 'Internet Explorer 7',
		'ie8' : 'Internet Explorer 8',
		'ie9' : 'Internet Explorer 9',
		'ie10' : 'Internet Explorer 10',
		'chrome10' : 'Google Chrome 10',
		'chrome11' : 'Google Chrome 11',
		'chrome12' : 'Google Chrome 12',
		'chrome13' : 'Google Chrome 13',
		'chrome14' : 'Google Chrome 14',
		'chrome15' : 'Google Chrome 15',
		'chrome16' : 'Google Chrome 16',
		'chrome17' : 'Google Chrome 17',
		'chrome18' : 'Google Chrome 18',
		'chrome19' : 'Google Chrome 19',
		'chrome20' : 'Google Chrome 20',
		'chrome21' : 'Google Chrome 21',
		'chrome22' : 'Google Chrome 22',
		'chrome23' : 'Google Chrome 23',
		'chrome24' : 'Google Chrome 24',
		'chrome25' : 'Google Chrome 25',
		'chrome26' : 'Google Chrome 26',
		'chrome27' : 'Google Chrome 27',
		'safari4' : 'Safari 4',
		'safari5' : 'Safari 5',
		'safari51' : 'Safari 5.1',
		'safari6' : 'Safari 6',
		'safarim' : 'Mobile Safari'
	};

	this.checkBaseBrowser = function(){

		this.baseBrowser = "";
		
		if(agt.indexOf("chrome")!=-1){
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
		}

	};

	this.checkBrowser = function(){

		this.browser = "";

		if(this.baseBrowser == "ie"){
			if(agt.indexOf("msie 3")!=-1){
				this.browser = "ie3";
				this.version = 3;
			}else if(agt.indexOf("msie 4")!=-1){
				this.browser = "ie4";
				this.version = 4;
			}else if(agt.indexOf("msie 5.5")!=-1){
				this.browser = "ie5.5";
				this.version = 5.5;
			}else if(agt.indexOf("msie 5")!=-1){
				this.browser = "ie5";
				this.version = 5;
			}else if(agt.indexOf("msie 6")!=-1){
				this.browser = "ie6";
				this.version = 6;
			}else if(agt.indexOf("msie 7")!=-1){
				this.browser = "ie7";
				this.version = 7;
			}else if(agt.indexOf("msie 8")!=-1){
				this.browser = "ie8";
				this.version = 8;
			}else if(agt.indexOf("msie 9")!=-1){
				this.browser = "ie9";
				this.version = 9;
			}else if(agt.indexOf("msie 10")!=-1){
				this.browser = "ie10";
				this.version = 10;
			}
		}
		
		if(this.baseBrowser == "chrome"){
			var verstr = "";
			var idx = agt.indexOf("chrome/");
			if(idx!=-1){
				var idx2 = agt.indexOf(".", idx);
				if(idx2!=-1){
					verstr = agt.substring(idx + "chrome/".length, idx2);
				}
			}
			var cKey = "chrome" + verstr;
			for(br in BROWSER_LIST){
				if(br == cKey){
					this.browser = cKey;
					this.version = parseFloat(verstr);
				}
			}
		}
		
		if(this.baseBrowser == "safari"){
			
			if(agt.indexOf("mobile safari")!=-1){
				// android, blackberry, symbian
				this.browser = "safarim";
			}else if(agt.indexOf("mobile")!=-1){
				// ipod ipad iphone
				
				this.browser = "safarim";
				
			}else if(agt.indexOf("version/")!=-1){
				var idx = agt.indexOf("version/");
				var idx2 = agt.indexOf(" ", idx);
				if(idx2!=-1){
					version = agt.substring(idx + "version/".length, idx2);
				}
				if(version.indexOf("3")==0){
					this.browser="safari3";
					this.version = 3;
				}else if(version.indexOf("4")==0){
					this.browser="safari4";
					this.version = 4;
				}else if(version.indexOf("5.1")==0){
					this.browser="safari51";
					this.version = 5.1;
				}else if(version.indexOf("5")==0){
					this.browser="safari5";
					this.version = 5;
				}else if(version.indexOf("6")==0){
					this.browser="safari6";
					this.version = 6;
				}
			}else{
				//version不明

			}
		}

	};
	
	this.getBaseBrowserName = function(){
		var browserName = BASE_BROWSER_LIST[this.baseBrowser];
		if(browserName){
			return browserName;
		}else{
			return "不明";
		}
	};
	
	this.getBrowserName = function(){
		var browserName = BROWSER_LIST[this.browser];
		if(browserName){
			return browserName;
		}else{
			if(this.baseBrowser != ""){
				return this.getBaseBrowserName();
			}else{
				return "不明";
			}
		}
	};
	this.checkBaseBrowser();
	this.checkBrowser();
	
	//for debug
	this.setAgt = function(value){
		agt = value.toLowerCase();
	};
}