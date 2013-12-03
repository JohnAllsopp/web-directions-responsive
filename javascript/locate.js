var locater = {
	 
	bounce: function(){
	//if it's not AU, bounce to streaming page	
		// return
		var cc = locater.getCountryCode()
		
		if (cc !== "AU") {
			window.location.href = "http://code13.webdirections.org/streaming.html"
		}
	
	},

	getCountryCode: function(){
		
		var cc = ""
		
		if (window.location.search) {
			if (window.location.search.length !== 1) {
				cc = window.location.search.substr(1, window.location.search.length-1) //remove the ?
			}
		}
				
		if (cc == "") {
			if (geoip_country_code()) {
				return geoip_country_code()
			}
			
			else {
				return "DF"
			}	
		}
		
		else {
			return cc
		}
	}
}

window.addEventListener("load", locater.bounce, false)
