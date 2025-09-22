const firstName = "Martin";
const lastName = "Kullerkupp";
let oneRandomNumber = 0;


function tellAuthorsName(){
	console.log ("Programmi autor on " + firstName + " " + lastName + " " );
}
function generateNumberValue() {
	let newNumber = Math.round(Math.random()*10);
//	oneRandomNumber = newNumber;
	return newNumber;
}

function dateNowFormattedET(){
		let timeNow = new Date();
		let dateNow = timeNow.getDate();
		let monthNow = timeNow.getMonth();
		//let yearNow = timeNow.getYear();
		let yearNow = timeNow.getFullYear();
		const monthNamesET = ["Jaanuar", "Veebruar", "Märts", "Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"];
		//return dateNow + "." + (monthNow + 1) + "." + yearNow;
		return dateNow + "." + monthNamesET[monthNow] + " " + yearNow;
		
}

function timeNowFormattedET(){
	let timeNow = new Date();
	let hourNow = timeNow.getHours();
	let minuteNow = timeNow.getMinutes();
	let secondNow = timeNow.getSeconds();
	
	return hourNow + ":" + minuteNow + ":" + secondNow;
}
tellAuthorsName();
oneRandomNumber = generateNumberValue();
console.log("Genereerisin juhusliku arvu" + " " + oneRandomNumber);
//console.log(new date());
console.log("Täna on " + dateNowFormattedET());
console.log("Täna on " + timeNowFormattedET());