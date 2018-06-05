if( !OsInfo )throw('ERROR!');
if( !BrowserInfo )throw('ERROR!');
if( !CASECPlayer )throw('ERROR!');
if( !CookieInfo )throw('ERROR!');

function CasecResult(){
	this.name = "";
	this.result = false;
	this.resultMessage = function(){
		if(this.result){
			return "OK";
		}else{
			return "NG";
		}
	};
}


function CaseckBrowserResult(){
	this.result = false;
	this.resultbrowser = function(){
		if(this.result){
			return "▲";
		}
	}
}

function CaseckSafariBrowserResult(){
	this.result = false;
	this.resultbrowser = function(){
		if(this.result){
			return "▲";
		}
	}
}

function CaseckOsResult(){
	this.result = false;
	this.resultos = function(){
		if(this.result){
			return "▲";
		}
	}
}

function CasecOsCheck(){
	this.resultList = new Array();
	this.osInfo = new OsInfo();
	this.resultList["os"] = new CaseckOsResult();
	this.resultList["os"].name = this.osInfo.getOsName();
	this.resultList["os"].result = false;	
	
	this.browserInfo = new BrowserInfo();
	this.resultList["browser"] = new CaseckBrowserResult();
	this.resultList["browser"].name = this.browserInfo.getBrowserName();
	this.resultList["browser"].result = false;
	
	
		if ((this.osInfo.baseOs=="win" && this.osInfo.version == 6)){
				  this.resultList["os"].result = true;
		}
		/*if ((this.osInfo.baseOs=="win" && this.osInfo.version == 6.2)){
				  this.resultList["os"].result = true;
		}*/
		if ((this.osInfo.version == 6 && this.browserInfo.baseBrowser == "chrome")) {
            this.resultList["browser"].result = true;
            this.resultList["os"].result = true;
		}
	this.totalResult = true;
	for(var r in this.resultList){
		if(!this.resultList[r].result){
			this.totalResult = false;
		}
	}
}


function CasecSafariBrowserCheck(){
	
	var CASEC_OS_LIST = ['win_Vista','win_7','win_8','win_81','win_NT10','mac_x1013'];
	this.resultList = new Array();
	this.resultList["os"] = new CaseckSafariBrowserResult();
	this.resultList["browser"] = new CaseckSafariBrowserResult();
	this.osInfo = new OsInfo();
	this.resultList["os"].name = this.osInfo.getOsName();
	this.resultList["os"].result = false;
	for(var i = 0; i < CASEC_OS_LIST.length; i++){
		if(CASEC_OS_LIST[i] === this.osInfo.os){
			this.resultList["os"].result = true;
		}
	}
	
	this.browserInfo = new BrowserInfo();
	this.resultList["browser"].name = this.browserInfo.getBrowserName();
	this.resultList["browser"].result = false;
	if(this.resultList["os"].result && this.osInfo.baseOs=="mac"){
		if ((this.osInfo.version >= 10.09 && 
                  this.browserInfo.baseBrowser == "safari" && this.browserInfo.version == 11)) {
				  this.resultList["browser"].result = true;
				  this.resultList["os"].result = true;
		}
	}
	this.totalResult = true;
	for(var r in this.resultList){
		if(!this.resultList[r].result){
			this.totalResult = false;
		}
	}
}

function CasecBrowserCheck(){
	
	var CASEC_OS_LIST = ['win_Vista','win_7','win_8','win_81','win_NT10'];
	this.resultList = new Array();
	this.resultList["os"] = new CaseckBrowserResult();
	this.resultList["browser"] = new CaseckBrowserResult();
	this.osInfo = new OsInfo();
	this.resultList["os"].name = this.osInfo.getOsName();
	this.resultList["os"].result = false;
	for(var i = 0; i < CASEC_OS_LIST.length; i++){
		if(CASEC_OS_LIST[i] === this.osInfo.os){
			this.resultList["os"].result = true;
		}
	}
	
	this.browserInfo = new BrowserInfo();
	this.resultList["browser"].name = this.browserInfo.getBrowserName();
	this.resultList["browser"].result = false;
	if(this.resultList["os"].result && this.osInfo.baseOs=="win"){
		if ((this.osInfo.version == 10 && 
                  this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 9)) {
				  this.resultList["browser"].result = false;
		}
		else if ((this.osInfo.version == 6.3 && 
				  this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 9)) {
				  this.resultList["browser"].result = false;
		}
		else if ((this.osInfo.version == 6.1 && 
				  this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 9)) {
				  this.resultList["browser"].result = false;
		}
        else if ((this.osInfo.version == 6 && 
			      this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 7)) {
				  this.resultList["browser"].result = false;
		}
		//Commented for ticket no 1514
		
		/*else if ((this.osInfo.version == 6 && 
			      this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 8)) {
				  this.resultList["browser"].result = true;
		}*/
		
		/*Ticket no 1514*/
		else if ((this.osInfo.version == 6 && 
		          this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 9)) {
			  	  this.resultList["browser"].result = false;
		}
		else if ((this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 7)){
			      this.resultList["browser"].result = false;
		}
		
		
		//Commented for ticket no 1514
		/*else if ((this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 8)){
			    this.resultList["browser"].result = true;
		}*/
		else if ((this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 9)){
		    	this.resultList["browser"].result = false;
		}
		
		//Commented for ticket no 1514
		/*else if ((this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 10)){
			    this.resultList["browser"].result = true;
		}*/
	}
	this.totalResult = true;
	for(var r in this.resultList){
		if(!this.resultList[r].result){
			this.totalResult = false;
		}
	}
}

function CasecCheck(){

	var CASEC_OS_LIST = ['win_XP','win_Vista','win_7','win_8','win_81','win_NT10','mac_x108','mac_x109','mac_x1011','mac_x1012','mac_x1013'];

	this.resultList = new Array();
	this.resultList["os"] = new CasecResult();
	this.resultList["browser"] = new CasecResult();
	this.resultList["player"] = new CasecResult();
	this.resultList["javascript"] = new CasecResult();
	this.resultList["cookie"] = new CasecResult();

	this.resultList["javascript"].name = "利用可";
	this.resultList["javascript"].result = true;

	this.osInfo = new OsInfo();
	this.resultList["os"].name = this.osInfo.getOsName();
	this.resultList["os"].result = false;
	for(var i = 0; i < CASEC_OS_LIST.length; i++){
		if(CASEC_OS_LIST[i] === this.osInfo.os){
			this.resultList["os"].result = true;
		}
	}

	
	this.browserInfo = new BrowserInfo();
	this.resultList["browser"].name = this.browserInfo.getBrowserName();
	this.resultList["browser"].result = false;
	if(this.resultList["os"].result && this.osInfo.baseOs=="win"){
		if ((this.browserInfo.baseBrowser == "microsoftedge") || 
			(this.browserInfo.baseBrowser == "ie" && this.browserInfo.version >= 8) ||
			(this.browserInfo.baseBrowser == "chrome"/* && this.browserInfo.version >= 16*/)) {
				this.resultList["browser"].result = true;
		}
	}else if(this.resultList["os"].result && this.osInfo.baseOs=="mac"){
		if ((this.browserInfo.baseBrowser == "chrome" /*&&this.browserInfo.version >= 16*/) ||
			 (this.browserInfo.baseBrowser == "safari" && this.browserInfo.version >= 7)) {
				this.resultList["browser"].result = true;
		}
	}

	   if(this.osInfo.baseOs=="mac"){
				
		if(this.osInfo.version >= 10.09){
		  if ((this.browserInfo.baseBrowser == "chrome") ||
				  (this.browserInfo.baseBrowser == "safari" && this.browserInfo.version >= 7)) {
                                this.resultList["browser"].result = true;
				this.resultList["os"].result = true;
                  }
		}
		else{
			this.resultList["os"].result = false;
		}
	}
	
	/*Removed support for XP os -- 1514*/
	   
	if ((this.osInfo.version == 5.1 && this.browserInfo.baseBrowser == "chrome")) {
		this.resultList["os"].result = false; //XP+chrome
	}
	if ((this.osInfo.version == 5.1 && this.browserInfo.baseBrowser == "ie")) {
		this.resultList["os"].result = false; //XP+IE
		this.resultList["browser"].result = false;
	}
	
	/*Removed support for IE9 & IE10 for Win 7 OS -- 1514*/
	if ((this.osInfo.version == 6.1 && this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 9)) {
		  this.resultList["browser"].result = false;
	}
	if ((this.osInfo.version == 6.1 && this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 10)) {
		  this.resultList["browser"].result = false;
	}
	
	if ((this.osInfo.version == 6.2 && this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 10)) {
			  this.resultList["os"].result = false;
		  	  this.resultList["browser"].result = false;
	}
	if ((this.osInfo.version == 6.2 && this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 11)) {
		  this.resultList["os"].result = false;
	}
	if ((this.osInfo.version == 6.2 && this.browserInfo.baseBrowser == "chrome")) {
		  this.resultList["os"].result = false;
	}
	
	/*Removed support for IE8 on all os*/
	if ((this.browserInfo.baseBrowser == "ie" && this.browserInfo.version == 8)) {
		this.resultList["browser"].result = false;
	}
	
	this.player = new CASECPlayer();
	this.resultList["player"].name = this.player.getCasecPlayerName();
	this.resultList["player"].result = this.player.CASECcompliant;
	
	this.cookieInfo = new CookieInfo();
	if(this.cookieInfo.checkCookie()){
		this.resultList["cookie"].name = "利用可";
		this.resultList["cookie"].result = true;
	}else{
		this.resultList["cookie"].name = "利用不可";
		this.resultList["cookie"].result = false;
	}
	
	this.totalResult = true;
	for(var r in this.resultList){
		if(!this.resultList[r].result){
			this.totalResult = false;
		}
	}
}
