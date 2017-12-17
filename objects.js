//Objekete erstellen und ausgeben

var person = {name:"Erti", age:27, hair:"black"};

var x = person.name;
var y = person.hair;
var z = person.age;

document.write("The name of the Person is " + x);
document.write("<br\> The color of his hair is " + y);
document.write("<br\> He is " + z + " years old");

//Objektkonstruktor erstellen

function person0(name, age, color){
	this.name = name;
	this.age = age;
	this.color = color;
}

var p1 = new person0("Erti",27,"black");

document.write("<br\> Haircolor is " + p1.color);
