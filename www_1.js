const http = require("http");
const dateET = require ("./dateTimeET.js");
const vanaSona 
const pageHead = '<!DOCTYPE html><html lang="et"><head>  <meta charset="utf-8">  <title>odavad kõrred</title></head><body>;';
const pageBody = '<h1> odavad kõrred</h1>  <p>kõige odavamad <a href="https://www.kors.ee">kõrred</a></p>  <hr>;';
const pageFoot = '</body></html>';


http.createServer(function(req, res){
	res.writeHead(200,{"Content-type": "text/html"});
	res.write("DrreeTulemasd!")
	res.write(pageHead);
	res.write(pageBody);
	res.write("/n/t<p>Täna on " + dateET.fullDate() + " " + dateET.fullTime() + " " + dateET.partOfDay() + ".</p>");
	
	res.write("/n/t<p>Vanas�nade list: " + v )
	<ol>
		<li>VANASÕNA</li>
		
		</ol>
	res.write(pageFoot)
	return res.end();
}).listen(5113);