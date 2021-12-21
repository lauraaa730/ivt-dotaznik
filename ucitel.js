

function loadJSON(callback) {
	var data = new XMLHttpRequest();
	data.overrideMimeType("application/json");
	data.open('GET', 'data.json', true);
	data.onreadystatechange = function () {
	if (data.readyState == 4 && data.status == "200") {

// .open will NOT return a value but simply returns undefined in async mode so use a callback
	callback(data.responseText);

}
}
	data.send(null);

}

// Call to function with anonymous callback
	loadJSON(function(response) {
// Do Something with the response e.g.
	jsonresponse = JSON.parse(response);

// Assuming json data is wrapped in square brackets as Drew suggests
	console.log(jsonresponse[0].name);
});

var q1 = 1
var q2 = 0
function changeText() {
//if q1 out of range, delete form --> jina fce?=zmena,pridani objektu do html nadpis:gratulujem
//const url = window.location.host + '/ucitel/';
//getResponseJson(url)
//if (q1>length.questions){
if (q2 == 4) {
	lastPage();
}
document.getElementById('question').innerHTML = jsonresponse[0][q2];
document.getElementById('label1').innerHTML = jsonresponse[q1][0];
document.getElementById('label2').innerHTML = jsonresponse[q1][1];
document.getElementById('label3').innerHTML = jsonresponse[q1][2];
document.getElementById('label4').innerHTML = jsonresponse[q1][3];
document.getElementById('label5').innerHTML = jsonresponse[q1][4];
document.getElementById('label6').innerHTML = jsonresponse[q1][5];
q1 += 1
q2 += 1
console.log("pass");
getAnswer()

}
a=0
b=0
c=0
d=0
e=0
f=0

function getAnswer() {
   if (document.getElementById('question1').checked) {
  var label_value = document.getElementById('question1').value;
  a=a+1
  console.log(a)
}
   else if (document.getElementById('question2').checked) {
  var label_value = document.getElementById('question2').value;
  b=b+1
  console.log(b)
}
   else if (document.getElementById('question3').checked) {
  var label_value = document.getElementById('question3').value;
  c=c+1
  console.log(c)
}
   else if (document.getElementById('question4').checked) {
  var label_value = document.getElementById('question4').value;
  d=d+1
  console.log(d)
}
   else if (document.getElementById('question5').checked) {
  var label_value = document.getElementById('question5').value;
  e=e+1
  console.log(e)
}
   else if (document.getElementById('question6').checked) {
  var label_value = document.getElementById('question6').value;
  f=f+1
  console.log(f)
}
   console.log(label_value)	
}

document.getElementById('sendButton').onclick = changeText;

//na konci po poslední otázce se naposledy změní html,
//podle nejvyššího počtu u odpovědí se vybere učitel a zobrazí se obr.
x=8
y=4
z=6/*
function LargestNumber() {
	const largest = Math.max(a,b,c)
	console.log(largest)	
	//ktery z a b c je nejvetsi, je celkem jedno kolik je cis hodnota
}
*/

//addon kamila
function lastPage() {
	var largest = Math.max(a,b,c,d,e,f)
	console.log(largest)
	newImage = document.createElement("img");
	
	if (a == largest) {
		var finalmessage = "Jana Chloupková";
		newImage.src = "https://www.arcig.cz/sites/default/files/styles/medium/public/pictures/picture-4848-1422457513.jpg?itok=IF--8QEe";
}
	if (b == largest) {
		var finalmessage = "Lukáš Bernard";
		newImage.src = "https://www.arcig.cz/sites/default/files/styles/medium/public/pictures/picture-4833-1420523757.jpg?itok=qyhuzhJt";
}
	if (c == largest) {
		var finalmessage = "Michaela Truhlářová";
		newImage.src = "https://www.arcig.cz/sites/default/files/styles/medium/public/pictures/picture-4886-1421333038.jpg?itok=VUsUhYp2";
}
	if (d == largest) {
		var finalmessage = "Ondřej Mrzílek";
		newImage.src = "https://www.arcig.cz/sites/default/files/styles/medium/public/pictures/picture-4869-1422213905.jpg?itok=u5j7rvas";
}
	if (e == largest) {
		var finalmessage = "Zdeněk Lauschmann";
		newImage.src = "https://www.arcig.cz/sites/default/files/styles/medium/public/pictures/picture-4859-1422122264.jpg?itok=g1cBFQdF";
}	if (f == largest) {
		var finalmessage = "Hyacint Petr Ullman";
		newImage.src = "https://wave.rozhlas.cz/sites/default/files/images/dfb857724bf9eec54e652c9663718ce8.jpeg";
		newImage.style.width = "200px";
		newImage.style.height = "auto";
		
}
//7otazek!
//if a == largest : blabla	(thats promenna) etc

document.getElementById("kteryucitel").innerHTML = "Gratulujeme!"; //works
console.log("pass");
document.getElementById('endtext').innerHTML = "Jsi " + finalmessage +"!"; //works
console.log("pass");
newImage.padding= "20";
document.getElementById("endpicture").appendChild(newImage);

var form = document.getElementById('kviz'); //that works very well
form.parentNode.removeChild(form);

var button = document.getElementById('sendButton'); //that works very well
button.parentNode.removeChild(button);


}
