// JS Challenge #1 Week Five Lecture 2 Homework

function multiplyByNine() {
	for ( var i = 0; i <= 100; i++) {
		var nine = 9
		var total = i * nine
		console.log(i + " * " + nine + " = " + total)
	};
};

multiplyByNine();

function rollCall() {
	var myClass = ["Lucille", "Michael", "George Michael"];
	var name = "";
	var i;
	for (i = 0; i < myClass.length; i++) {
		console.log(name + myClass[i] + " is in the class.");
	}
};

rollCall();