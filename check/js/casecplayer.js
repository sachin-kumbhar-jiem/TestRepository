if( !OsInfo )throw('ERROR!');
if( !BrowserInfo )throw('ERROR!');


function CASECPlayer(){

	this.dummySoundUri = './sound/dumsound.mp3';
	this.soundUri = '';
	this.playerWidth = '2';
	this.playerHeight = '2';
	this.autoStart = false;
	this.showImage = false;
	this.loop = false;
	this.cookieName = "CASEC.MB.PLAYER";
	this.CASECcompliant = false;
	this.player = null;

	this.getPlayer = function(){
		
		//Cookieに設定があればそれを使用する
		var cookiePlayer = this.getCookie(document.cookie, this.cookieName);
		if (cookiePlayer.length!=0){
			this.player = cookiePlayer;
			this.CASECcompliant = true;
			return;
		}
		
		var osInfo = new OsInfo();
		var browserInfo = new BrowserInfo();
		
		if(osInfo.baseOs == 'win'){
			if(browserInfo.baseBrowser== 'chrome' ||
				(browserInfo.baseBrowser == 'ie' && browserInfo.version >= 9)){
				this.setCookieCasecPlayer('AUDIO');
				
			}else if(browserInfo.baseBrowser == 'ie' && browserInfo.version < 9){
				this.setCookieCasecPlayer('WMP');
			}
		}else if(osInfo.baseOs == 'mac'){
			if(browserInfo.baseBrowser == 'chrome' ||
				browserInfo.baseBrowser == 'safari'){
				this.setCookieCasecPlayer('AUDIO');
			}
		}
	}
	
	this.setCookieCasecPlayer = function(p){
		this.player = p;
		this.CASECcompliant = true;
		//document.cookie = this.cookieName + "=" + this.player + "; domain=evidus.com; path=/";
		document.cookie = this.cookieName + "=" + this.player + "; path=/";
	}
	
	this.getCasecPlayerName = function(){
		if(this.player==null){
			this.getPlayer();
		}
		if(this.player=='AUDIO'){
			return "-";
		}else if (this.player=='WMP'){
			return "Windows Media Player";
		}else{
			return "不明";
		}
	
	}
	
	this.getImageTag = function(){
		return "<img src=\"./img/playing.gif\" width=\"298\" height=\"46\"/>";
	}
	this.getAudioTag = function(){
		if(this.soundUri == ''){
			this.soundUri = this.dummySoundUri;
		}
		var tag = "";
		if(this.showImage){
			tag = this.getImageTag();
		}
		tag = tag +"<!-- AUDIO -->" +
			"<audio" +
				" id=\"PlayerAudio\"" +
				" src=\"" + this.soundUri + "\"" +
				" autoplay=\"" + this.autoStart + "\"" +
				" loop=\"" + this.loop + "\"" +
				" preload=\"auto\" />";
		return tag;
	}
	
	this.getWMP7ObjectTag = function(){
		if(this.soundUri == ''){
			this.soundUri = this.dummySoundUri;
		}
		var tag = "";
		if(this.showImage){
			tag = this.getImageTag();
		}
		tag = tag +
			"<!-- IE,WMP7 -->" +
			"<object" +
				" id=\"PlayerWMP7\"" +
				" width=\"" + this.playerWidth + "\"" +
				" height=\"" + this.playerHeight + "\"" +
				" classid=\"CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6\"" +
				" standby=\"loading\">" +
			"<param name=\"AutoStart\" value=\"" + this.autoStart + "\">" +
			"<param name=\"URL\" value=\"" + this.soundUri + "\">" +
			"</object>";
		return tag;
	}
	
	this.getNoSoundTag = function(){

		var tag = "この環境では音声を再生できません。";

		return tag;
	}
	
	this.createPlayer = function(id){

		if(this.player==null){
			this.getPlayer();
		}
		var ele = document.getElementById(id);
		if(ele){
			if(this.player=="AUDIO"){
				ele.innerHTML = this.getAudioTag();
			}else if (this.player == "WMP"){
				ele.innerHTML = this.getWMP7ObjectTag();
				if(this.loop){
					var wmp = document.getElementById("PlayerWMP7");
					try{
						wmp.settings.setMode("loop",true);
					}catch(e){}
				}
			}else{
				ele.innerHTML = this.getNoSoundTag();
			}
		}
	}
	
	this.getCookie = function(cookie, key){
	    tmp1 = " " + cookie + ";";
	    xx1 = xx2 = 0;
	    len = tmp1.length;
	    while (xx1 < len) {
	        xx2 = tmp1.indexOf(";", xx1);
	        tmp2 = tmp1.substring(xx1 + 1, xx2);
	        xx3 = tmp2.indexOf("=");
	        if (tmp2.substring(0, xx3) == key) {
	            return(unescape(tmp2.substring(xx3 + 1, xx2 - xx1 - 1)));
	        }
	        xx1 = xx2 + 1;
	    }
	    return("");
	}

}