const fs = require("fs");
//impordime oma kuupأ¤eva mooduli
const dateET = require("./dateTimeET");
const textRef = "txt/vanasonad.txt";

function listWisdom(rawData){
	let folkWisdom = rawData.split(";");
	for (let i = 0; i < folkWisdom.length; i ++){
		console.log((i + 1) + ") " + folkWisdom[i]);
	}
}

function readTextFile(){
	fs.readFile(textRef, "utf8", (err, data)=>{
		if(err){
			console.log(err);
		} else {
			//console.log(data);
			listWisdom(data);
		}
	});
}

console.log("Täna on " + dateET.fullDate() + " " + dateET.fullTime() + " " + dateET.partOfDay());
console.log("Kell on " + dateET.fullTime());
console.log("On " + dateET.partOfDay() + ".");
console.log("Tänane vanasõna on:");
readTextFile();