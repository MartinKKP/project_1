//function dateNowFormattedET(){
exports.dateNowFormattedET = function(){
		let timeNow = new Date();
		let dateNow = timeNow.getDate();
		let monthNow = timeNow.getMonth();
		//let yearNow = timeNow.getYear();
		let yearNow = timeNow.getFullYear();
		const monthNamesET = ["Jaanuar", "Veebruar", "Märts", "Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"];
		//return dateNow + "." + (monthNow + 1) + "." + yearNow;
		return dateNow + "." + monthNamesET[monthNow] + " " + yearNow;
}