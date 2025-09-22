const dateNowFormattedET = function(){
//exports.dateNowFormattedET = function(){
		let timeNow = new Date();
		let dateNow = timeNow.getDate();
		let monthNow = timeNow.getMonth();
		//let yearNow = timeNow.getYear();
		let yearNow = timeNow.getFullYear();
		const monthNamesET = ["Jaanuar", "Veebruar", "Märts", "Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"];
		//return dateNow + "." + (monthNow + 1) + "." + yearNow;
		return dateNow + "." + monthNamesET[monthNow] + " " + yearNow;
	
}
const timeNowFormattedET = function(){
	let timeNow = new Date();
	let hourNow = timeNow.getHours();
	let minuteNow = timeNow.getMinutes();
	let secondNow = timeNow.getSeconds();
}
const partOfDay = function(){
	let dayPart = "suvaline aeg";
	let hourNow = new Date().getHours();
	if(hourNow<= 6){
		dayPart = "varahommik";
	} else if (hourNow< 12){
		dayPart = "hommik";
	} else if (hourNow == 12){
		dayPart = "keskpäev";
	}
	return dayPart;
}


//ekspordin kõik vajaliku
module.exports = {fullDate: dateNowFormattedET,fullTime: timeNowFormattedET,partOfDay: partOfDay};