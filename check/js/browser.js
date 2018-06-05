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
		'sleipnir' : "Sleipnir",
		'microsoftedge' : "Microsoft Edge"
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
		'ie11' : 'Internet Explorer 11',
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
		'chrome28' : 'Google Chrome 28',
		'chrome29' : 'Google Chrome 29',
		'chrome30' : 'Google Chrome 30',
		'chrome31' : 'Google Chrome 31',
		'chrome32' : 'Google Chrome 32',
		'chrome33' : 'Google Chrome 33',
		'chrome34' : 'Google Chrome 34',
		'chrome35' : 'Google Chrome 35',
		'chrome36' : 'Google Chrome 36',
		'chrome37' : 'Google Chrome 37',
		'chrome38' : 'Google Chrome 38',
		'chrome39' : 'Google Chrome 39',
		'chrome40' : 'Google Chrome 40',
		'chrome41' : 'Google Chrome 41',
		'chrome42' : 'Google Chrome 42',
		'chrome43' : 'Google Chrome 43',
		'chrome44' : 'Google Chrome 44',
		'chrome45' : 'Google Chrome 45',
		'chrome46' : 'Google Chrome 46',
		'chrome47' : 'Google Chrome 47',
		'chrome48' : 'Google Chrome 48',
		'chrome49' : 'Google Chrome 49',
		'chrome50' : 'Google Chrome 50',
		'chrome51' : 'Google Chrome 51',
		'chrome52' : 'Google Chrome 52',
		'chrome53' : 'Google Chrome 53',
		'chrome54' : 'Google Chrome 54',
		'chrome55' : 'Google Chrome 55',
		'chrome56' : 'Google Chrome 56',
		'chrome57' : 'Google Chrome 57',
		'chrome58' : 'Google Chrome 58',
		'chrome59' : 'Google Chrome 59',
		'chrome60' : 'Google Chrome 60',
		'safari4' : 'Safari 4',
		'safari5' : 'Safari 5',
		'safari51' : 'Safari 5.1',
		'safari6' : 'Safari 6',
        'safari7' : 'Safari 7',
        'safari8' : 'Safari 8',
        'safari9' : 'Safari 9',
        'safari10' : 'Safari 10',
        'safari11' : 'Safari 11',
		'safarim' : 'Mobile Safari',
		'microsoftedge' : "Microsoft Edge"
	};

	this.checkBaseBrowser = function(){

		this.baseBrowser = "";
		
		if(agt.indexOf("edge")!=-1){
			this.baseBrowser = "microsoftedge";
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
			}else if(agt.indexOf("trident/7.0")!=-1){
				this.browser = "ie11";
				this.version = 11;
			}
				
		}
		
		if (agt.indexOf("edge") != -1) {
			this.browser = "microsoftedge";
		}

		if (agt.indexOf("chrome") != -1) {
			this.browser = "Google Chrome";
		}
		
		/*if(this.baseBrowser == "chrome"){
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
		}*/
		
		
		
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
				}else if(version.indexOf("7")==0){
                    this.browser="safari7";
                    this.version = 7;
                }else if(version.indexOf("8")==0){
                    this.browser="safari8";
                    this.version = 8;
                }else if(version.indexOf("9")==0){
                    this.browser="safari9";
                    this.version = 9;
                }else if(version.indexOf("10")==0){
                    this.browser="safari10";
                    this.version = 10;
                }else if(version.indexOf("11")==0){
                    this.browser="safari11";
                    this.version = 11;
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
