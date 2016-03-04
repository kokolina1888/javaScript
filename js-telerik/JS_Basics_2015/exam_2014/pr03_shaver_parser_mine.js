function solve(args) {
	var model={},
	modelKeyValues = +args[0],
	m = +args[modelKeyValues+1],
	parseLength = m+modelKeyValues+2,
	inShaver = false,
	inParse = false,
	inSection = false,
	result=[],
	sectionName = {},
	render = true,
	currentSectionName = '',
	currentSectionContent = [],
	allSections = [],
	currentModelKeyName = '',
	inLoop = false; 


//THE MODEL

for(var i = 1; i<=modelKeyValues; i++){
	var currentKeyValue = args[i].split(':');
	var key = currentKeyValue[0];
	var value = currentKeyValue[1];

	if(value.indexOf(',')>-1){
		value = value.split(',');
	}
	model[key] = value;
}

//READ THE INPUT


 for(var j = modelKeyValues+2; j<modelKeyValues+m+2; j+=1){

      var currentLine = args[j];
      if (currentLine === undefined) {
      currentLine = '';
       }

//END OF 
   if(!render && currentLine.indexOf('}')>-1){
      render = true;

   }


   //check ending of section
   if(inSection && currentLine.indexOf('}')>-1){
      inSection = false;
      allSections[currentSectionName] = currentSectionContent.join('\n');
      currentSectionName = '';
      currentSectionContent = [];
      continue;

   }

   if(currentLine.indexOf('}') >-1){
      continue;
   }


//append CONTENT to section
if (inSection){
   currentSectionContent.push(currentLine);
   continue;
}

//IF IN SECTION

for(var k = 0; k<currentLine.length; k+=1){
   var currentSymbol = currentLine[k];
      //check if in shaver
      if(currentSymbol == '@') {
         if (currentLine[k+1] == '@'){
            result.push('@');
            k+=1;
            continue;//not mind the first @
         }

         inShaver = true;
         continue;
      }

      //if in model
if(inShaver){
   currentModelKeyName += currentSymbol;
}
   //check if rendering section

   if(inShaver && currentLine.indexOf('@renderSection("')>-1){
     sectionName = currentLine.split('"')[1];
      var sectionContent = allSections[sectionName];
      result.push(sectionContent);
      inShaver = false;
      break;
   }

  
//exit shaver mode

if(inShaver && (currentSymbol === ' ' || currentSymbol === '<')){

   if(!inLoop && model[currentModelKeyName] && render){
      result.push(model[currentModelKeyName]);
   }
    if(inLoop){
      if(model[currentModelKeyName]){
      currentLoopContent.push(model[currentModelKeyName]);
   } 
   else {
      currentLoopContent.push('@' + currentModelKeyName);
   }
   }

   currentModelKeyName = '';
   inShaver = false;
}



//check definong of sections
if(checkIfInCommand(inShaver, currentLine, 'section ')){
//get name of section
currentSectionName = currentLine.split(' ')[1];
inSection = true;
inShaver = false;

break;

}

//check if rendering section

//add to result
if(!inShaver && !inSection && render)  {
   if(!inLoop){
      result.push(currentSymbol);

   }
   else if(inLoop){
      currentLoopContent.push(currentSymbol);
   }
}    

}
if(!inShaver && !inSection && render)  {
  if(!inLoop){
   result.push('\n');

}
else if(inLoop){
   currentLoopContent.push('\n');
}
}

}

 //console.log(allSections);
 console.log(result.join(''));

 function checkIfInCommand(inShaver, currentLine, commandToCheck){

   return (inShaver && currentLine.indexOf('@' + commandToCheck) > -1 && currentLine.indexOf('{')>-1);
}
		}

		test = [
		'6',
		'title:Telerik Academy',
		'showSubtitle:true',
		'subTitle:Free training',
		'showMarks:false',
		'marks:3,4,5,6',
		'students:Pesho,Gosho,Ivan',
		'42',
		'@section menu {',
		'<ul id="menu">',
		'    <li>Home</li>',
		'   <li>About us</li>',
		'</ul>',
		'}',
		'@section footer {',
		'<footer>',
		'    Copyright Telerik Academy 2014',
		'</footer>',
		'}',
		'<!DOCTYPE html>',
		'<html>',
		'<head>',
		'    <title>Telerik Academy</title>',
		'</head>',
		'<body>',
		'    @renderSection("menu")',
		'',
		'    <h1>@title</h1>',
		'    @if (showSubtitle) {',
		'        <h2>@subTitle</h2>',
		'        <div>@@JustNormalTextWithDoubleKliomba ;)</div>',
'    }',
'',
'    <ul>',
'        @foreach (var student in students) {',
'            <li>',
'                @student',
'            </li>',
'            <li>Multiline @title</li>',
'        }',
'    </ul>',
'    @if (showMarks) {',
'        <div>',
'            @marks',
'        </div>',
'    }',
'',
'    @renderSection("footer")',
'</body>',
'</html>',
];
solve(test);