//schleifen
for(i=1;i<=5;i++){
	document.write(i + "<br/>");
}

//verschiedene Funktionen deklariern und aufrufen

//Funktion mit einem Parameter
function sayName(text){
	document.write("<br/>Hi wassup " + text);
}

sayName("Erti");
sayName("Oguen");
sayName("Halil");

document.write("<br/>");

//Funktion mit mehreren Paramertern
function sayHello(name,age){
	document.write(name+" is "+age+" years old");
}

sayHello("<br/>Erti",27);

function multipl(a,b){
	return a*b;
}

var x = multipl(5,6);
document.write("<br/>"+x);

function addNo(a,b){
	var c = a+b;
	return c;
}

function test(number){
	while(number<5){
		number++;
	}
	return number;
}
alert(test(2));

//Funktion direkt in der Ausgabe aufrufen
document.write("<br/>"+"the result is "+addNo(1,1));

//Boxen

//alert-box
alert("Mit JavaScript generiert");//muss mit "ok" bestätigt werden

//prompt-box
var x = prompt("Tragen Sie bitte Ihren Namen ein");//wartet auf Eingabe
alert(x);

//confirm-box reagiert je nach antwort anders
var a=confirm("wanna leave");
if(a==true){
	alert("Bye");
}
else if(a==false){
	alert("Cool");
}