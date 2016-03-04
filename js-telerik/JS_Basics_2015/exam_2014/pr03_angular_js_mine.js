function solve(args){
	var model = {},
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
	inLoop= false;

	//THE MODEL

for(var i = 1; i<=modelKeyValues; i++){
	var currentKeyValue = args[i].split('-');
	var key = currentKeyValue[0];
	var value = currentKeyValue[1];

	if(value.indexOf(';')>-1){
		value = value.split(';');
	}
	model[key] = value;
}
for(var j = modelKeyValues+2; j<modelKeyValues+m+2; j+=1){

      var currentLine = args[j];
      if (currentLine === undefined) {
      currentLine = '';
       }

//END OF 
 /*  if(!render && currentLine.indexOf(' />')>-1){
      render = true;

   }*/


   //check ending of section
   if(inSection && currentLine.indexOf('</nk-template>')>-1){
      inSection = false;
      allSections[currentSectionName] = currentSectionContent.join('\n');
      currentSectionName = '';
      currentSectionContent = [];
      continue;

   }

   /*if(currentLine.indexOf(' />') >-1){
      continue;
   }*/


//append CONTENT to section
if (inSection){
   currentSectionContent.push(currentLine);
   continue;
}

//IF IN SECTION

for(var k = 0; k<currentLine.length; k+=1){
  
      //check if in shaver
      if(currentLine[0] == 'n'&&currentLine[1]=='k'&& currentLine[2] == '-') {
        
        console.log('yes');
      }

      //if in model
if(inShaver){
   currentModelKeyName += currentSymbol;
}
   //check if rendering section

   if(inShaver && currentLine.indexOf('<nk-template render="')>-1){
     sectionName = currentLine.split('"')[1];

     console.log(sectionName);
      var sectionContent = allSections[sectionName];
      result.push(sectionContent);
      inShaver = false;
      break;
   }

  
//exit shaver mode

/*if(inShaver && (currentSymbol === ' ' || currentSymbol === '<')){

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
if(checkIfInCommand(inShaver, currentLine, 'template ')){
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

   return (inShaver && currentLine.indexOf('<nk-' + commandToCheck) > -1 && currentLine.indexOf('{')>-1);
}*/
}
}

}


test = [
'6',
'title-Telerik Academy',
'showSubtitle-true',
'subTitle-Free training',
'showMarks-false',
'marks-3;4;5;6',
'students-Ivan;Gosho;Pesho',
'42',
'<nk-template name="menu">',
'    <ul id="menu">',
'        <li>Home</li>',
'        <li>About us</li>',
'    </ul>',
'</nk-template>',
'<nk-template name="footer">',
'    <footer>',
'        Copyright Telerik Academy 2014',
'    </footer>',
'</nk-template>',
'<!DOCTYPE html>',
'<html>',
'<head>',
'    <title>Telerik Academy</title>',
'</head>',
'<body>',
'    <nk-template render="menu" />',
'',
'    <h1><nk-model>title</nk-model></h1>',
'    <nk-if condition="showSubtitle">',
'        <h2><nk-model>subTitle</nk-model></h2>',
'        <div>{{<nk-model>subTitle</nk-model>}} ;)</div>',
'    </nk-if>',
'',
'    <ul>',
'        <nk-repeat for="student in students">',
'            <li>',
'                <nk-model>student</nk-model>',
'            </li>',
'            <li>Multiline <nk-model>title</nk-model></li>',
'        </nk-repeat>',
'    </ul>',
'    <nk-if condition="showMarks">',
'        <div>',
'            <nk-model>marks</nk-model>',
'        </div>',
'    </nk-if>',
'',
'    <nk-template render="footer" />',
'</body>',
'</html>'
];
solve(test);