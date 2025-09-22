const fs = require("fs");
const textRef = "txt/vanasonad.txt";

function pickOneSentence(rawText){
	//jagan textifaili ";" osadeks/massiiviks, listiks
	let oldWisdomList = rawText.split(";");
	let wisdomCount = oldWisdomList.length;
	//console.log(wisdomCount);
	//loosin ja väljastan ühe vanasõna
	let wisdomOfTheday = oldWisdomList[Math.round(Math.random()* (wisdomCount-1))];
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
readTextFile();