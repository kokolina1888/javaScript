function solve(args) {
   var n = parseInt(args[0]), 
   model = {}, key, value;


   for(var i=1; i<=n; i+=1){
   	var currentKeyValuePair = args[i].split(':');
   	key = currentKeyValuePair[0];
   	value = currentKeyValuePair[1];
     if(value == 'true'){
       value = true;
    }
    else if(value == 'false'){
       value = false;
    } 
    else if(value.indexOf(',') >-1 ){
       value = value.split(',');
    }
    model[key] = value;

 }

 var m = parseInt(args[n+1]);

 var inShaver = false;
 var inSection = false;
 var render = true;
 var inLoop = false;

 var currentSectionName = '';

 var currentLoopKey = '';
 var currentLoopCollection = [];

 var currentLoopContent = [];
 var currentSectionContent = [];

 var allSections = [];

 var result = [];
 var currentModelKeyName = '';

 for(var j = n+2; j<n+m+2; j+=1){

      var currentLine = args[j];
      if (currentLine === undefined) {
      currentLine = '';
       }


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


//exit loop
/*   console.log(currentLoopContent.join(('')));
*/

   if(inLoop && currentLine.indexOf('}')>-1){
      inLoop = false;
//nothing is logged despite the right code!?
      for (m = 0; m < currentLoopCollection.length; m++) {
        var content = currentSectionContent.join('').trim()
        .replace('@'+currentLoopKey+' ', currentLoopCollection[m]+' ')
        .replace('@'+currentLoopKey + '<', currentLoopCollection[m]+'<');

        result.push(content);
        result.push('\n');
       
      }

   //render loop logic



   currentLoopKey = '';
   currentLoopCollection = [];
  
   currentLoopContent = [];

   continue;
}
//append to section
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
   //check if rendering section

   if(inShaver && currentLine.indexOf('@renderSection("')>-1){
      var sectionName = currentLine.split('"')[1];
      var sectionContent = allSections[sectionName];
      result.push(sectionContent);
      inShaver = false;
      break;
   }

   //if in if command

   if(checkIfInCommand(inShaver, currentLine, 'if ')){
      var indexOfOpenBracket = currentLine.indexOf('(');
         var indexOfClosedBracket = currentLine.indexOf(')');

         var propertyNameCondition = currentLine.substring(indexOfOpenBracket+1, indexOfClosedBracket);
         var modelValue = model[propertyNameCondition];

         if(!modelValue){
            render = false;
         }
         break;
      }


   //if in foreach 

   if(checkIfInCommand(inShaver, currentLine, 'foreach ')){
      var partsOfLoop = currentLine.trim().split(' ');
      currentLoopKey = partsOfLoop[2];
      currentLoopCollection = model[partsOfLoop[4].replace(')', '')];
      inLoop = true; 
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
//if in model
if(inShaver){
   currentModelKeyName += currentSymbol;
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

var test = [
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
'    <li>About us</li>',
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
'   @if (showSubtitle) {',
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
'</html>'
];

solve(test);
