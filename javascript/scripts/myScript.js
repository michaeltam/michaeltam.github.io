window.onload = function(){
	header.innerHTML = "Header Changed by window.onload - I'm done loading.<br />";
	header.innerHTML += "use onbeforeunload if window.onunload doesn't work properly";
};

window.name = "mike Page";
window.console.log("Welcome to " + window.name);

$(document).ready(function(){

var outputObj = {
	displayElement : function (element){
	 	//var div = document.getElementById("content");
	 	
	 	content.innerHTML += element ?  (element.toString() + "<br />") : "<br />"; //id doesn't support on firefox
	},
	displayTitle : function (string){
	 	//var div = document.getElementById("content");
	 	this.newLine();
	 	content.innerHTML += ("<h2>" + string + "</h2>" + "<br />") ; //id doesn't support on firefox
	},
	newLine : function(){
		this.displayElement('<hr>');
		return this;
	},
	iterator : function(ary){
			for (var i = 0;i<ary.length;i++){
				this.displayElement(ary[i]);
			}
	},
	everyElement : function(score){
		return isNaN(score); 
	},
	filterElement : function(score){
		return !isNaN(score);
	}
};

var mouseEventObj = {
	mouseEventCounter : 0,

	init: function(setting){
		this.eventList = setting.eventList;
		this.initialize();
		this.setEventListener();
		this.finanlize();
	},
	_setAttribute : function(element){
		element.setAttribute("style","width:50px;background-color: #D6CECE;");
	},
	initialize: function(){
		this.mouseParentDiv = document.createElement("div");
		this._setAttribute(this.mouseParentDiv);
		this.mouseChildDiv = document.createElement("div");
		this._setAttribute(this.mouseChildDiv);
		this.mouseParagraph = document.createElement("p");
		this.mouseText = document.createTextNode("Mouse Event Div");
	},
	setEventListener : function(){
		 if (this.eventList.onmousedown) { 
		 	this.mouseParentDiv.onmousedown = function(){ console.log("Parent onmousedown: " +  mouseEventObj.mouseEventCounter++); }; 
		 	this.mouseChildDiv.onmousedown = function(){ console.log("Child onmousedown: " +  mouseEventObj.mouseEventCounter++); };
		 } 
		
		if (this.eventList.onmouseenter) { 
			this.mouseParentDiv.onmouseenter = function(){ console.log("Parent onmouseenter: " +  mouseEventObj.mouseEventCounter++); };
			this.mouseChildDiv.onmouseenter = function(){ console.log("Child onmouseenter: " +  mouseEventObj.mouseEventCounter++); };
		}

		if (this.eventList.onmouseleave) { 
			this.mouseParentDiv.onmouseleave = function(){ console.log("Parent onmouseleave: " +  mouseEventObj.mouseEventCounter++); };
			this.mouseChildDiv.onmouseleave = function(){ console.log("Child onmouseleave: " +  mouseEventObj.mouseEventCounter++); };
		}

		if (this.eventList.onmousemove) { 
			this.mouseParentDiv.onmousemove = function(){ console.log("Parent onmousemove: " +  mouseEventObj.mouseEventCounter++); };
			this.mouseChildDiv.onmousemove = function(){ console.log("Child onmousemove: " +  mouseEventObj.mouseEventCounter++); };
		}

		if (this.eventList.onmouseout) { 
			this.mouseParentDiv.onmouseout = function(){ console.log("Parent onmouseout: " +  mouseEventObj.mouseEventCounter++); };
			this.mouseChildDiv.onmouseout = function(){ console.log("Child onmouseout: " +  mouseEventObj.mouseEventCounter++); };
		}

		if (this.eventList.onmouseover) { 
			this.mouseParentDiv.onmouseover = function(){ console.log("Parent onmouseover: " +  mouseEventObj.mouseEventCounter++); };
			this.mouseChildDiv.onmouseover = function(){ console.log("Child onmouseover: " +  mouseEventObj.mouseEventCounter++); };	
		}

		if (this.eventList.onmouseup) { 
			this.mouseParentDiv.onmouseup = function(){ console.log("Parent onmouseup: " +  mouseEventObj.mouseEventCounter++); };
			this.mouseChildDiv.onmouseup = function(){ console.log("Child onmouseup: " +  mouseEventObj.mouseEventCounter++); };
		}

		if (this.eventList.onmousewheel) {
			this.mouseParentDiv.onmousewheel = function(){ console.log("Parent onmousewheel: " +  mouseEventObj.mouseEventCounter++); };
			this.mouseChildDiv.onmousewheel = function(){ console.log("Child onmousewheel: " +  mouseEventObj.mouseEventCounter++); };
		}
		

	},
	finanlize : function(){
		this.mouseParagraph.appendChild(this.mouseText);	
		this.mouseChildDiv.appendChild(this.mouseParagraph);
		this.mouseParentDiv.appendChild(this.mouseChildDiv);
		mouseEvent.appendChild(this.mouseParentDiv);
	}
}

//Mouse Events
mouseEventObj.init(
	{
		"eventList" : {
				"onmousedown"	:	true,
				"onmouseenter"	: 	true,
				"onmouseleave"	: 	false,
				"onmousemove"	: 	false,
				"onmouseout"	: 	false,
				"onmouseover"	: 	false,
				"onmouseup"		: 	false,
				"onmousewheel"	: 	false
			}
	}
);

//Window Object
var searchText = 'listener';
var timerPCounter = 0;
searchTextExist = window.find(searchText);
windowObj.innerHTML += ("<br />'"+searchText+"' exists in current page? " + searchTextExist + "<br />" );
counterP = null;
timeIntervalStart.addEventListener("click",function(){ 
				timerPCounter = 0;
				counterP = setInterval( 
							function(){ timerSpan.innerHTML = timerPCounter++; }, 1000 );  
				},false);
timeIntervalStop.addEventListener("click",function(){ clearInterval(counterP); timerSpan.innerHTML = null; },false);

timeoutAlert = null;
timeTimeoutStart.addEventListener("click",function(){
				timerTimeoutSpan.innerHTML = "You have 5 secs to stop the bomb. Click stop timout within 5 secs";
				timeoutAlert = setTimeout(function(){alert("Bombed");},5000);
},false);
timeTimeoutStop.addEventListener("click",function(){ timerTimeoutSpan.innerHTML = null; clearTimeout(timeoutAlert); },false);
var newwindow;
popWindowStatus.addEventListener("click",function(){
	if(!newwindow){
		popWindowStatusP.innerHTML = "Popup Window not open yet";
	}else{
		if(newwindow.closed){
			popWindowStatusP.innerHTML = "Popup Window is closed";	
		}else
		{
			popWindowStatusP.innerHTML = "Popup Window is still open";	
		}
	}
},false);
popWindow.addEventListener("click",function(){ 
	newwindow=window.open("./templates/storyH.html","mikeGoogle",'height=100,width=550,left=300');
	newwindow.scrollTo(200,300);
	if (window.focus) {newwindow.focus()}
	return false;
},false);  
readMoreStory.addEventListener("mousedown",function(){ newwindow.scrollBy(0,10); },false);
closePopWindow.addEventListener("click",function(e){ e.preventDefault(); newwindow.close(); },false);
nextStory.addEventListener("click",function(){ 
	newwindow=window.open("./templates/storyV.html","mikeGoogle",'height=500,width=550,location=no');
	newwindow.resizeTo(700,100);
	newwindow.moveTo(500,200); 
},false);

//Date Object
outputObj.displayTitle("Date Object");

Clock = function(){
	this.clock = "0:00:00";
	this.timer;

	this.getTime = function(){
		var now = new Date();
		var hour = now.getHours();
		var min = now.getMinutes();
		var sec = now.getSeconds();
		var ap = hour < 12 ? "am" : "pm";
		hour = ( hour < 12 ) ? hour : hour-12;
		min = ( min < 10 ) ? "0"+min : min;
		sec = ( sec < 10 ) ? "0"+sec : sec;
		this.clock = hour+":"+min+":"+sec+" "+ap;
	}
	this.showTime = function(){ 
		var clock = this;
		this.getTime();
		dateClock.innerHTML = this.clock;
		this.timer = setTimeout(function(){ clock.showTime(); },1000);
	};
}

var clock = new Clock();
outputObj.displayElement (clock.showTime());

now = new Date();
past = new Date("November 5,1955");
outputObj.displayElement (now);
outputObj.displayElement (past);
outputObj.displayElement("Day of the month = " +  now.getDate());
outputObj.displayElement("Day of the week = " +  now.getDay());
outputObj.displayElement("Time since 1970/1/1 = " +  now.getTime());
outputObj.displayElement("Time zone offet from Greenwich Mean Time in minutes based on viewer's local time zone = " +  now.getTimezoneOffset());
outputObj.displayElement("Get year = " +  now.getFullYear());
now.setDate(22);
outputObj.displayElement("Set date of current month to be 22 = " +  now);
past.setFullYear(2015);
outputObj.displayElement("Set year to be 2015 = " +  past);
old = Date.parse("November 5,1955");
past.setTime(old);

//Cookies
function displayCookieVars(){
	decodedCookieString = decodeURIComponent(document.cookie);
	var parameters = decodedCookieString.split("&");
	parameters.map(function(e){
		element = e.split("=");
		outputObj.displayElement( element[0] + ":" + element[1] );
	});
}

outputObj.displayTitle("Cookies" );
queryString = "type=car&color=green&date=yesterday";
encodedCookieString = encodeURIComponent(queryString);
document.cookie = encodedCookieString;
outputObj.displayElement("read from cookie -- " + document.cookie);
if(document.cookie){ displayCookieVars() }


//String Object
var strObjSection = "My name is Mike. This is my demo Javascript script";
var sliceString = strObjSection.slice(3,15);
var subStrString = strObjSection.substr(3,12);
var subStringString = strObjSection.substring(3,15);
outputObj.displayTitle("String Object");
outputObj.displayElement ("Slice(): '"+ sliceString + "'  --  Ori = " + strObjSection );
outputObj.displayElement ("substr(): '"+ subStrString + "'  --  Ori = " + strObjSection );
outputObj.displayElement ("substring(): '"+ subStringString + "'  --  Ori = " + strObjSection );
outputObj.displayElement ("charCodeAt(): " + strObjSection.charCodeAt(4));
outputObj.displayElement ("indexOf(): 'i`' : " + strObjSection.indexOf('i'));
outputObj.displayElement ("lastIndexOf(): 'i' : " + strObjSection.lastIndexOf('i'));
outputObj.displayElement ("fromCharCode(): 'i' : " + String.fromCharCode(97));
outputObj.displayElement ("localeCompare(): b,a:  + a<b in locals chars , this will be ordered as a,b");



//Focus & Blue
focus_blur.onfocus = function(){ console.log("focus text now"); }
focus_blur.onblur = function(){ console.log("unfocus text now"); }
focus_blur.onkeydown = function(e){ console.log("keydown") }
focus_blur.onkeyup = function(){ console.log("keyup") }
focus_blur.onkeypress = function(e){ var k = e.which || e.keyCode; console.log("keypress "+  k + " " + String.fromCharCode(k));  }

//Event Listener
function hightLight(e){this.style.backgroundColor='yellow'; alert(this.id); this.style.backgroundColor=''; }
d1.addEventListener("click",hightLight,false );
d2.addEventListener("click", hightLight, true);
d3.addEventListener("click", hightLight, false);
preventDefaultA.addEventListener("click", function(e){ console.log(this.id); e.preventDefault(); }, false);

//Math Obj
outputObj.displayTitle("Math Object" );
outputObj.displayElement("PI = " + Math.PI);
outputObj.displayElement(  );

//Event Handler
outputObj.displayTitle("Event Handler" );
outputObj.displayElement ("DOM Level 0 event handler eg....onclick, onmouseover etc..<br />");
outputObj.displayElement ("DOM Level 2 : addEventListener and attachEvent(). These offer the ability to attach multiple events to elements, example<br />");
outputObj.displayElement ("my_div.onclick = function (){ firstclick! }, my_div.onclick = function (){ second lick! },. Second will override the first.<br />");

//Attributes
contentDiv = document.getElementById("content").attributes;
outputObj.displayTitle("The properties of the Document Object");
		allImg = document.images;
		outputObj.displayElement(allImg);
		outputObj.displayElement("see log for the array");

outputObj.displayElement();
//outputObj.displayElement("cookie");
// document.cookie = "mike visted 114";
outputObj.displayElement(document.cookie);

// Dom Node property
outputObj.displayTitle("DOM Node Properties");
outputObj.displayElement ("attributes, className,firstChild,style, dir,id, iscontentEditable");
outputObj.displayElement ( "id: " + contentDiv[1].name + " --- value :"  + contentDiv[0].value);

// Dom Node method
var section1Div = document.getElementById("section1");
console.log(section1Div);
outputObj.displayTitle("DOM Node Method");
outputObj.displayElement ("addEvenListener(), appendChild(), click, hasAttribute(), replaceChild, setAttribute");
section1Div.appendChild( document.createTextNode(" - New Text Node appened -") );

new_div = document.createElement("div");
new_text = document.createTextNode("More....");
new_div.appendChild(new_text);
new_div.id = "moreId"
new_div.title = "more";
section1Div.appendChild(new_div);
section1Div.removeChild(new_div);

// Own Object Demo

var Car = function Car (name,color){
	this.name = name;
	this.color = color;
	this.detail = function(){
		outputObj.displayElement("Name: " + this.name + " color: "+ this.color +  " Type: " + this.locks) ;
	},
	this.checkProperty = function(property){
		outputObj.displayElement( "Has own '" + property + "' property? " + this.hasOwnProperty(property) );
	}
};

outputObj.displayTitle("My Object Example");

Car.prototype.locks = "automatic";

var work_car = new Car("Toyota","red");
work_car.detail();
work_car.checkProperty("locks");


outputObj.displayElement( "For in to iterate obj property" );
for (var pro_name in work_car){
	outputObj.displayElement( "Property Name: " + pro_name + " --------  Property Value: " + work_car[pro_name]);
}

outputObj.displayElement("----");

var personal_car = new Car("Honda","blue");
personal_car.locks = "manual";
personal_car.detail();
personal_car.checkProperty("locks");

outputObj.displayElement( "<br />For in to iterate obj property" );
for (var pro_name in personal_car){
	outputObj.displayElement( "Property Name: " + pro_name + " --------  Property Value: " + personal_car[pro_name]);
}

//Navigator Object

outputObj.displayTitle("Navigator Obj");
outputObj.displayElement("appname:" + navigator.appName);
outputObj.displayElement("appCodeName:" + navigator.appCodeName);
outputObj.displayElement("platform:" + navigator.platform);
outputObj.displayElement("userAgent:" + window.navigator.userAgent);
outputObj.displayElement("see console for rest of the properties");
console.log(navigator);

//History Obj

outputObj.displayTitle("History Obj");
outputObj.displayElement("lengh-num of pages in session history of current window. back(),forward(),go()");
outputObj.displayElement("see console for rest of the properties");
console.log(history);


// Array --  
	
	outputObj.newLine();
	var students = ["s1","s2","s3","mike","s1","s2","s3"];
	students = new Array("s1","s2","s3","mike","s3","s1","s2","s2","s2","s3");
	var students_classA = ["3","4","64","3"];

	outputObj.displayElement("for loop");
	outputObj.displayElement(students);

	outputObj.displayElement();
	
	outputObj.displayElement("array join , separate by comma");
	
	outputObj.displayElement(students.join(", "));

	outputObj.newLine().displayElement("pop: " + students.pop());
	outputObj.displayElement(students);

	outputObj.newLine().displayElement("push: " + students.push("mikey"));
	outputObj.displayElement(students);

	outputObj.newLine().displayElement("shift: " + students.shift());
	outputObj.displayElement(students);	

	outputObj.newLine().displayElement("unshift: " + students.unshift("mikey1"));
	outputObj.displayElement(students);


	outputObj.newLine().displayElement("reverse: " + students.reverse());
	outputObj.displayElement(students);


	outputObj.newLine().displayElement("sort: " + students.sort());
	outputObj.displayElement(students);

	outputObj.newLine().displayElement("concate: " + students.concat(students_classA));
	outputObj.displayElement(students);
	
	outputObj.newLine().displayElement("slice: 2,4 ---  " + students.slice(2,4));
	outputObj.displayElement(students);

	outputObj.newLine().displayElement("splice: 2,1 s7,s8,4,766 array --- " + students.splice(2,1,"s7","s8",4,766));
	outputObj.displayElement(students);

	outputObj.newLine().displayElement("indexOf: 's2',--- " + students.indexOf("s2"));
	outputObj.displayElement(students);	

	outputObj.newLine().displayElement("lastIndexOf: 's2',--- " + students.lastIndexOf("s2"));
	outputObj.displayElement(students);	

	outputObj.newLine().displayElement("every is not digits:   " + students.every(outputObj.everyElement));
	outputObj.displayElement(students);	

	outputObj.newLine().displayElement("filter only show digits:   " + students.filter(outputObj.filterElement));
	outputObj.displayElement(students);	

	outputObj.newLine().displayElement("For each");
	students.forEach(function(v,i){
		outputObj.displayElement(("i: "+i+" -- v: "+v ));
	});

	var _temp = [{"a":"d"},{"b":"gg"}];

		outputObj.newLine().displayElement("For each");
	_temp.forEach(function(v,i){
		outputObj.displayElement(("key: "+Object.keys(v)+" -- value: "+ v[Object.keys(v)] ));
	});
	outputObj.newLine();

	var numArray = [1,3,6,9,8,"a",1,"b",2,4,5];
	outputObj.displayElement("Ori Array   " + numArray);
	numArray = numArray.map(function(num){
		return num + 2;
	});
	outputObj.displayElement("New Array   " + numArray);
	outputObj.displayElement("Some-any num >= 11    " + numArray.some(function(num){ return num >= 11 }));


	// outputObj.newLine().displayElement("remove last string element , sum of all elements" + numArray.pop());
	outputObj.newLine().displayElement("Ori  -- reduce function   " + numArray);
	outputObj.displayElement("add all num from left " + numArray.reduce(function(total, num){ return total += num }));
	outputObj.displayElement("add all num from left " + numArray.reduceRight(function(total, num){ return total += num }));

});


