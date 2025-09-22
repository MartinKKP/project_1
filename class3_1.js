const fs = require("fs");
//impordime oma kuupäeva mooduli
const dateET = require ("./dateTimeET.js");
const textRef = "txt/vanasonad.txt";

function pickOneSentence(rawText){
	//jagan textifaili ";" osadeks/massiiviks, listiks
	let oldWisdomList = rawText.split(";");
	//let wisdomCount = oldWisdomList.length;
	//console.log(wisdomCount);
	//loosin ja väljastan ühe vanasõna
	let wisdomOfTheday = oldWisdomList[Math.round(Math.random()* (oldWisdomList.length - 1))];
	console.log(wisdomOfTheday);
}

function readTextFile(){
	fs.readFile(textRef, "utf8", (err,data)=>{
		if (err){
			console.log(err);
		} else {
			//console.log(data);
			pickOneSentence(data);
		}
		
	});
	
}
console.log("Täna on " + dateET.fullDate() + " " + dateET.fullTime() + " " + dateET.partOfDay());
//console.log("Kell on "  dateET.fullTime());
console.log("Tänane vanasõna on:");
readTextFile();