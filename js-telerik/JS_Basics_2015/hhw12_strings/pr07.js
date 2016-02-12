var text, res,
	protokol,
	server,
	resource,
	i, len;
text 		= 'http://telerikacademy.com/Courses/Courses/Details/239';
res 		= text.split('/');
protokol 	= res[0].replace(/:/g, '');
server 		= res[2];
resource 	= res[3];
len = res.length;

for(i = 4; i < len; i++) {
	resource += '/'+res[i];
}
console.log(protokol);
console.log(server);
console.log(resource);