$(document).ready(function(){

	var arrayObj = {
		displayArrayElement : function (element){
		 	//var div = document.getElementById("content");
		 	content.innerHTML += element ?  (element.toString() + "<br />") : "<br />"; //id doesn't support on firefox
		},
		displayTitle : function (string){
		 	//var div = document.getElementById("content");
		 	this.newLine();
		 	content.innerHTML += ("<h2>" + string + "</h2>" + "<br />") ; //id doesn't support on firefox
		},
		newLine : function(){
			this.displayArrayElement('------------------------------------------');
			return this;
		},
		iterator : function(ary){
				for (var i = 0;i<ary.length;i++){
					this.displayArrayElement(ary[i]);
				}
		},
		everyElement : function(score){
			return isNaN(score); 
		},
		filterElement : function(score){
			return !isNaN(score);
		}
	};


var Car = function Car (name,color){
	this.name = name;
	this.color = color;
	this.detail = function(){
		arrayObj.displayArrayElement("Name: " + this.name + " color: "+ this.color +  " Type: " + this.locks) ;
	},
	this.checkProperty = function(property){
		arrayObj.displayArrayElement( "Has own '" + property + "' property? " + this.hasOwnProperty(property) );
	}
};

Car.prototype.locks = "automatic";

var work_car = new Car("Toyota","red");
work_car.detail();
work_car.checkProperty("locks");


arrayObj.displayArrayElement( "<br />For in to iterate obj property" );
for (var pro_name in work_car){
	arrayObj.displayArrayElement( "Property Name: " + pro_name + " --------  Property Value: " + work_car[pro_name]);
}

arrayObj.displayArrayElement("----");
var personal_car = new Car("Honda","blue");
personal_car.locks = "manual";
personal_car.detail();
personal_car.checkProperty("locks");

arrayObj.displayArrayElement( "<br />For in to iterate obj property" );
for (var pro_name in personal_car){
	arrayObj.displayArrayElement( "Property Name: " + pro_name + " --------  Property Value: " + personal_car[pro_name]);
}

//Navigator Object

arrayObj.displayTitle("Navigator Obj");
arrayObj.displayArrayElement("appname:" + navigator.appName);
arrayObj.displayArrayElement("appCodeName:" + navigator.appCodeName);
arrayObj.displayArrayElement("platform:" + navigator.platform);
arrayObj.displayArrayElement("userAgent:" + window.navigator.userAgent);
arrayObj.displayArrayElement("see console for rest of the properties");
console.log(navigator);

//History Obj

arrayObj.displayTitle("History Obj");
arrayObj.displayArrayElement("lengh-num of pages in session history of current window. back(),forward(),go()");
arrayObj.displayArrayElement("see console for rest of the properties");
console.log(history);


// Array --  
	
	arrayObj.newLine();
	var students = ["s1","s2","s3","mike","s1","s2","s3"];
	students = new Array("s1","s2","s3","mike","s3","s1","s2","s2","s2","s3");
	var students_classA = ["3","4","64","3"];

	arrayObj.displayArrayElement("for loop");
	arrayObj.displayArrayElement(students);

	arrayObj.displayArrayElement();
	
	arrayObj.displayArrayElement("array join , separate by comma");
	
	arrayObj.displayArrayElement(students.join(", "));

	arrayObj.newLine().displayArrayElement("pop: " + students.pop());
	arrayObj.displayArrayElement(students);

	arrayObj.newLine().displayArrayElement("push: " + students.push("mikey"));
	arrayObj.displayArrayElement(students);

	arrayObj.newLine().displayArrayElement("shift: " + students.shift());
	arrayObj.displayArrayElement(students);	

	arrayObj.newLine().displayArrayElement("unshift: " + students.unshift("mikey1"));
	arrayObj.displayArrayElement(students);


	arrayObj.newLine().displayArrayElement("reverse: " + students.reverse());
	arrayObj.displayArrayElement(students);


	arrayObj.newLine().displayArrayElement("sort: " + students.sort());
	arrayObj.displayArrayElement(students);

	arrayObj.newLine().displayArrayElement("concate: " + students.concat(students_classA));
	arrayObj.displayArrayElement(students);
	
	arrayObj.newLine().displayArrayElement("slice: 2,4 ---  " + students.slice(2,4));
	arrayObj.displayArrayElement(students);

	arrayObj.newLine().displayArrayElement("splice: 2,1 s7,s8,4,766 array --- " + students.splice(2,1,"s7","s8",4,766));
	arrayObj.displayArrayElement(students);

	arrayObj.newLine().displayArrayElement("indexOf: 's2',--- " + students.indexOf("s2"));
	arrayObj.displayArrayElement(students);	

	arrayObj.newLine().displayArrayElement("lastIndexOf: 's2',--- " + students.lastIndexOf("s2"));
	arrayObj.displayArrayElement(students);	

	arrayObj.newLine().displayArrayElement("every is not digits:   " + students.every(arrayObj.everyElement));
	arrayObj.displayArrayElement(students);	

	arrayObj.newLine().displayArrayElement("filter only show digits:   " + students.filter(arrayObj.filterElement));
	arrayObj.displayArrayElement(students);	

	arrayObj.newLine().displayArrayElement("For each");
	students.forEach(function(v,i){
		arrayObj.displayArrayElement(("i: "+i+" -- v: "+v ));
	});

	var _temp = [{"a":"d"},{"b":"gg"}];

		arrayObj.newLine().displayArrayElement("For each");
	_temp.forEach(function(v,i){
		arrayObj.displayArrayElement(("key: "+Object.keys(v)+" -- value: "+ v[Object.keys(v)] ));
	});
	arrayObj.newLine();

	var numArray = [1,3,6,9,8,"a",1,"b",2,4,5];
	arrayObj.displayArrayElement("Ori Array   " + numArray);
	numArray = numArray.map(function(num){
		return num + 2;
	});
	arrayObj.displayArrayElement("New Array   " + numArray);
	arrayObj.displayArrayElement("Some-any num >= 11    " + numArray.some(function(num){ return num >= 11 }));


	// arrayObj.newLine().displayArrayElement("remove last string element , sum of all elements" + numArray.pop());
	arrayObj.newLine().displayArrayElement("Ori  --   " + numArray);
	arrayObj.displayArrayElement("add all num from left " + numArray.reduce(function(total, num){ return total += num }));
	arrayObj.displayArrayElement("add all num from left " + numArray.reduceRight(function(total, num){ return total += num }));

});


