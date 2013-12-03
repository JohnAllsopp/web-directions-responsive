// currencyDetails = {
// 	currencySymbol: "" 
// 	priceIsLocalCurrency: true, 
// 	priceIndividual: ""
// 	priceIndividualDiscounted: "", 
// 	priceTeam: "", 
// 	priceTeamDiscounted: "", 
// 	buttonIndividual: "", 
// 	buttonIndividualDiscounted:"", 
// 	buttonTeam: "", 
// 	buttonTeamDiscounted: ""
// }

var geoip = {
		
	buttonTemplate: '<form action="https://www.paypal.com/cgi-bin/webscr" method="post"> <input type="hidden" name="cmd" value="_s-xclick"> <input type="hidden" name="hosted_button_id" value="replaceme"> <input type="image" src="images/register.png" border="0" name="submit" alt="PayPal — The safer, easier way to pay online."> <img alt="" border="0" src="https://www.paypalobjects.com/en_AU/i/scr/pixel.gif" width="1" height="1"><input type="hidden" name="custom" value="replaceWithDiscCode"> </form>',
	
	currencySymbolPH: 'PhP', 
	priceIsLocalCurrencyPH: true, 
	priceIndividualPH: '1599', 
	priceIndividualPHDiscounted: '1199', 
	priceTeamPH: '3999', 
	priceTeamPHDiscounted: '2999', 
	buttonIndividualPH: 'VP785WJW8JS4S', 
	buttonIndividualPHDiscounted: 'HGQA9MVNP8SNQ', 
	buttonTeamPH: '4FBHE5TFBJ63Y', 
	buttonTeamPHDiscounted: 'MD29PDA6AH4RY', 

	currencySymbolID: 'Rp', 
	priceIsLocalCurrencyID: false, 
	priceIndividualID: '399000', 
	priceIndividualIDDiscounted: '299000', 
	priceTeamID: '799000', 
	priceTeamIDDiscounted: '599000', 
	buttonIndividualID: 'EMHW7CCX24QUQ', 
	buttonIndividualIDDiscounted: 'Q6LZ5GEXJFMT6', 
	buttonTeamID: 'F9SJ38JWTYZE6', 
	buttonTeamIDDiscounted: '7EGCHHLLMCTSQ', 

	currencySymbolMY: 'RM', 
	priceIsLocalCurrencyMY: false, 
	priceIndividualMY: '119', 
	priceIndividualMYDiscounted: '99', 
	priceTeamMY: '249', 
	priceTeamMYDiscounted: '199', 
	buttonIndividualMY: '4X6GFAHSRJMMA', 
	buttonIndividualMYDiscounted: 'TNUHXR59P6FHU', 
	buttonTeamMY: 'PAVW6Z7GK92XW', 
	buttonTeamMYDiscounted: '4AT5X5WZ6KDVC', 

	currencySymbolSG: 'SG$', 
	priceIsLocalCurrencySG: true, 
	priceIndividualSG: '199', 
	priceIndividualSGDiscounted: '169', 
	priceTeamSG: '399', 
	priceTeamSGDiscounted: '299', 
	buttonIndividualSG: '6J8XG5CXS9H3G', 
	buttonIndividualSGDiscounted: 'CQ6E6ZZFPHVJ6', 
	buttonTeamSG: 'UQBLYAP7KYRPC', 
	buttonTeamSGDiscounted: '8RV9CNTG7S4NA', 

	currencySymbolSG: 'SG$', 
	priceIsLocalCurrencySG: true, 
	priceIndividualSG: '199', 
	priceIndividualSGDiscounted: '169', 
	priceTeamSG: '399', 
	priceTeamSGDiscounted: '299', 
	buttonIndividualSG: '6J8XG5CXS9H3G', 
	buttonIndividualSGDiscounted: 'CQ6E6ZZFPHVJ6', 
	buttonTeamSG: 'UQBLYAP7KYRPC', 
	buttonTeamSGDiscounted: '8RV9CNTG7S4NA', 

	currencySymbolHK: 'HK$', 
	priceIsLocalCurrencyHK: true, 
	priceIndividualHK: '1199', 
	priceIndividualHKDiscounted: '999', 
	priceTeamHK: '2399', 
	priceTeamHKDiscounted: '1999', 
	buttonIndividualHK: 'DG5X7U39K496J', 
	buttonIndividualHKDiscounted: 'FZAEYX4RKKVZ8', 
	buttonTeamHK: 'ZVC4FN2AYB58W', 
	buttonTeamHKDiscounted: 'M49PZQJ9BTXMA', 

	currencySymbolJP: '¥', 
	priceIsLocalCurrencyJP: true, 
	priceIndividualJP: '14990', 
	priceIndividualJPDiscounted: '12990', 
	priceTeamJP: '28999', 
	priceTeamJPDiscounted: '24999', 
	buttonIndividualJP: 'U4NRJMANGMS8N', 
	buttonIndividualJPDiscounted: '8UF87PJ7H7MZL', 
	buttonTeamJP: 'CAAHEAL8QJVBL', 
	buttonTeamJPDiscounted: '8A95699US5GQJ', 

	currencySymbolKR: '₩', 
	priceIsLocalCurrencyKR: false, 
	priceIndividualKR: '169000', 
	priceIndividualKRDiscounted: '129000', 
	priceTeamKR: '339000', 
	priceTeamKRDiscounted: '299000', 
	buttonIndividualKR: '5Y9UTJ2QM9AW6', 
	buttonIndividualKRDiscounted: 'U4EJ6D2Z7FNMU', 
	buttonTeamKR: 'X5X66NN4JJMNW', 
	buttonTeamKRDiscounted: 'PKVGRSZETFPMY', 

	currencySymbolTW: 'NT$', 
	priceIsLocalCurrencyTW: true, 
	priceIndividualTW: '4490', 
	priceIndividualTWDiscounted: '3990', 
	priceTeamTW: '8999', 
	priceTeamTWDiscounted: '6999', 
	buttonIndividualTW: 'JBJKG75XYMJ5J', 
	buttonIndividualTWDiscounted: 'PHLWSWZEBHXC4', 
	buttonTeamTW: 'ZA5NQT5LUGTSG', 
	buttonTeamTWDiscounted: 'PHLWSWZEBHXC4', 

	currencySymbolIN: 'Rs', 
	priceIsLocalCurrencyIN: false, 
	priceIndividualIN: '2199', 
	priceIndividualINDiscounted: '1799', 
	priceTeamIN: '4490', 
	priceTeamINDiscounted: '3990', 
	buttonIndividualIN: '7B353HENZZ4SY', 
	buttonIndividualINDiscounted: 'T34UJVA4GJLMS', 
	buttonTeamIN: 'BNXDADRQ85K5W', 
	buttonTeamINDiscounted: 'ZNDHNF5EWVXSJ', 

	currencySymbolTH: '฿', 
	priceIsLocalCurrencyTH: true, 
	priceIndividualTH: '1199', 
	priceIndividualTHDiscounted: '999', 
	priceTeamTH: '2399', 
	priceTeamTHDiscounted: '1999', 
	buttonIndividualTH: 'ZV77K6WRPA4TA', 
	buttonIndividualTHDiscounted: '77RZRTRUMFAUU', 
	buttonTeamTH: 'JWGW4PU6AG9ZE', 
	buttonTeamTHDiscounted: 'ND3UKLGD8Y9DN', 

	currencySymbolVN: '₫', 
	priceIsLocalCurrencyVN: false, 
	priceIndividualVN: '849000', 
	priceIndividualVNDiscounted: '649000', 
	priceTeamVN: '1699000', 
	priceTeamVNDiscounted: '1399000', 
	buttonIndividualVN: 'YM59CQ8H4L7YC', 
	buttonIndividualVNDiscounted: 'LF84W3NZG2EAA', 
	buttonTeamVN: 'FZSJLWB3CXNU2', 
	buttonTeamVNDiscounted: '4DR5MGZ7Y7EJ4', 

	currencySymbolDF: '$USD', 
	priceIsLocalCurrencyDF: true, 
	priceIndividualDF: '149', 
	priceIndividualDFDiscounted: '129', 
	priceTeamDF: '299', 
	priceTeamDFDiscounted: '249', 
	buttonIndividualDF: 'M345ADMKQ67EA', 
	buttonIndividualDFDiscounted: 'M345ADMKQ67EA', 
	buttonTeamDF: 'YE6LN4CQ6NFBE', 
	buttonTeamDFDiscounted: 'YE6LN4CQ6NFBE', 

	
	adjustTimesAndPrices: function(){
		var individualPriceFields = document.querySelectorAll(".individualPrice");
		var teamPriceFields = document.querySelectorAll(".teamPrice");
		var individualPrice, teamPrice;
		var individualButtonCode, teamButtonCode;
		var individualButton = document.querySelector('#individualButton')
		var discountValidOutput = document.querySelector('#discountValid')
		var teamButton = document.querySelector('#teamButton')
		var countryCode = geoip.getCountryCode()
		var discountMessage = "Awesome, that gets you a discount!"
		
		
		//redirect if we are in Australia
		
		if (geoip.getCountryCode() == "AU") {
			window.location.href = "http://code13.webdirections.org";
			return
		}
		
		individualPrice = geoip.getIndividualPrice()
		teamPrice = geoip.getTeamPrice()
		individualButtonCode = geoip.getIndividualButtonCode()
		teamButtonCode = geoip.getTeamButtonCode()
	
		individualPriceFields[0].innerHTML = individualPrice;
		individualPriceFields[1].innerHTML = individualPrice; //+ individualButtonCode
		teamPriceFields[0].innerHTML = teamPrice; // + teamButtonCode
		
		teamButton.innerHTML = teamButtonCode
		individualButton.innerHTML = individualButtonCode
		
		if (geoip.hasValidDiscountCode(countryCode)) {
			if (discountValidOutput.classList){
				discountValidOutput.classList.add("discounted");
				individualPriceFields[1].classList.add("discounted");
				teamPriceFields[0].classList.add("discounted");
				
			}
		}
		else {
			if (discountValidOutput.classList){
				discountValidOutput.classList.remove("discounted");
				individualPriceFields[1].classList.remove("discounted");
				teamPriceFields[0].classList.remove("discounted");
			}
			
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
				cc = geoip_country_code()
			}
			
			else {
				cc = "DF"
			}	
		}
		
		if (cc == "AU") {
			return cc
		}
		
		// if ((!geoip.countryHasPricing(cc)) || (cc == "AU") ){
		// 	return "DF"
		// }
		
		if (!geoip.countryHasPricing(cc)){
			return "DF" //country that dpoesn't have its own currency, return default
		}
		else {
			return cc
		}
	},
	
	getIndividualPrice: function(){
		//get the crrent individual price for the country we're visiting from
		//calculates whether a discount is applied
		var countryCode = geoip.getCountryCode()
		var discount = ""

		if (geoip.hasValidDiscountCode(countryCode)) {
			discount = "Discounted"
		}
		
		var priceProperty = "priceIndividual" + countryCode + discount
		var currencyProperty = "currencySymbol" + countryCode
		var approxPrice = "priceIsLocalCurrency" + countryCode
		
		if (geoip[approxPrice]){
			return "<span>" + geoip[currencyProperty]  + geoip.formatNumber(geoip[priceProperty]) + "</span>"
		}
		
		else {
			return "<span>" + geoip[currencyProperty]  + geoip.formatNumber(geoip[priceProperty])	+ " (approx) </span>"
		}
	},

	getTeamPrice: function(){
		//get the crrent team price for the country we're visiting from
		//calculates whether a discount is applied
		
		var countryCode = geoip.getCountryCode()
		var discount = ""
		if (geoip.hasValidDiscountCode(countryCode)) {
			discount = "Discounted"
		}
		
		var priceProperty = "priceTeam" + countryCode + discount
		var currencyProperty = "currencySymbol" + countryCode
		var approxPrice = "priceIsLocalCurrency" + countryCode

		if (geoip[approxPrice]){
			return "<span>" + geoip[currencyProperty]  + geoip.formatNumber(geoip[priceProperty]) + "</span>"
		}
		
		else {
			return "<span>" + geoip[currencyProperty]  + geoip.formatNumber(geoip[priceProperty])	+ " (approx)" + "</span>"
		}		
	},

	getIndividualButtonCode: function(){
		//get the crrent individual cbutton code for the country we're visiting from
		//calculates whether a discount is applied
		
		var countryCode = geoip.getCountryCode()
		var discount = ""
		if (geoip.hasValidDiscountCode(countryCode)) {
			discount = "Discounted"
		}
		
		var fnname = "buttonIndividual"  + countryCode + discount
		return geoip.buildButton(geoip[fnname])
	},
	
	getTeamButtonCode: function(){
		//get the crrent team button code for the country we're visiting from
		//calculates whether a discount is applied
		
		var countryCode = geoip.getCountryCode()
		var discount = ""
		if (geoip.hasValidDiscountCode(countryCode)) {
			discount = "Discounted"
		}
		
		var fnname = "buttonTeam"  + countryCode + discount
		return geoip.buildButton(geoip[fnname])
	},
	
	buildButton: function (buttonID) {
		//build a paypal button from the ID
		var btnCode = geoip.buttonTemplate.replace('replaceme', buttonID);
		return btnCode.replace("replaceWithDiscCode", document.querySelector('#discountCode').value);
	},
	
	hasValidDiscountCode: function(countryCode) {
		//do they have a vaid discount code for this country
		var discountCode = document.querySelector("#discountCode").value;
		return $.inArray(discountCode, geoip.getCountryDiscountCodes(countryCode)) !== -1;
	},
	
	 formatNumber: function(nStr)
	{
		nStr += '';
		x = nStr.split('.');
		x1 = x[0];
		x2 = x.length > 1 ? '.' + x[1] : '';
		var rgx = /(\d+)(\d{3})/;
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, '$1' + ',' + '$2');
		}
		return x1 + x2;
	},
	
	countryHasPricing: function(countryCode){
		return $.inArray(countryCode, ["PH", "MY", "ID", "SG", "HK", "JP", "KR", "TW", "IN", "TH", "VN"]) !== -1
	},
	
	getCountryDiscountCodes: function(countryCode){
		//get the discount codes for this country
		
		switch (countryCode) {
			
			case "PH":
				return ["phpdisc", "discp", "pdiscy"];
			case "MY":
				return ["mydisc", "discmy", "mdiscy"];
			case "ID":
				return ["mydisc", "discmy", "mdiscy"];
			case "SG":
				return ["mydisc", "discmy", "mdiscy"];
			case "HK":
				return ["mydisc", "discmy", "mdiscy"];
			case "JP":
				return ["mydisc", "discmy", "mdiscy"];
			case "KR":
				return ["mydisc", "discmy", "mdiscy"];
			case "TW":
				return ["mydisc", "discmy", "mdiscy"];
			case "IN":
				return ["mydisc", "discmy", "mdiscy"];
			case "TH":
				return ["mydisc", "discmy", "mdiscy"];
			case "VN":
				return ["mydisc", "discmy", "mdiscy"];

			default:
				return ["seckrit"]
	
			
		}
	}
	
}

window.addEventListener("load", geoip.adjustTimesAndPrices, false)
