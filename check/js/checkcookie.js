CookieInfo = function (){
	this.key = "cookiecheck";
	this.okValue = "true";
	this.checkCasecOK = false;
	
	this.setCookie = function(key, value){
		document.cookie = key + "=" + escape(value) + "; ";
	}

	this.clearCookie =function(){
		document.cookie = this.key + "=" + escape("") + "; ";
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
	
	this.checkCookieInit = function(){
		this.setCookie(this.key, this.okValue);
	}
	
	this.checkCookie = function(){
		
		result = this.getCookie(document.cookie, this.key);
	
	    if ( result == this.okValue ){
	    		this.checkCasecOK = true;
		}else{
			this.checkCasecOK = false;
	    }
	    return this.checkCasecOK;
	}
}
