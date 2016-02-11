// Write a function that checks if a given object contains 
//a given property.
//    var obj  = …;
//    var hasProp = hasProperty(obj, 'length');

var buz = {
  fog: 'stack'
};

//console.log(buz.hasOwnProperty('ifog'));

/*function hasProperty(obj, name) {
	
  if (obj.hasOwnProperty(name)) {
    console.log('yes');
  } else {
  	console.log('no');
  } 

}*/
function hasProp (obj, prop) {
  if (Object.prototype.hasOwnProperty.call(obj, prop)){
  	console.log('yes');
  } else {
  	console.log('no');
  }
}

hasProp(buz, 'fog');


