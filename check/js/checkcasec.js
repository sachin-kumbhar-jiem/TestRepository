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


function CasecCheck(){

	var CASEC_OS_LIST = ['win_XP','win_Vista','win_7','win_8','win_81','mac_x'];

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
		if ((this.browserInfo.baseBrowser == "ie" && this.browserInfo.version >= 6) ||
			(this.browserInfo.baseBrowser == "chrome" && this.browserInfo.version >= 16)) {
				this.resultList["browser"].result = true;
		}
	}else if(this.resultList["os"].result && this.osInfo.baseOs=="mac"){
		if ((this.browserInfo.baseBrowser == "chrome" && this.browserInfo.version >= 16) ||
			(this.browserInfo.baseBrowser == "safari" && this.browserInfo.version >= 5.1)) {
				this.resultList["browser"].result = true;
		}
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